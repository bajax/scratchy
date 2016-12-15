# Scratchy
Scratchy is a paintchat focused particularly on the needs of amateur digital artists who want to improve their skills.

As these are early days I'm going to go ahead and eschew many of the "professional" practices you see on GitHub (licenses on every file, not rebasing public commits etc.) because A. I don't have that much experience writing software for other software people and B. I don't take this that seriously.  Yes, I want to make a good end product, but I'm not in software for software's sake.

That being said, feel free to send code critique, PRs, and general comments my way if you feel like it.  I'm easygoing, nigh impossible to offend, and completely willing to accomodate good ideas (even ones that might require lengthy rewrites).  Speak up early-- I don't want to end up in a rut because some decision weeks or years before has me tied up now.

## Motivation

The state of the kind of paintchat programs available out there is kind of sorry ATM.  Many are Flash-based, many require an account, many are exclusively for business use, they're old, difficult to set up, most they don't work across all platforms, or are stuck occupying a postage-stamp sized portion of the screen-- really the list goes on.

I've looked forever for a program or service that might fit the bill, but couldn't find one. That's why I've decided to start working on Scratchy.  I want to build the kind of paint program that once and for all establishes standards for what a web-based drawing program should be.  We aren't limited by browsers anymore, but it seems that the desire to build these kinds of tools has already been squashed.  

This is a passion project.

## Goals
The main goal of Scratchy is to create small, tight-knit communities where people can get together draw.  Anything from doodles to masterpieces I hope to eventually support.  Of course, I'm not Adobe, so don't expect Photoshop-grade features, but there's a lot that you can do with limited tools, and the hope is that they will become less and less limited over time.

I want to provide features that promote collaboration, spontaneity, and most of all *fun*.  While I hope to eventually position it as a serious practice tool, there isn't any point in doing something you don't enjoy.  My hope is that this will paradoxically lead to people making greater use of the practice tools, learning good theory etc. Those 10,000 hours (or so) you need to get good at something are much easier to take on when you're having fun.

Furthermore, I hope to make it possible for people to build small communities around personal server instances. I enjoy anarchic BS as much as anyone, but I know very well that's not for everyone.

## Planned Modes
### Scratchy Chat
A group-oriented canvas with between 5 and 20 participants.  You must draw quickly-- every 300 seconds (configurable) the canvas is cleared, and you have to start again.

Anything-goes, there's no rules other than basic courtesy.  Anonymity is optional.  Spontaneity is the name of the game, and adding to others' work is encouraged.  The rule of thumb is that you judge others on their efforts and intentions, and only move to throw someone out if they become obnoxious.

In this mode, anons are given a random number or symbol that you can use to file complaints against them if they start scribbling over everything or being disruptive.  If a user receives too many complaints, they are thrown out.  Their unique identifier will be randomized and re-assigned whenever the canvas is cleared.

It shouldn't be too difficult to capture exceptionally good scratch sessions and replay them later.

### Oekaki
Everyone knows what oekaki is right?  Basically a minimal BBS system with a paint program bolted on.

Lots of programs allow you to do this, but what's compelling about Scratchy's approach is that it allows multiple people to draw on the same canvas at the same time.

All the standard features that have existed in various oekaki programs for over a decade will be possible-- replays, editing other's work, resuming and picking up later etc.

### Practice Mode
Depending on whether I can get (or even need) permission of people who wrote programs that do very similar things before, I plan to add various "practice" modes.  The user might upload a reference image and then attempt to blindly trace its contours, or gesturally feel out its overall shape etc.

## Planned Features
### Community
Because each instance is meant for small groups, I am not going to put too much effort into community features.  There will be accounts, but you might not need them to draw.  Individual instances can, at their discretion, disable anonymous drawing or close registration to new users as well.

Each user has a pseudonym and email.  I'll add a short bio, a form where you can put links to other websites and MAYBE an avatar/cover image.  Other than that, the user page will consist of a gallery of images they've saved there.

I'm on the fence about whether to support such features as likes.  Maybe I should just make this stuff sharable on Twitter/FB/Gnusocial and let them handle the social features.

### Anonymity
I think anonymity is important.  I don't think it encourages bad behavior-- at least not any more than forcing everyone to use their real names.  When you're anonymous, you're more likely to tell the truth, create things that you wouldn't if you had to have some kind of traceable identity attached.

That being said, it's important to be able to keep out disruptive influences, so I'll be putting a lot of effort into rate limiting, IP address and range banning, and sharing information between server instances.  If you really *must* require registration, that will be supported as well. Everything is optional and left up to the instance admin.

### WebGL
Rendering will be handled by WebGL.  Most people have that at least.

### Compatibility
This is a big one-- I plan to support the iPad pro, and any other pressure sensitive device/browser that allows Javascript to access it.  I hope that by making the apps available, we can encourage browser people to implement it in their software.  I do not plan to support any proprietary plugins or extensions-- this means you're out in the cold for now, Wacom users.

It really seems like it has to be the browser's responsibility to provide some way for the Wacom driver to talk to JavaScript.

### Conclusion
It will probably take a couple of years to reach any kind of stability, but I hope to have some minimal functionality available in the coming months.

Twitter: @BajaxDev
