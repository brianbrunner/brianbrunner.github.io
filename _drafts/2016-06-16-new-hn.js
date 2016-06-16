---
layout: post
title:  "Help choose what hits the Hacker News frontpage with a 17 line chrome extension"
date:   2016-04-08 9:00:00
commentslink: "https://news.ycombinator.com/item?id="
comments: "Head over to the <a href='https://news.ycombinator.com/item?id='>comments on Hacker News</a> to discuss this article"
---

About a month back, I hit the karma threshold for downvoting comments on Hacker News. I'm not a very active commenter myself, but I do like the idea of contributing to discussions indirectly by voting, so it was an exciting moment.

This got me thinking about how I could go further in helping to contribute to HN. In my experience, the single most important thing you can do on HN is upvote new posts. It can take as few as four or five upvotes to push something to the bottom of the frontpage, depending on the time of day and the day of the week.

*Being the first person to upvote new content and push it from one vote to two can be the deciding factor between something going unnoticed and thousands of people viewing it.*

```js
var numItems = 5;
var spacer = '<tr class="spacer" style="height:5px"></tr>';

$.get("https://news.ycombinator.com/newest", function(newest) {
  var tmp = $('<div></div>');
  tmp.html(newest);
  var newItems = tmp.find('.itemlist tr').slice(0, numItems*3);
  newItems.find('.rank').each(function(item, elem) {
    $(elem).text('*');
  });
  var tbody = $('.itemlist tbody');
  tbody.prepend(spacer);
  tbody.prepend('<tr style="margin-bottom: 5px;"><td></td><td colspan=2>Top</td></tr>');
  tbody.prepend(newItems);
  tbody.prepend(spacer);
  tbody.prepend('<tr style="margin-bottom: 5px;"><td></td><td colspan=2>New</td></tr>');
});
```
