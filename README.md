# regexmoji
**regexmoji** is a tiny npm module that lets you write easily readable regular expressions, with emojis!

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
compiles to:
```
/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

```
