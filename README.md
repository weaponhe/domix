# domix
>A mix of cross-browser methods for DOM manipulation. 
```
npm install domix --save
```

## hasClass
```js
var hasClass = require('domix/hasClass');
hasClass(DOMNode, 'foo'); // => true
```
## addClass
```js
var addClass = require('domix/addClass');
addClass(DOMNode, 'foo'); 
```
## removeClass
```js
var removeClass = require('domix/removeClass');
removeClass(DOMNode, 'foo'); 
```
## toggleClass
```js
var toggleClass = require('domix/toggleClass');
toggleClass(DOMNode, 'foo'); 
```
## on
```js
var on = require('domix/on');
on(DOMNode,'click',handler);
```
## off
```js
var off = require('domix/on');
off(DOMNode,'click',handler);
```

## getEvent
```js
var getEvent = require('domix/getEvent');
var cross_browser_event = getEvent(event);
```
## getTarget
```js
var getTarget = require('domix/getTarget');
var cross_browser_target = getTarget(event);
```
## preventDefault
```js
var getTarget = require('domix/preventDefault');
preventDefault(event);
```
## stopPropagation
```js
var stopPropagation = require('domix/stopPropagation');
stopPropagation(event);
```

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 6+ ✔ | Chrome 4.0+ ✔ | Firefox 16.0+ ✔ | Opera 15.0+ ✔ | Safari 4.0+ ✔ |
