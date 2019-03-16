+++
title = "How to \"remote deep learning\"?"
date = 2018-08-16T00:52:17+05:30
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["uddeshya"]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
# projects = ["internal-project"]

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++
# Pre-reqs
I am assuming that remote machine and local machine (both running linux aka ubuntu :P) have the necessary libs/packages installed and package versions are consistent across the machine, not having this consistency might lead to some minor blocks which may require some tinkering.

* On local machine : `VSCode + rmate extention`
* On remote machine : `rmate + ipython (with jupyter)`

# On local machine ...
On local machine setup VScode with rmate extention. It's better to change the remote port to something other than the default value say `32000` by changing the user-settings in vscode, something like `"remote.port": 32000`

# On remote machine ...
* Get `rmate` using 

    ```
    $ sudo wget -O /usr/local/bin/rmate https://raw.github.com/aurora/rmate/master/rmate
    ```

* Edit `/usr/local/bin/rmate` to change the default port number to the value set on VScode on local machine i.e `32000`

* do `sudo chmod a+x /usr/local/bin/rmate`

Now we can edit the files on remote machine using VScode on local machine
    
* Start the remote server in VScode on local machine using 
    
    `Ctrl + Shift + P` and  `>Remote: start server`

* Connect to remote machine using 

    `ssh -R 32000:localhost:32000 REMOTE_MACHINE_IP_ADDRESS`

* Open the file on the remote machine using rmate, i.e `rmate test.txt` . This should open the file in VScode on local machine

## To open remote jupyter server on local machine
* On remote machine start ipython server using

    ```
    $ ipython notebook --no-browser --port=8889
    ```

* Connect to remote server using 

    ```
    $ ssh -N -f -L localhost:8888:localhost:8889 REMOTE_MACHINE_IP_ADDRESS
    ```
    here 8888 is port on local machine and 8889 is port on remote machine

* On local machine open the browser and visit `localhost:8888/`
