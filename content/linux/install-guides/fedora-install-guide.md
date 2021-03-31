---
title: Hướng dẫn cài đặt Fedora Workstation 34
linktitle: Fedora Workstation 34
toc: true
type: book
date: "2020-11-04T00:00:00+01:00"
draft: false

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 41
---

<!-- ```md
{{< youtube  >}}
```
*Note that this written guide is an updated version of the video and contains much more information.*

***Please feel free to raise any comments or issues on the [website's Github repository](https://github.com/wmutschl/website-academic). Pull requests are very much appreciated.***

## Overview 
Since Fedora switched their default filesystem to btrfs I decided to give it a go as I am exclusively using btrfs aon all my systems, see: [Why I (still) like btrfs](../../btrfs/). Fedora's automatic installation routine with encryption is actually almost perfect for me except some changes regarding the btrfs mount options and subvolume names. 

So, in this guide I will show how to install Fedora 33 with the following structure:

- a btrfs-inside-luks partition for the root filesystem containing a subvolume `@` for `/` and a subvolume `@home` for `/home`. Note that the Fedora installer creates subvolumes `root` for `/` and `home` for `/home`, so we need to rename these otherwise [Timeshift](https://github.com/teejee2008/timeshift) will not work properly.
- an unencrypted EFI partition for the GRUB bootloader
- Optionally, I will also show how to encrypt the `/boot` partition, so you get a full-disk-encryption-system (including `/boot`) and only one passphrase prompt from GRUB.
- there is no need for a swap partition as Fedora creates a [SwapOnZram](https://fedoraproject.org/wiki/Changes/SwapOnZRAM) during start-up
- automatic system snapshots and easy rollback similar to *zsys* using:
   - [Timeshift](https://github.com/teejee2008/timeshift) which will regularly take (almost instant) snapshots of the system
   - [timeshift-autosnap-dnf](https://github.com/wmutschl/timeshift-autosnap-dnf) which will automatically run Timeshift on any dnf operation and also keep a backup of your EFI partition inside the snapshot
   - [grub-btrfs](https://github.com/Antynea/grub-btrfs) which will automatically create GRUB entries for all your btrfs snapshots
- If you need RAID1, follow this guide: [Fedora 33 btrfs-luks-raid1](../fedora-btrfs-raid1)

With this setup you basically get the same comfort of Ubuntu's 20.04's ZFS and *zsys* initiative, but with much more flexibility and comfort due to the awesome [Timeshift](https://github.com/teejee2008/timeshift) program, which saved my bacon quite a few times. This setup works similarly well on other distributions, for which I also have [installation guides with optional RAID1](../../install-guides).

**If you ever need to rollback your system, checkout [Recovery and system rollback with Timeshift](../../timeshift).**


## Step 0: General remarks
**I strongly advise to try the following installation steps in a virtual machine first before doing anything like that on real hardware!**

So, let's spin up a virtual machine with 4 cores, 8 GB RAM, and a 64GB disk using e.g. the awesome bash script [quickemu](https://github.com/wimpysworld/quickemu). I can confirm that the installation works equally well on my Dell XPS 13 9360 and my Dell Precision 7520. 

This tutorial is made with Fedora 33 Workstation from https://getfedora.org/de/workstation/download/ copied to an installation media (usually a USB Flash device but may be a DVD or the ISO file attached to a virtual machine hypervisor).


## Step 1: Graphical installer with automatic configuration and encryption
Boot the installation medium in UEFI mode and choose `Install to Harddrive`. Choose your language, Keyboard, Time & Date setting. Note that the Done button is (weirdly) on the top left corner. Then hit `Installation Destination`. Choose your harddisk and

- select `Automatic` under `Storage Configuration`
- `Encrypt my data` under `Encryption`

Click `Done` and enter your disk encryption passphrase, choose a good one. You will return to the Installation Summary screen. Click `Begin Installation`. When the installation process is finished, select `Finish Installation`. Reboot your system and go through the welcome screen.

## Step 2: Post-Installation steps
Open a terminal (<kbd>META</kbd> + <kbd>term</kbd> + <kbd>Enter</kbd>), switch to an interactive root session and run the following commands:
```bash
sudo -i
lsblk
# NAME                                          MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
# zram0                                         251:0    0   1.9G  0 disk  [SWAP]
# vda                                           252:0    0    64G  0 disk  
# ├─vda1                                        252:1    0   600M  0 part  /mnt/sysroot/boot/efi
# ├─vda2                                        252:2    0     1G  0 part  /mnt/sysroot/boot
# └─vda3                                        252:3    0  62.4G  0 part  
#   └─luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf 253:2    0  62.4G  0 crypt /home

btrfs subvolume list /
# ID 256 gen 169 top level 5 path home
# ID 258 gen 169 top level 5 path root
# ID 265 gen 24 top level 258 path var/lib/machines

ls /dev/mapper
# control luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf

blkid
# /dev/vda1: UUID="4FD9-A843" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="9b25248e-f8fb-456d-8a9b-4b7025107794"
# /dev/vda2: UUID="7d52fc6e-8804-4a34-8d16-b185d6d62319" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="f4479656-e55d-46a6-bd60-0f04f833d754"
# /dev/vda3: UUID="6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf" TYPE="crypto_LUKS" PARTUUID="d20fbfac-af98-43bc-a01b-007719a37100"
# /dev/mapper/luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf: LABEL="fedora_localhost-live" UUID="11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a" UUID_SUB="7353fe42-342b-42dd-b4b0-ab00cebfacbd" BLOCK_SIZE="4096" TYPE="btrfs"
# /dev/zram0: UUID="07753a1d-ee0b-49b3-a6fc-0c1828bf1727" TYPE="swap"
```
Note that my disk is called `vda`, in most cases they are called `sda` for normal SSD and HDD, whereas for NVME storage the naming is `nvme0`. Also my luks crypt is named `luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf`, where the number is the UUID of `/dev/vda3`.


### Mount the btrfs top-level root filesystem

Let's mount our the top-level btrfs volume (which has always id 5):
```bash
mkdir /btrfs_pool
mount -o subvolid=5 /dev/mapper/luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf /btrfs_pool
ls /btrfs_pool
# home root
```

### Create btrfs subvolumes `@` and `@home`

Now the simplest way to get `@` and `@home` is to rename `root` and `home`, i.e.:

```bash
mv /btrfs_pool/root /btrfs_pool/@
mv /btrfs_pool/home /btrfs_pool/@home
btrfs subvolume list /btrfs_pool
# ID 256 gen 345 top level 5 path @home
# ID 258 gen 346 top level 5 path @
# ID 265 gen 24 top level 258 path var/lib/machines
```

### Make changes to fstab with optimized mount options
We need to let fstab know that our subvolume names have changed to @ and @home. Also I like to mount /btrfs_pool for better access of my subvolumes. Lastly, there is some general agreement to use the following mount options to optimize performance and durability on SSD or NVME drives:

- `ssd`: use SSD specific options for optimal use on SSD and NVME
- `noatime`: prevent frequent disk writes by instructing the Linux kernel not to store the last access time of files and folders
- `space_cache`: allows btrfs to store free space cache on the disk to make caching of a block group much quicker
- `commit=120`: time interval in which data is written to the filesystem (value of 120 is taken from Manjaro's minimal iso)
- `compress=zstd`: allows to specify the compression algorithm which we want to use. btrfs provides lzo, zstd and zlib compression algorithms. Based on some Phoronix test cases, zstd seems to be the better performing candidate
- `discard=async`: [Btrfs Async Discard Support Looks To Be Ready For Linux 5.6](https://www.phoronix.com/scan.php?page=news_item&px=Btrfs-Async-Discard)

Let's make these changes with a text editor, e.g.:
```bash
nano /etc/fstab
```
or use these `sed` commands
```bash
sed -i 's/subvol=root/subvol=@,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async/' /etc/fstab
sed -i 's/subvol=home/subvol=@home,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async/' /etc/fstab
echo "UUID=$(blkid -s UUID -o value /dev/mapper/luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf)   /btrfs_pool   btrfs   subvolid=5,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0   0 0" >> /etc/fstab
```

Either way your `fstab` should look like this:
```bash
cat /etc/fstab
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /                       btrfs   subvol=@,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0      0 0
# UUID=7d52fc6e-8804-4a34-8d16-b185d6d62319 /boot                   ext4    defaults                                                                                                1 2
# UUID=4FD9-A843                            /boot/efi               vfat    umask=0077,shortname=winnt                                                                              0 2
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /home                   btrfs   subvol=@home,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0  0 0
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /btrfs_pool             btrfs   subvolid=5,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0    0 0
```
We need to let GRUB know about the changes as well:
```bash
grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg
```

## Step 3: Reboot, some checks, and update system
Cross your fingers and reboot:
```bash
reboot now
```
Now let's open up a terminal to see whether everything is set up correctly:

```bash
sudo cat /etc/crypttab
# luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf UUID=6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf none discard

sudo cat /etc/fstab
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /                       btrfs   subvol=@,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0      0 0
# UUID=7d52fc6e-8804-4a34-8d16-b185d6d62319 /boot                   ext4    defaults                                                                                                1 2
# UUID=4FD9-A843                            /boot/efi               vfat    umask=0077,shortname=winnt                                                                              0 2
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /home                   btrfs   subvol=@home,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0  0 0
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /btrfs_pool             btrfs   subvolid=5,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0    0 0

sudo mount -av
# /                        : ignored
# /boot                    : already mounted
# /boot/efi                : already mounted
# /home                    : already mounted
# /btrfs_pool              : already mounted

sudo mount -v | grep /dev/mapper
# /dev/mapper/luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf on / type btrfs (rw,noatime,seclabel,compress=zstd:3,ssd,discard=async,space_cache,commit=120,subvolid=258,subvol=/@)
# /dev/mapper/luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf on /btrfs_pool type btrfs (rw,noatime,seclabel,compress=zstd:3,ssd,discard=async,space_cache,commit=120,subvolid=5,subvol=/)
# /dev/mapper/luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf on /home type btrfs (rw,noatime,seclabel,compress=zstd:3,ssd,discard=async,space_cache,commit=120,subvolid=256,subvol=/@home)

sudo swapon
# NAME       TYPE      SIZE USED PRIO
# /dev/zram0 partition 1.9G   0B  100

sudo btrfs subvolume list /
# ID 256 gen 464 top level 5 path @home
# ID 258 gen 464 top level 5 path @
# ID 265 gen 428 top level 258 path var/lib/machines
```

Let's update the system and reboot one more time:

```bash
sudo dnf upgrade
sudo reboot now
```

## Step 4: Install Timeshift

Open a terminal and install some dependencies:
```bash
sudo dnf install -y git make
```
Install Timeshift and configure it directly via the GUI:
```bash
sudo dnf install timeshift
sudo timeshift-gtk
```
   * Select “BTRFS” as the “Snapshot Type”; continue with “Next”
   * Choose your BTRFS system partition as “Snapshot Location”; continue with “Next”
   * "Select Snapshot Levels" (type and number of snapshots that will be automatically created and managed/deleted by Timeshift), my recommendations:
     * Activate "Monthly" and set it to 2
     * Activate "Weekly" and set it to 3
     * Activate "Daily" and set it to 5
     * Deactivate "Hourly"
     * Activate "Boot" and set it to 3
     * Activate "Stop cron emails for scheduled tasks"
     * continue with "Next"
     * I also include the `@home` subvolume (which is not selected by default). Note that when you restore a snapshot, Timeshift will let you choose whether you want to restore `@home` as well (which in most cases you don't want to). But I find it most handy to have snapshots of both at hand.
     * Click "Finish"
   * "Create" a manual first snapshot & exit Timeshift

*Timeshift* will now check every hour if snapshots ("hourly", "daily", "weekly", "monthly", "boot") need to be created or deleted. Note that "boot" snapshots will not be created directly but about 10 minutes after a system startup.

*Timeshift* puts all snapshots into `/run/timeshift/backup`. Conveniently, the real root (subvolid 5) of your BTRFS partition is also mounted here every time you start Timeshift, so it is easy to view, create, delete and move around snapshots manually. But you can also use `/btrfs_pool` for that.

```bash
ls /run/timeshift/backup
# @  @home  timeshift-btrfs
ls /btrfs_pool
# @  @home  timeshift-btrfs
```
Note that `/run/timeshift/backup/@` contains your `/` folder and `/run/timeshift/backup/@home` contains your `/home` folder.

I still need to figure out similar features to [timeshift-autosnap-apt](https://github.com/wmutschl/timeshift-autosnap-apt.git) and [grub-btrfs](https://github.com/Antynea/grub-btrfs.git). Anyways, before I do any dnf operations, I make a snapshot on the command line using:

```bash
sudo timeshift --create --comments "before upgrade"
sudo dnf upgrade
```

Make sure to delete the snapshots every once in a while, you could set up a systemd process for this as described [here](https://forum.endeavouros.com/t/howto-gpt-uefi-install-with-full-disk-encryption-btrfsonluks-with-separate-root-home-and-pkg-subvolumes-hibernation-with-a-swapfile-auto-snapshots-with-easy-system-rollback-gui-boot-into-snapshots/3782)




## STEP 5 (OPTIONAL): Full disk encryption including `/boot`
I actually like to use a Yubikey as a second factor to unlock my luks partition, for this I need an unencrypted `/boot` partition (see my [Things to do after install Fedora 33](../fedora-post-install)), so I usually skip this step. 

If your needs are different, then it is also possible to fully encrypt your system based upon [security_modules in Grub2](https://fedoraproject.org/wiki/Changes/Include_security_modules_in_efi_Grub2), i.e. to also put `/boot` inside a luks container and let GRUB unlock this first and pass on the passphrase to unlock your root partition as well. If you want this, then follow on and open up an interactive root shell:
```bash
sudo -i
```

### Backup the files in your boot partition
The boot partition is on `/dev/vda2`, whereas the efi partition is on `/dev/vda1`. Let's backup the boot partition:
```bash
umount /boot/efi
rsync -avuP /boot/ /boot.bak/
```

### Create luks1 partition for boot
GRUB is able to decrypt luks version 1 partitions at boot time, but by default version 2 is used in cryptsetup. So we need to prepare the luks1 partition or else GRUB will not be able to unlock the encrypted device. Note that most Linux distributions also default to version 1 if you do a full disk encryption (e.g. Manjaro Architect). This step is still work-in-progress as I need to figure out how to prompt only once for the passphrase.

```bash
umount /boot
cryptsetup luksFormat --type=luks1 /dev/vda2
# WARNING!
# ========
# This will overwrite data on /dev/vda2 irrevocably.
# Are you sure? (Type uppercase yes): YES
# Enter passphrase for /dev/vda2: 
# Verify passphrase:
```
Now map the encrypted partition to a device called `crypt-boot` and choose a filesystem (e.g. ext4 or btrfs)

```bash
cryptsetup luksOpen /dev/vda2 crypt-boot
# Enter passphrase for /dev/vda2:

ls /dev/mapper/
# control  crypt-boot  luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf

mkfs.btrfs /dev/mapper/crypt-boot
```

### Correct fstab, crypttab and restore boot backup files
Let's find out the new UUID of our encrypted boot partition:
```bash
blkid | grep crypt-boot
# dev/mapper/crypt-boot: UUID="3f75f101-bbe7-4850-9b33-a2196807fb01" UUID_SUB="984444d1-66fb-4d09-9586-8cb876653c28" BLOCK_SIZE="4096" TYPE="btrfs"
```
and replace the old UUID of the boot partition with the new one in /etc/fstab, also making sure that btrfs is the filesystem:
```bash
nano /etc/fstab
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /                       btrfs   subvol=@,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0      0 0
# UUID=3f75f101-bbe7-4850-9b33-a2196807fb01 /boot                   btrfs   defaults         0 0
# UUID=4FD9-A843                            /boot/efi               vfat    umask=0077,shortname=winnt                                                                              0 2
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /home                   btrfs   subvol=@home,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0  0 0
# UUID=11fa3de5-bfb4-4227-a5ee-d8a3d2d2304a /btrfs_pool             btrfs   subvolid=5,ssd,noatime,space_cache,commit=120,compress=zstd,discard=async,x-systemd.device-timeout=0    0 0
```

Also add an entry for the crypt-boot container to /etc/crypttab:
```bash
blkid | grep vda2
# UUID="84fbddb8-984c-4dda-b5b7-27a49864b5f8" TYPE="crypto_LUKS" PARTUUID="e4007823-54ac-4bce.929d-7616a04f59a8"

nano /etc/crypttab
# luks-6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf UUID=6e7e8f26-4f38-468e-aa2c-9ddaaad4aedf none discard
# crypt-boot                                UUID=84fbddb8-984c-4dda-b5b7-27a49864b5f8 none discard
```

Let's remount the boot partition, restore the backup, and mount the efi partition:
```bash
mount /boot
rsync -avuP /boot.bak/ /boot/
mount /boot/efi
```

### Enable cryptodisk in GRUB
```bash
echo "GRUB_ENABLE_CRYPTODISK=y" >> /etc/default/grub
```

### Regenerate the initram disk and Grub
```bash
dracut --force --regenerate-all --verbose
grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg
```

### Reboot and check whether this works
Grub should ask for the password for the boot partition and then for the root partition. You will then also need to reenter your password for the root partition. If the system then starts, the change is successful, but we need to simplify the passphrase situation using a keyfile for filesystem root (or clevis package and a tpm).

### Get rid of additional passphrase prompts [WIP]
Not yet... Write me an email, if you know how!



**FINISHED! CONGRATULATIONS AND THANKS FOR STICKING THROUGH!**
 -->


