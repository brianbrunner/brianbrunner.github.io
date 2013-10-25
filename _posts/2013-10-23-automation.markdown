---
layout: post
title:  "Paying Money To Save It And Doing More With Less"
date:   2013-10-23 11:00:00
categories: automation saas
---

Recently, an email thread got started on the all-team mailing list at my
office. Everyone in the company, devs and non-devs alike, was asked to
take stock of all of the different SaaS products that they were using. When
all was said and done, the list that we had compiled numbered around 40
different websites, most of which we pay some monthly fee for.

This was a little bit of a surprise for me, as we're a team of less than 
20. This means that we use twice as many SaaS products as we have people. 
If you want to unbundle all of the different services we use that fall
under the umbrella of AWS, that number jumps from around 40 to more than
50. Basically, we leverage the crap out of other people's software.

Incidentally, most of the software we pay for on the engineering side of
things has open-source equivalents that we could run ourselves for free
(besides hosting costs). We were recently looking to put together an 
automated testing setup for our frontend code, and one of our engineers 
offered to set up [Jenkins](http://jenkins-ci.org/) to take care of it. 
It took all of a minute to decide on a managed, paid alternative instead. 
Because it was, without a doubt, much cheaper.

When it comes down to it, all employees, especially software engineers, are 
fucking expensive. In my experience, salaries are almost always the biggest
expense for a technology startup.  When you have the choice between having 
someone spend time setting up a piece of software or just paying a company 
to do it for you, you should almost always go for the outside solution.
This is especially true when your organization is still small, as time 
spent managing a self-hosted solution would be better spent building out
your core product. So, you know, you can actually make money.

Using outside software even when you could run something yourself is an idea 
that I've found comes naturally to those in more business oriented roles. 
Engineers are, however, notorious for reinventing things that there are 
already existing solutions for. I can't count the number of times I've seen
people reimplement software that they could just buy for cheap or free.

Quite possibly my favorite instance came from a friend who told me that a
startup he had interviewed at had entirely reimplemented nodejs in house
because they didn't want to run software that was "not built here".
It's not exactly the same as node is, by no means, a SaaS product, but the
idea is the similar: stop wasting time on things that have already been done
for you.

So, in short, leverage the crap out of SaaS, even if you could do it
yourself. Good SaaS integration is like having extra employees that are
way cheaper and don't require things like insurance and time off.
