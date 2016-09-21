---
layout: post
title:  "How I Fucked Up My iPhone Preorder and Programmed My Way Out Of It"
date:   2016-09-20 23:00:00
categories: recruiting developers
---

For the second time in 3 years, I fucked up my iPhone preorder. The first time was due to Apple accepting
a credit card and the payment inexplicably getting declined. So not really my fault. This time, however, was entirely due to my inability to read directions.

I used the [Apple Store](https://itunes.apple.com/app/apple-store/id375380948?mt=8) app to reserve my preorder. I would then be able to finish my preorder at a later date. Essentially, a preorder for a preorder. Whatever. If it gets me my damn marginally upgraded iDevice I'm fine with it.

During the process, I selected the wrong payment plan option. After a quick call to Apple, I was told that customer service didn't care enough to fix the problem. Or that they couldn't. Or something.

Anyway, I'm not one to wait. So I decided to over-engineer my way out of the problem.

<!-- more -->

I knew the iPhone 7 Plus would most likely require me waiting in line overnight to get one on launch day. There were even some rumblings that the 7 Plus might not be avaiable unless you had a preorder. But I also knew that iPhones are usually available for in-store pickup a few days after release. However, they usually go pretty quick. So naturally, I figured I would build a scraper to do the dirty work of checking for me.

First things first, I needed to figure out how to get in-store pickup availability info. I took a quick trip through the iPhone order flow and pulled up the in-store pickup availability checker. I checked out the XHR section of the Network Tab of the Chrome Inspector and saw that, thankfully, Apple was using a pretty straightforward JSON API.

{% include image.html
  src='/imgs/iphone-xhr.png'
  caption='JSON APIs, because parsing raw HTML is literally the worst.'%}

I say thankfully because, in my experience, a lot of e-commerce websites, even those run by big fancy tech companies, tend to do all rendering server side and deliver HTML via their API. This would usually be the point where I'd break out something like [pyquery](https://pythonhosted.org/pyquery/) or [cheerio](https://github.com/cheeriojs/cheerio). So it was a relief to be able to just parse the JSON and be done with it.

For those who are curious, this is the URL I used.

```
http://www.apple.com/shop/retail/pickup-message?parts.0=MN562LL%2FA&location=94063&little=true&cppart=ATT%2FUS
```

It is explicitly for the iPhone 7 Plus Rose Gold 128GB model and it checks near Redwood City. The `parts.0` param is a device id that is unique per model. If you are trying this for a different device spec, it's probably easiest to just repeat my process to get its id. The `location` param is just your zipcode.

Next up, how to get notified. I've worked with [Twilio](https://www.twilio.com/) in the past and had nothing but success, so I figured I would get my scraper to notify when iPhones were available for pickup via text. 

Now I just had to glue everything together with some python. I want to say up front that this is functional code. It is not clean code.

``` python
from twilio.rest import TwilioRestClient
import requests
import time

ACCOUNT_SID = 'XXXXXXXXXXXXXXXXXXXXXX' # Replace with your Twilio account sid
AUTH_TOKEN = 'XXXXXXXXXXXXXXXXXXXXXX' # Replace with your Twilio auth token

client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN)

# JSON API URL for checking availability status
check_url = "http://www.apple.com/shop/retail/pickup-message?parts.0=MN562LL%2FA&location=94063&little=true&cppart=ATT%2FUS"

# Track the last pickup status so we know when it changes
lastPickupStatus = ""

while True:

  try:

    # Fetch data about pickup status
    body = requests.get(check_url)
    data = body.json()
    availableStores = []
    for store in data['body']['stores']:
      status = store["partsAvailability"]["MN562LL/A"]["storePickupQuote"]
      if status != "Currently unavailable":
        availableStores.append({
          "name": store["storeName"],
          "status": status
        })

    # If it's available, see if we need to send a text
    if len(availableStores) > 0:
      pickupStatus = ", ".join([
        "%s: %s" % (
          store["name"], store["status"]
        ) for store in availableStores
      ])

      # if the pickup status has changed since we last sent a text,
      # send another text
      if pickupStatus != lastPickupStatus:
        lastPickupStatus = pickupStatus
        client.messages.create(
          to='+12345678910', # Replace with your phone number
          from_='+19876543210', # Replace with the number from Twilio
          body='iPhone 7 Plus Pickup Status: %s' % pickupStatus
        )

  # Catch-all, mostly just in case we have a network error
  # This is sloppy but functional, remember?
  except Exception as e:
    print e

  # Only check once a minute
  time.sleep(60)
```

I slapped this script up on server, set it running and then forgot about it for a few days. And then, about an hour ago, I got a text notifying me that iPhones were available for pickup.

Moral of the story: if you aren't detailed-oriented enough to follow directions, at least be smart enough to get yourself out of your dumb mistakes.

