---
layout: post
title:  "Computer Science in Real Life: Namespacing"
date:   2013-09-25 11:00:00
categories: csirl namespacing
---

I spent this past weekend in Stowe, Vermont as an impostor in a room that didn't belong to me. 
Well, technically, it didn't belong to my fiance, so I guess she was the impostor.

We got to our hotel at around 11PM, too late for checking in at the front desk. We  found what 
we thought were the keys to our room in an envelope sitting outside the front door. The envelope 
had my fiance's last name, Lynch, on it. Upon opening the envelope and reading over the enclosed
receipt, I realized that we had gotten keys not to our room, but to the room of one *Vicki* 
Lynch.

I'm not sure if Vicki checked in late too and grabbed our envelope by accident or if the front 
desk clerk had checked her into our room earlier in the day. Either way, someone had messed up. 
And really, this all could've been prevented with a little extra namespacing.

Namespacing
===========

In computer science, namespacing is a solution to the problem of having too few good, sensible
names. This results in multiple things ending up with the same name. A logical class name for 
an XML Parser might be `Parser`, but then what do we call an HTML parser? In Javascript, we 
might create two seperate objects for HTML and XML, and we might name them, oh, I don't know, 
`XML` and `HTML`. We then might give those two objects a property that is a `Parser` class, like 
`XML.Parser` and `HTML.Parser`.

This might look something like

    var XML = {

       Parser : function(args) {
         // XML parsing code here
       }

    }

    var HTML = {

       Parser : function(args) {
         // HTML parsing code here
       }

    }

Namespacing provides extra context in situations of ambiguity. Poor namespacing in computer science
causes errors and makes life confusing. Poor namespacing in real life causes me to call the
800 number for my hotel and complain to an unhelpful phone agent in the middle of the night after 
traveling for six hours.

If the hotel would've added more context with a little extra namespacing, maybe by having their
desk clerk check both the last and first  names on the reservation or written the full name on 
the envelope with the key, I wouldn't have been annoyed enough to write this half a week 
after the fact.
