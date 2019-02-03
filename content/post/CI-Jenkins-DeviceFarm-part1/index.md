
+++
title = "Setup an automated testing server with Jenkins and AWS Device farm"
date = 2019-01-18
draft = false

tags = [ "Jenkins", "Continuous Integration", "git", "AWS", "AWS Device Farm" ]
categories = ["Development"]

[image]
  # Caption (optional)
  caption = "CI Server Configuration"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Center"
  preview_only = true
+++

In this post we will configure a fully functional testing server. We will have gone through configuration of Jenkins, AWS Device Farm and the integration between both services.

We will configure:

 - Jenkins initial configuration
 - Jenkins remote build trigger
 - Jenkins GitHub SSH credentials
 - Jenkins Build environment
 - AWS Device Farm initial setup
 - AWS Device Farm YAML configuration file
 - Jenkins AWS Device Farm plugin
 - General overview
 - What to do next

# Introduction
At [Wave](https://waveapplication.com) we are working on a geolocation app for parents and schools to keep track of kids as they go and come from school by bus. This awesome app is called [Ẁola Schools](https://wolamaps.com/schools/).

# Chronology
This project has been in the making for a very long time. First we had to create the Calabash tests and the ruby gem needed to setup the app and it's environment to the desired point. Once we had a good part of this done, we started thinking on ways to automatically test the latest app released by the developers when they released it. This would help us focus on bugs and weird scenarios instead of repeating the most basic scenarios again and again.

We finally decided to use Jenkins as an automation server and host it in a AWS EC2 instance. AWS Marketpace has a [Bitnami preconfigured instance](https://bitnami.com/stack/jenkins/cloud/aws) that does a good job of setting up the necessary requirements and configurations. We also used this.

We decided we wanted to use AWS Device Farm because of the wide range of devices we can test the apps in. From different versions of Android and iOS to different screen sizes.

Once these decisions where all taken, it was time to start integrating everything together. For the purpose of clarity, I will divide this entry by technologies.


# jenkins
As said above, we decided to use [Bitnami's special Jenkins instance for AWS EC2.](https://bitnami.com/stack/jenkins/cloud/aws) This will take off initial workload configuring Jenkins in a normal EC2 instance. Even if you are not familiar with EC2, this won't be a complicated procedure.
## Initial configuration
Once the instance is up and running, Jenkins will prompt you with a configuration wizard. Select the options that mostly interest you and your needs.

To setup this particular environment, we will need the aws-device-farm plugin, the GitHub plugin and the Rvm plugim.
We intend to execute a build when the developers have uploaded a new app into our S3 archive.
Our developers have a script that automatically builds and uploads the app. It would be wonderful to notify Jenkins when this happens. Thankfully, Jenkins provides a way to do so.

## Upgrading Jenkins

To upgrade Jenkins, if you are using the Bitnami version, you can bundle the commands shown in [their web page](https://docs.bitnami.com/oci/apps/jenkins/administration/upgrade/) and create a script to automatically upgrade it.

## Creating the remote build trigger
To create the remote build trigger, we need:

- A dedicated user :heavy_multiplication_x:
- The same user's API token :heavy_multiplication_x:
- Jenkins URL :heavy_check_mark:
- Authentication token :heavy_multiplication_x:

### Creating a dedicated user and token
In order to create our user in Jenkins, go to `Manage Jenkins > Manage Users ` and **click on create user** in the top left column. Enter the details it asks for and click on create user.

Once you have done this, go to `Manage Jenkins > Configure Global Security ` and **add the user** you have just created. Now only assign it the necessary permissions.

Now **logout of your current session** and enter Jenkins with the newly created user. We are going to create a token for it. 
In order to create a token for programmatic access, click on the user profile at the top right and then on "configure" at the left side of the dashboard.
Once in the user's configuration section, **click on "Add new token" under the "API token" category**.
We will use this token to authenticate ourselves as this user from the external command.

### Creating the authentication token

Click on the desired project to build with the command and then go to `Configure > Build Triggers` and **Check** the "Trigger builds remotely" check box.
Now **generate a secure Authentication token**. Create a unique string, unrelated with the user's password.

### Composing the remote build trigger

Now we have everything we need in order to generate the remote build command. The command will look like this.

- `curl -X POST -u userToGenerateBuild:UserAPIToken https://your/jenkins/url/job/your-item-name/build\?token\=authentication-token`

- `curl -X POST -u userToGenerateBuild:UserAPIToken https://your/jenkins/url/job/your-item-name/buildWithParameters\?token\=authentication-token\&cause\=testing+remote+build+trigger`

The first command will execute the build without any parameters but the second command will execute the build with parameters.
This can be useful to tell Jenkins what tests you want it to run.


Now we have setup the build trigger, we need to setup Jenkins to actually do something once this trigger is executed.
The next step we want to do is to configure Jenkins to download our latest tests from GitHub.

## Configuring GitHub for Jenkins

To configure Jenkins to automatically download the latest GitHub master branch once the build has bee triggered, we need to:

- Create a GitHub ssh key :heavy_multiplication_x:
- Configure GitHub credentials :heavy_multiplication_x:
- Configure the plugin :heavy_multiplication_x:

### Creating the GitHub key

Open a terminal emulator on your local machine and enter `ssh-keygen -C "sshKeyDescription"`. This will create two files, a public and a private key.
Go to your GitHub account (That has access to the repo you want to clone in the Jenkins job) go to `settings > SSH and GPG keys > new SSH key` and enter a descriptive title for the key.
Copy the contents of the public key, this is the file ending with `.pub` into the "key" field and then click on "add SSH key".
### Configuring credentials in Jenkins

Go to `Manage Jenkins > Configure System > GitHub > Credentials > Add` and click on Jenkins. Now on "kind" **select "SSH Username with private key"**.
Enter your GitHub username, on Private Key select "Enter directly" and enter the private SSH key into the text box field. If you have used a passphrase generating the SSH key, enter the passphrase and then enter the descripion.
### Configuring the plugin

Once we have everything setup, we go to `Source Code Managment > Git > Repository URL` and enter the SSH address for the GitHub repository. It will be like `git@github.com:account/repository.git`
From the credentials dropdown menu, select the newly created one and then enter the branch you want to build.


Now, whenever we execute the run script with the remote trigger command, Jenkins will begin the run and download our latest code from the remote branch specified.
Let's recreate the build environment we need to generate the files needed for AWS Device Farm.

## Jenkins Build environment

Our goal in this step is to prepare every file needed by the AWS Device Farm to execute the actual command that will start the acceptance tests.
To do this, we need to:

- Upgrade Jenkins :heavy_multiplication_x:
- Configure the Jenkins build environment with ruby (RVM) :heavy_multiplication_x:
- Configure some local variables :heavy_multiplication_x:
- Download the .apk file from our S3 bucket :heavy_multiplication_x:
- Resign the .apk file :heavy_multiplication_x:
- Recreate the local environment on the cloud :heavy_multiplication_x:

### Configure the Jenkins build environment with ruby (RVM) 

We need ruby in our Jenkins environment because we want to resign the app in this step of the process. If you want to resign and build directly from AWS Device farm, you really don't need to use calabash-android and therefore you don't need ruby in the Jenkins environment.

SSH over to the AWS instance and install rvm and ruby. 
The command will be similar to: `ssh username@machine -i path/to/pemFile.pem`.

Now, [install RVM](https://rvm.io/rvm/install) and download the ruby version you use in your environment. To make sure everything is working correctly you can call `which ruby`. It should print out the location of the ruby it's using.

Make sure java jdk is correctly installed. In our case, we had Java jre but we needed Java jdk. (calabash-android dependencies)

Make sure you have every necessary program needed by calabash-android. For example: build-tools (calabash-android dependencies)

Once all of this is done, we can start to download necesary files and execute commands needed to generate the test environment. In our solution, we download the latest android `.apk`, we sign it and we compress it all together with the latest Master branch from our testing repository. We do this to setup the necessary files for the AWS Device Farm plugin.

To do this, we have created a little script that performs these actions. If it gets more complicated than this, I suggest you should create a script in your repo and clone it in the initial Configuration. This way, your script is always version controlled.

## AWS Device Farm initial setup

Once all of this is done, we start configuring [AWS Device Farm](https://aws.amazon.com/es/device-farm/). The Jenkins plugin needs some valid credentials with access to aws. To provide it with the necessary credentials, go to `Manage Jenkins > Configure System > AWS Device Farm` there you can **enter the AWS access key ID and the AWS Secret access key ID**. To generate them, go to your AWS account and create a account with programmatic access to AWS Device farm through the IAM.

Once the credentials are dealt with, we have to enter the AWS Device Farm console and **create a new project**. This way, we will be able to select it from the Jenkins AWS Device Farm plugin. After the project has been created, create a new run.

During this process, you will have to upload a `.apk` file, set a run name and other things but the most important part of this process is to realize that you want to create a custom test environment for your calabash-android tests.

This requires a ruby machine and the possibility to create a `.yml` configuration file to replicate our local test environment.

AWS Device farm doesn't support a custom test environment for Calabash tests, so **instead of selecting Calabash on the Test drop down menu, select Appium Ruby**.
[Thread on AWS forums explaining the situation](https://forums.aws.amazon.com/message.jspa?messageID=884497#884497).

This provides a ruby machine and the ability to replicate our local test environment with the `.yml` file. Exactly what we need.


## AWS Device Farm YAML configuration file

During the Appium Ruby run configuration, you are required to upload a `.zip` file containing the necessary files needed to execute the test. Once these are met, you will be presented with the default TestSpec for Android Appium Ruby. This is the file that you have to change in order to reproduce your local test environment.

Some advices:

- Write `rvm use your.ruby.version` on every phase
- Add ```export TMPDIR="/tmp/tempdir"
export TMP="/tmp/tempdir"
export TEMP="/tmp/tempdir"``` in the install section. [As described by this poost](https://forums.aws.amazon.com/message.jspa?messageID=884930).
- If you want to resign and build the .apk with a custom keystore, [this might help](https://forums.aws.amazon.com/message.jspa?messageID=885269#885269).

Once you are satisfied with your `.yml` file, save it. you will want to use it later on with the Jenkins plugin.

## Jenkins AWS Device Farm plugin

To configure your build with the plugin, you have to go to `your-job > configure > Post-build Actions` and select `Run tests on AWS Device Farm`. This will open a new module in wich you will be able to configure the AWS Device Farm build.

Select the project, Device Pool and select the Application (The one downloaded in the build settings. The one you want to test).

**Tick the `Appium Ruby`** tests and enter the name or location of the `.zip` file you generated that includes everything you need to succesfully run the tests. Note this has to be one file, so if you need more than one file, compress it in your build.

Select `Custom environment` and select the one you saved earlier in the AWS Device Farm console. The other settings are inimportant. Select the ones you want, apply and save changes.

Now we have correctly configured the AWS Device Farm plugin on Jenkins.

# General overview

During this post, we have created from scratch a testing pipeline that enables the developers to run the tests on the features/workflow/work they has just finished doing. This enables us to focus on less trivial tests and therefore improve the whole app.

When the developers have finished working on some part of the app, they build a new `.apk` with a script, that also uploads it to AWS S3 and notifies Jenkins with the remote build trigger command. Once Jenkins has started it's process, it downloads the latest code from the master branch of our testing repository. After this is done, Jenkins downloads the latest `.apk` file from the AW S3 bucket the developers have uploaded it to. It then resigns the `.apk` file and comrpesses every file the AWS Device Farm plugin needs to recreate and run the tests. Once everything is setup, it sends the `.apk` file along with the `.zip` file containing everything to AWS Device Farm and it starts working on the tests. Once the tests are completed, it notifies Jenkins of the ones that passed ant the ones that didn't pass.

# Future work

- Enabling the developer to select what tests he wants to run is a work in progress. We would like to provide the developer with a series of tags that he sends to Jenkins with his remote trigger command. This way, we have the information needed and we only have to substitute in the tags in the `.yml` file.

- Requiring the developers to check their changes against these tests before they push to Master.

