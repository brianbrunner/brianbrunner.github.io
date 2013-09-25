---
layout: post
title:  "Install Docker Using Curl"
date:   2013-09-24 18:00:00
categories: docker curl
---

I've recently been playing around with docker quite a bit and have really been liking it. It's
both extremely powerful and extremely easy to use, which are two things that make me take a
liking to a porject. I've found myself repeatedly visiting the 
[installation instructions](http://docs.docker.io/en/latest/installation/ubuntulinux/) as I've
set up a few different environments. I figured I'd toss together a few scripts and host them
on this site so that I could just `curl` in the scripts and run them.

These scripts will install docker and download the base docker image. I'm currently only hosting
scripts for Ubuntu, as that is what I've been playing around with, but I'd be more than happy
to host scripts for other distributions as well. Feel free to fork [this blog](https://github.com/brianbrunner/brianbrunner.github.io),
add your scripts, and send a pull request.


Also, I do want to stress that running scripts straight off of some random dude's blog is
generally a _pretty bad idea_ as far as security is concerned. I personally don't plan on 
trying anything funny, but nonetheless it's always best to at least download a script and
read over it before you run it.

Ubuntu 12.04
------------

Because installing docker requires a restart in `12.04`, this install is divided into two 
scripts. First you'll run

    /bin/sh <(curl -s http://brianbrunner.com/shell/docker/ubuntu/12.04/install_1.sh) 

And then you'll want to run

    /bin/sh <(curl -s http://brianbrunner.com/shell/docker/ubuntu/12.04/install_2.sh)

Ubuntu 13.04
------------

This is just a one step install. You'll only need to run the following

    /bin/sh <(curl -s http://brianbrunner.com/shell/docker/ubuntu/13.04/install.sh)

--

And that's all there is to getting docker set up. I really hope that you'll check out docker if you haven't
already. It is really quite a cool piece of tech. 

And as always, feel free to hit me up 
on twitter [@brianbrunner](https://twitter.com/brianbrunner) and subscribe to my mailing list down
below.
