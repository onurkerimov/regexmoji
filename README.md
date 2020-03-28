# regexmoji
**regexmoji** is an experimental module. Its main goal is to make regular expressions easier to read and maintain. 
Just like how in CoffeeScript, [writing regular expressions multiline and annotating them](http://coffeescript.org/#regexes) is possible (and I love that), with this plugin you can do the same in vanilla JS. Moreover, while CoffeeScript isn't capable of that, this plugin can also reduce repetition.

### Example 
This is one of the most confusing email validation patterns i can find online:

```
/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
```

With **regexmoji**, it can reduce to:
```js
regexmoji(
  /💜(?:\.💜)*@(?:💚(?:💧💚)?\.)+💚(?:💧💚)?/g,
  {
    "💚": /[a-z0-9]/, // alphanumeric (single)
    "💧": /[a-z0-9-]*/, // alphanumeric and dash (multi)
    "💜": /[a-z0-9!#$%&'*+/=?^_`{|}~-]+/, // stuff+
  }
);
```

