---
layout: post
title:  "Learning a new programming language? You should build redis"
date:   2014-04-01 9:00:00
categories: redis languages
# commentslink: "https://news.ycombinator.com/item?id=7519929"
# comments: "Head over to the <a href='https://news.ycombinator.com/item?id=7519929'>comments on Hacker News</a> to discuss this article"
---

When I'm learning a new language, I'll often start with a widely recognized guide (something like
[Learn You A Haskell](http://learnyouahaskell.com/)) and then, almost always, my next step
is to go full steam and build a clone of [redis](http://redis.io/). My goal is to get a
working datastore that speaks the redis protocol, saves to disk, and implements all of the
basic data structures along with most of the operations you can perform on them.

I like this approach because it gives you a pretty cool end product (a fully functioning 
datastore) and also forces you to understand a great deal of concepts in a new language.
To build redis, you need to be able to do a pretty wide number of things.

* Understand networking for accepting client connections.
* Understand file operations (reading configs, backing up your data to disk)
* Understand string parsing for interpreting the [redis protocol](http://redis.io/topics/protocol).
* Understand builtin data structures in your new language (Lists, Sets, SortedSets, Hashes)
* Understand concurrency (multiple clients, one underlying datastore)
* Understand object serialization for writing objects to your backup file
* Understand how to structure a project in your new language

<!-- more -->

And that is, by no means, an exhaustive list. I like to see if can come up with a way
to allow for pluggable data types for adding things like [tries](http://en.wikipedia.org/wiki/Trie)
that are outside the basic functionality of redis. You could also try implementing
[replication](http://redis.io/topics/replication) of some type or [pub/sub](http://redis.io/topics/pubsub).
Redis is a pretty good base platform that allows you to do a whole lot of experimentation 
on top of it.

I'm not really sure this approach is for everyone. But if you, like me, are someone
who learns best by doing, building redis can be a quick, directed way to get up
to speed in a new programming language.
