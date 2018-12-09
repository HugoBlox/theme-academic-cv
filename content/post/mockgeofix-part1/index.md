+++
title = "Leverage the power of open source and don't reinvent the wheel"
date = 2018-12-01T17:21:08+01:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["open source", "gpx", "github"]
categories = ["Development"]

+++

During this post, I'll talk about how I needed a utility and how I cloned and modified a repository to achieve what I needed.

## Introduction

One of the things I'm working on at [waveapplication](https://waveapplication.com/) is test automation using calabash to ensure the quality of the apps before publishing to the app store. We are working towards a complete Continuous Integration and Continuous Delivery and to do so, we need end-to-end functional tests (Apart from Unit and Integration tests) In this specific case, I needed to fake GPS locations on a Android device.

## Requirements

Given I'll be needing this utility to setup the app to a specific state in order to check a specific feature/functionality of the app, I have specific requirements such as the ones below.

* Terminal-based utility 
* Lightweight
* Ability to reproduce a route passed to it as a _.gpx_ file.

## Research

Before starting to code frenetically, I stopped to do some research on the available methods and technologies available to accomplish given task. I found out that android's [ADB](https://developer.android.com/studio/command-line/adb?hl=es-419) provides developers with a specific command to change the devices location. 

### `geo fix`

Given two arguments (`Longitude` and `Latitude`) in decimal degrees and optional parameters `satelites` and `altitude` it mocks the android device's location to the parameters given.  
Once I knew the whole project could be done with `geo fix` I looked for open source repositories that had already implemented this functionality as I was sure of their existence. The first project I found was [mockgeofix](https://github.com/luv/mockgeofix) created by [luv](https://github.com/luv) this repository that had met all of my requirements except one, It required a app installed on the android device to mock the device's location. This wasn't an option for me but nevertheless I decided to clone the repository and give it a try.

### telnet

This will be used to send the `geo-fix` commands to the android device given a port and an IP.

## Adapting mockgeofix to my specific needs

This utility had everything I needed to mock the device's GPS location. It could even adapt the route to a given speed in km/h. The only thing incompatible with my requirements was the need of an external app for it to work but luckily, there is an alternative for that. These are the steps I followed to adapt the utility to my needs.

### Clone the repository and remove the code I don't need.

Once I had gone through the code, I removed all of the java code (Used for the android application) and only kept the file I was interested in `run_sim.py` and all the files it depends upon. I also created a `requirements.txt` file to simplify the process needed to get the code up and running.

### Add includes needed for telnet and arguments for telnet security verification

To use Telnet, the program requires you to introduce a security password located in `~/.emulator_console_auth_token`. This grants permission to the client to execute methods such as `geo fix`.  
This means I had to include the argument option in the code.

### Adapt the main thread

This thread connected to the android app and then sent the `geo fix` commands to it. Now, it simply connects to the phone via telnet and sends the commands directly to it.
```Python
def start_geofix(args):
    # Start the telnet connection
    tn = telnetlib.Telnet(args.ip, args.port)
    # Wait until keyword "OK" appears
    tn.read_until("OK")
    # Perform security verification
    # The code is located in ~/.emulator_console_auth_token
    tn.write("auth " + args.auth + "\n")
    tn.read_until("OK")
    while True:
        # Send "geo fix" commands forever
        tn.write("geo fix %f %f\r\n" % (curr_lon, curr_lat))
        time.sleep(UPDATE_INTERVAL)
```

## How to run the code:

### Requirements
1. [python 2.7](https://www.python.org/downloads/release/python-2715/)
2. [virtualenv](https://virtualenv.pypa.io/en/latest/)

### Usage

Note: To work, this needs a connected device or a emulated virtual device running

1. `git clone git@github.com:SergioRosello/mockgeofix.git`
2. In project root directory: `source ENV/bin/activate`
3. In project root directory: `pip install -r requirements.txt`
4. In project root directory: `python run_sim.py -i targetIP -g path/to/gpx/file.gpx -t emulatorConsoleAuthToken`

### `run_sym.py`'s parameters

Below is a list of parameters used by `run\_sym.py` script.

#### Required parameters

* `-i` or `--ip`: The ip address where it will find the device
* `-g` or `--gpx-file`: The `.gpx` file used to trace the route
* `-t` or `--auth`: Auth token for telnet authentication

#### Not required parameters

* `-p` or `-port`: The port used to connect. Default value: 5554
* `-S` or `--sleep`: Sleep between track points. Default value: 0.5
* `-s` or `--speed`: Speed in km/h (Takes precedence over -S)
* `-I` or `--listen-ip`: Run a HTTP server visualizing mocked locations on this ip
* `-P` or `--listen-port`: HTTP server's port. Default value: 80

## Final result

The final state of the project can be seen [here](https://github.com/SergioRosello/mockgeofix). It leverages the power of telnet to communicate with the phone in order to remove the previously necessary application to send the `geo fix` command. Finally, this code accomplishes every requirement listed previously and I can use it to mock a route during the end-to-end functional tests.

## Conclusion

This project has been one of the first real open-source experiences I have had. This is what open source is about. Collaborating with developers worldwide to make things easier to one another. It's really a beautiful thing to see and be a part of. 
