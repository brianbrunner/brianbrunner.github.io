---
layout: post
title:  "Replacing the Standard Library - Python Requests"
date:   2014-03-31 9:00:00
categories: stdlibsucks
commentslink: "https://news.ycombinator.com/item?id=7502241"
comments: "Head over to the <a href='https://news.ycombinator.com/item?id=7502241'>comments on Hacker News</a> to discuss this article"
---

*Sometimes, a language's standard library is so poorly exposed, undocumented or outdated that it warrants using an external package to replace it.*

In Python, making HTTP requests is shockingly cumbersome. A basic `GET` request is easy enough.

    import urllib2
    response = urllib2.urlopen('http://example.org/')
    html = response.read()

But once you start getting into more complicated things, you enter a world of increasingly complicated. For example, a post request looks like this.

    import urllib
    import urllib2
    
    url = 'https://example.org/login'
    values = {'username' : 'bbrunner',
              'fullname' : 'Brian Brunner',
              'requests' : True }
    
    data = urllib.urlencode(values)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    the_page = response.read()

And if you need to get `json` back, that's another `import` you need to remember. If you want to add in auth or coookies or read compressed data or do anything else that is totally fair game for interacting with HTTP services, `urllib`/`urllib2` pretty much sucks. I'm not going to go into any more examples, because we'd be here all day trying to sort out issues.

For a modern language, Python is not the best at interacting with the web. Thankfully, there's a solution that many of you probably know about. [requests](http://docs.python-requests.org/en/latest/) is a Python package that, as the name suggests, makes it easy to write HTTP requests. The above examples become single lines of code, and many, many things that are a nightmare with the standard library are made easy.

A `GET` request with json

    jsonResponse = requests.get('https://example.org/api/json').json()

A `POST` request

    data = {'username' : 'bbrunner',
            'fullname' : 'Brian Brunner',
            'requests' : True }
    jsonResponse = requests.post('https://example.org/api/post/json', data=data).json()

For the sake of brevity, I'm going to stop there, but the [documentation](http://docs.python-requests.org/en/latest/user/quickstart/) for requests is rather good, so I suggest you check it out.

So, in short, unless you have an abnormal, specific need to do so, don't use `urllib`/`urllib2`. Just use `requests`.
