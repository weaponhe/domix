# domix
```
npm install domix --save
```

## hasClass
```
var hasClass = require('domix/hasClass');
hasClass(DOMNode, 'foo'); // => true
```
## addClass
```
var addClass = require('domix/addClass');
addClass(DOMNode, 'foo'); 
```
## removeClass
```
var removeClass = require('domix/removeClass');
removeClass(DOMNode, 'foo'); 
```
## toggleClass
```
var toggleClass = require('domix/toggleClass');
toggleClass(DOMNode, 'foo'); 
```
## on
```
var on = require('domix/on');
on(DOMNode,'click',handler);
```
## off
```
var off = require('domix/on');
off(DOMNode,'click',handler);
```

## getEvent
```
var getEvent = require('domix/getEvent');
var cross_browser_event = getEvent(event);
```
## getTarget
```
var getTarget = require('domix/getTarget');
var cross_browser_target = getTarget(event);
```
## preventDefault
```
var getTarget = require('domix/preventDefault');
preventDefault(event);
```
## stopPropagation
```
var stopPropagation = require('domix/stopPropagation');
stopPropagation(event);
```

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 6+ ✔ | Chrome 4.0+ ✔ | Firefox 16.0+ ✔ | Opera 15.0+ ✔ | Safari 4.0+ ✔ |
