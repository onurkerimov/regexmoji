# regexmoji
**regexmoji** is an experimental module. Its main goal is to make regular expressions easier to read and maintain. 
Just like how in CoffeeScript, [annotating regular expressions](http://coffeescript.org/#regexes) is possible (and I love that), this plugin can do this in vanilla JS. Also, a key advantage over CoffeeScript is that, it can also reduce repetition.

### Usage 
This is one of the most confusing email validation patterns i can find online:

```
/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
```

With **regexmoji**, it can reduce to:
```js
import regexmoji from 'regexmoji'

regexmoji(
  /💜(?:\.💜)*@(?:💚(?:💧💚)?\.)+💚(?:💧💚)?/g,
  {
    "💚": /[a-z0-9]/, // alphanumeric (single)
    "💧": /[a-z0-9-]*/, // alphanumeric and dash (multi)
    "💜": /[a-z0-9!#$%&'*+/=?^_`{|}~-]+/, // stuff+
  }
);
```

It became easier to read, and even entertaining! This is just like a RegExp equivalent of [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). I wish they existed. However, even if they existed, they would look like:
```js
RegExp`/${C}(?:\.${C})*@(?:${A}(?:${B}${A})?\.)+${A}(?:${B}${A})?/g`
```
So I like my emoji approach better. Especially cognitively.

Look at [this plugin](https://2ality.com/2017/07/re-template-tag.html) by Dr. Axel Rauschmayer
