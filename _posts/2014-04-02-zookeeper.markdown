---
layout: post
title:  "Zookeeper For Distributed Coordination"
date:   2014-04-02 9:00:00
categories: zookeeper redis
# commentslink: "https://news.ycombinator.com/item?id=7502241"
# comments: "Head over to the <a href='https://news.ycombinator.com/item?id=7502241'>comments on Hacker News</a> to discuss this article"
---

Building distributed systems is hard work. Consensus algorithms like [Paxos](http://en.wikipedia.org/wiki/Paxos_(computer_science)
or the new hotness [raft](https://ramcloud.stanford.edu/wiki/download/attachments/11370504/raft.pdf) can be tricky to
understand and even trickier to implement. Distributed locking mechanisms can be shoehorned into Redis (see the "Locking" 
section in the [SETNX command](http://redis.io/commands/setnx) docs) or 
[memcached](http://bluxte.net/musings/2009/10/28/simple-distributed-lock-memcached), but these solutions are 
hacks and not fault tolerant, making them less than ideal.

But there is a prebaked solution: Apache Zookeeper. If you've never directly used Zookeeper, there's still a
good chance that you have used it indirectly. It is integrated with systems like Hadoop, Akka, Kafka and
[many others](https://cwiki.apache.org/confluence/display/ZOOKEEPER/PoweredBy).

<!-- more -->

Zookeeper lets you store data in what it calls znodes. Znodes are named with filesystem-like paths, for 
example, `/path/to/node`. Znodes are set up in a tree structure. So `/foo` is the parent of `/foo/bar`.
Unlike a typical filesystem, you can store data in both `/foo` and `/foo/bar`. Zookeeper is, in many
ways, just a fault tolerant key value store.

However, zookeeper has a few things that make it unique.

* Zookeeper lets you set up ephemeral znodes, which are destroyed when the client that created 
them disconnects. This can be used for things like keeping a list of living servers.
* Zookeeper lets you watch certain nodes and get updates when their value changes or when new children
are added to them. This can be used for keeping track of living servers and discovering new servers as
they become live.
* Zookeeper lets you create nodes with a sequential suffix. This allows you to create queues in zookeeper
or set up a chain of automatic failover.

If you're looking for a few examples of what you can do by leveraging these features, the official zookeeper docs
have [some good examples](http://zookeeper.apache.org/doc/trunk/zookeeperTutorial.html).
