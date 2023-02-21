---
id: 01-MacOS-Tips-Tricks
title: Mac OS Terminal Commands
---

tell Mac to say "Hello Simon"

`say Hello Simon`

to see how much space is left on hard drive

`df -h`

find your Wifi password

`security find-generic-password -wa "My Wifi Network"`

to print and copy the password to the clipboard

`security find-generic-password -wa "My Wifi Network" | pbcopy`

Paste and Match Style - content is pasted without its original formatting. Instead, the content adopts the formatting of the new document you are pasting it into

`command + option + shift + v`

to keep Mac running and not go to sleep

`caffeinate`

Screenshot that goes straight to your clipboard

`cmd + ctrl + shift + 4`

change default name of screenshot filenames:

`defaults write com.apple.screencapture name mycaptures`

change screencapture file types

`defaults write com.apple.screencapture type jpg` (or png)

change screenshot location

`defaults write com.apple.screencapture location ~/Desktop/screenshots`

see a history of everything you’ve downloaded:

`sqlite3 ~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV* 'select LSQuarantineDataURLString from LSQuarantineEvent'`

delete your entire history of downloads

`sqlite3 ~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV* 'delete from LSQuarantineEvent'`

to change your password

`passwd`  then `security set-keychain-password`

see current user

`whoami`

display information about all active network interfaces

`ifconfig`

use grep to filter for "example"

`ifconfig en0 | grep example`

When visiting a website, see all the routers you hit

`traceroute simonpost.com`

DNS info for a website

`dig simonpost.com`

to see processes

`ps -ax`

which processes are using the most CPU

`top`

which processes are using the most memory

`top -o rsize`

find id of process called "slowguy", then kill it:

`ps -ax | grep slowguy`

`kill -9 6789`

show which SHELL you are currently using

`which $SHELL`

switch SHELL to ZSH

`zsh`

switch to Bash

`bash`

how long has your Mac been up?

`uptime`

Flush your DNS cache

`sudo killall -HUP mDNSResponder; sudo killall mDNSResponderHelper; sudo dscacheutil -flushcache`

Quick preview a file

`qlmanage -p filename`

Compare 2 files

`diff file1 file2`

download a file or hit endpoint

`curl wttr.in/paris`

Set alarm clock:

`leave 1132`

see history of your commands:

`history`

disable gatekeeper:

`sudo spctl —master-disable`

re-enable it immediately after installing a potentially dangerous appat by running the command `sudo spctl --master-enable`

start a python3 web server

`python3 -m http.server`

restart computer

`shutdown -r now`

shutdown computer

`shutdown -h now`

see OS version

`sw_vers`

see details about your system

`system_profiler`

monitor network connections

`nettop`

see list of disks mounted on your Mac

`diskutil list`

see disk usage

`du -sh`

copy a file

`ditto` (same as copying a file with `cp`)

to ping a website

`ping google.com`