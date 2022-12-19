---
date: 2011-10-27
title: Keep one Netbeans icon in your OS X Finder Dock
tags:
  - os x
---

After installing Netbeans, you drag the Netbeans.app in your dock. And each time
you start Netbeans, you have a second Netbeans icon which appears… That’s
boring.

Here is the solution :

Go into the `/Applications/Netbeans` folder, and open the Netbeans package.

<figure class="flex-media--unknown">
  <img class="flex-media__item" src="/media/2011/10/open-netbeans-package.png" alt="" title="Open Netbeans.app package" />
</figure>

Then open `etc/netbeans.conf`

<figure class="flex-media--unknown">
  <img class="flex-media__item" src="/media/2011/10/open-netbeans-conf.png" alt="" title="Edit netbeans.conf" />
</figure>

You should see in the file :

```bash
# Default location of JDK, can be overridden by using --jdkhome [<dir>:
#netbeans_jdkhome="/path/to/jdk"
```

Just add
`netbeans_jdkhome="/System/Library/Frameworks/JavaVM.framework/Versions/CurrentJDK/Home/"`
after theses lines.

Restart Netbeans and voilà !
