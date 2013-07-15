---
layout: post
title:  "Sprint Programming - URL Shortener"
date:   2013-07-12 22:50:00
categories: sprintProgramming urlShortener
---

_10:50 PM_
----------

I've decided to do a quick sprint-to-the-finish programming exercise and see how long it will take me to build a fully functioning URL shortener. I've picked out tech that will *hopefully* make this extremely quick and limit the overall amount of work that I actually need to do. I plan on using 1 t1.micro AWS instance running an incredibly small nodejs server and amazon s3. And nothing else. Well, besides some front end pages with jquery, I guess.

The nodejs server will place html pages in Amazon S3 that contain a meta refresh header tag that will perform the redirect. I don't plan to use any frameworks, or any libraries outside the standard nodejs libs besides a library to communicate with S3.

I don't have any of this set up currently, but hopefully it'll be a quick process to get everything in place. Here goes something.

And just as a side-note, I'm using [Draft](http://www.draftin.com) to actually type this post up.

_10:53 PM_
----------

Waiting for my instance to boot up on EC2...

_10:55 PM_
----------

Done booting up

_10:59 PM_
----------

Accidentally grabbed the 64 bit version of node like a dumbass and got messed up for a minute there. Problem solved.

_11:03 PM_
----------

Started writing the server side code. Grabbing a copy of knox (https://github.com/LearnBoost/knox) for interacting with S3 from NodeJS.

_11:08 PM_
----------

knox is installed and configured. Currently writing out some really simple logic to get everything set up. The server is only using the query portion of the URL. If the the query contains a `url` param, it's going to create an entry for the `url` in S3, and then return a JSONP callback.

_11:18 PM_
----------

The server is generating short codes. Just gotta get them pushed to S3.

_11:25 PM_
----------

Backend code is *almost* done. My laptop battery is at 18 percent and my charger is across the room so I might have just encountered another forcing function for this!

_11:29 PM_
----------

The backend code is done. Woohoo! You can check out the very first link ever made by this system at [https://s3.amazonaws.com/shortbread/cA9taw](https://s3.amazonaws.com/shortbread/cA9taw). It redirects to google. Pretty boring, but still kinda neat.

Now I just need to attach a frontend to it.

_11:33 PM_
----------

Severely losing productivity to a squeaky left shift key.

_11:36 PM_
----------

Picking out a domain name to host this all on. Maybe that can wait until this is actually done...

_11:42 PM_
----------

Finally stopped trying to think of a clever domain. Just got a simple HTML page together with an ajax form. Almost all the way there.

_11:48 PM_
----------

And it's done! The front end is accessible via a browser. It's completely unstyled and there are no checks to make sure that the string submitted is actually a URL, but it works like it's supposed to if you give it the right inputs, so I'm calling it. Just 2 minutes shy of the hour mark. A little longer than I would've liked, but not too shabby for a joke of a project.

It's currently available at [http://shortbread.s3.amazonaws.com/index.html](http://shortbread.s3.amazonaws.com/index.html) if you want to check it out. I'll probably put an actual domain on it just for fun. I might even spend a few minutes cleaning things up and making it slightly nicer to look at, but there really isn't much more it needs.