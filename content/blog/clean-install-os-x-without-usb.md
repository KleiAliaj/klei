---
date: 2014-10-23
title: How to clean install OS X without a USB drive
tags:
  - os x
---

This way to make a fresh install **works for 10.9 (Mavericks) and 10.10
(Yosemite)**.

## Create a bootable partition (5 min)

Open _Disk Utility.app_ and create a new 16GB partition (Mac OS Extended) at the
end of your volume with the name `Untitled`.

## Copy OS X install on it (10 min)

In _Terminal.app_ (in `/Applications/Utilities`), run the commands below (one by
one, adjusting path of the 2 first variables if needed).

_Tip: For the first line below, you can copy the app in the Finder and paste in
Terminal, this will paste the path if you are getting the Install app somewhere
else._

```bash
$ OSX_INSTALL_APP="/Applications/Install OS X Yosemite.app"
$ OSX_INSTALL_DISK="/Volumes/Untitled"
$ sudo $OSX_INSTALL_APP/Contents/Resources/createinstallmedia --volume $OSX_INSTALL_DISK --applicationpath $OSX_INSTALL_APP --nointeraction
```

The last step should take easily take less than 10 minutes (time to copy and
adjust entire install app).

You should get something like:

```
Erasing Disk: 0%... 10%... 20%... 100%...
Copying installer files to disk...
Copy complete.
Making disk bootable...
Copying boot files...
Copy complete.
Done.
```

## Boot from the partition

Just hold option key <kbd>⌥</kbd> (alt) when you start your computer, then
choose the appropriate partition.

## Clean Install

### Clean you previous install (1 min)

When you are on the OS X Utilities, choose _Disk Utility_. From here this time,
just erase your partition where you will install OS X (probably
`Machintosh HD`).

**I know you know but just in case: you will lose everything on this partition
and won't be able to get the content again. Make a backup before.** _This should
take a minute._

### Install !

When it's done, just continue the install on the cleaned partition & you should
be good.

_Not: this method should be able to install a recovery partition if possible._

## Bonus: setup your entire machine in a flash

Now time to get Xcode & run it one time (so it install dev & cli tools). Then
you can setup your machine using your
[dotfiles](https://github.com/MoOx/dotfiles) if you have some ;)
