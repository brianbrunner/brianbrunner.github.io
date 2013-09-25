---
layout: post
title:  "RethinkDB So Far"
date:   2013-09-10 8:50:00
categories: rethinkdb
---

I've been playing around with RethinkDB as the datastore for [markback](https://markback.com/),
a personal bookmarking service that I've been building in my spare time to try out a couple 
new technologies. I've been quite impressed with it, considering how early on in development it is.

Marback is written in NodeJS, which I usually pair with [mongoDB](http://www.mongodb.com/), as
I've found [mongoose](http://mongoosejs.com/) to be a pretty damn good ORM. Although mongDB does 
an *ok* job, I've been looking for an alternative for personal projects that is easier to 
administrate. Although it has it's faults, I'm finding RethingDB to be a pretty good fit for the 
job.

This document is a list of good and bad points, starting with my least favorite bits and working towards
things that are a mixed bag, finally ending on aspects that I really like.

Also, just as a heads up, all code examples use the [Javascript API](http://www.rethinkdb.com/api/#js).

Web Interface Security (Or Lack Thereof)
----------------------------------------

RethinkDB has a kickass web interface. I love it. I'm gonna tell you all about it later. But right now,
I'm going to tell you about how it doesn't have any security. The [security docs](http://www.rethinkdb.com/docs/security/)
suggest using `iptables` and a proxy to achieve security for the web interface. While that's
definitely a suitable solution, a username and password tend to do a pretty good job and require
less mess to deal with.

I'm assuming this was a conscious choice, possibly to eliminate the amount of scrutiny that would need to
be used to properly secure the interface with just a username and password. Still, it's  a major
frustration for me, even if it is something that is fairly easy to deal with.

Query Execution
---------------

RethinkDB creates queries by chaining function calls. I've copied and pasted an example below
from their rather campy documentation that uses a database of superhero information.

    r.table('marvel').get('superman').run(conn, callback)

The syntax is clear enough, but what really bothers me is the call to `run`. First off, the
`callback` is always required. It's an extremely minor annoynace, but I still don't like it.
I get that I should probably deal with the result of a query, even if it's just making sure it
didn't generate an error.

Second is the fact that I have to pass around connections to anything that uses RethinkDB.
This could be programmed around with a wrapper on top of the `r` object that supplies the 
connections, but it seems strange that there wouldn't be some option to do this by default.

Finally, I've usually only seen function chaining to build queries using ORMs like the one in
[Django](https://www.djangoproject.com/) or in the previously mentioned Mongoose. I've found that building queries this way
tends to be more cumbersome and less readable than SQL. RethinkDB's RQL language does a good
job at being fairly expressive, but it still doesn't have the same usability that SQL has.


