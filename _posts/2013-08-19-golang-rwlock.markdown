---
layout: post
title:  "Implementing a ReadWrite Lock in Go"
date:   2013-08-16 8:50:00
categories: rethinkdb
---

It's been about 2 months since I've done any real Go programming, so I thought I might challenge myself with a little
puzzle. Go is very upfront about being biased towards channels and goroutines for achieving synchronization rather than 
using traditional synchronization primitives like locks or conditionals. As such, I decided to try my hand at implementing
Readers-writer locks in Go using just channels and goroutines. 
(Readers-writer locks)[http://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock], for those not familiar with them, are a 
type of mutual exclusion lock that allow multiple readers to access data in parallel but allow only one writer at a time.

A rwlock can be in one of three states:

* Waiting For a Reader or a Writer
* Acquired by one or more readers
* Acquired by one and only one writer

Representing a rwlock as a state machine simplifies the problem of 
