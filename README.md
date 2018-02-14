# Interactive Image

[![Build Status](https://travis-ci.org/jpchateau/Interactive-Image.svg?branch=master)](https://travis-ci.org/jpchateau/Interactive-Image)
[![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs)
[![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)
![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)

*A jQuery plugin to embed interactive images on your website*

# Features

- Insert interactive texts and images over large pictures
- Flexible configuration
- Easily customizable with CSS
- Fully tested
- Installable via package managers


### [See the demo](http://www.jpchateau.com/demo/interactive-image)

# Getting started

## Include the required files

Install RequireJS via npm
```bash
npm install interactiveimagejs
```


[jQuery](https://jquery.com/download/)
```html
<script src="path/to/js/jquery-2.1.4.min.js"></script>
```

Include the plugin files in your page
```html
<link rel="stylesheet" href="/lib/interactive-image.min.css" />
<script src="/lib/interactive-image.min.js"></script>
```

## Edit the source code

**HTML**

```html
<div class="interactive-image" style="width: 900px; height: 598px; background: url('/path/to/images/image.jpg');"></div>
```

**JavaScript example**

```javascript
// Items
var items = [
    {
        title: "Fur",
        description: "The fur of clouded leopards is of a dark grey or ochreous...",
        position: {
            left: 710,
            top: 290
        }
    },
    {
        title: "Canines",
        description: "They are often referred to as a \"modern-day saber tooth\"...",
        position: {
            left: 305,
            top: 345
        },
        picture: "/path/to/images/picture.jpg"
    },
    {
        title: "Threats",
        description: "Many of the remaining forest areas are too small to ensure...",
        position: {
            left: 660,
            top: 70
        },
        link: {
            href: "http://www.website.org/",
            label: "Website"
        }
    }
];

// Plugin configuration
var options = {
    debug: true
};

// Activate the plugin
$(document).ready(function () {
    $('.interactive-image').interactiveImage(items, options);
});
```

# Configuration

**Item**

| Option name     | Type    | Example                     | Required | Default   | Purpose          |
| --------------- | ------- | --------------------------- | -------- | --------- | ---------------- |
| title           | string  | "Threats"                   | Yes      |           | Title            |
| description     | string  | "Many of the..."            | Yes      |           | Descriptive text |
| position        | object  |                             | Yes      |           | Marker position  |
| picture         | string  | "/path/to/your/picture.png" | No       |           | Illustration     |
| link            | object  |                             | No       |           | Link             |
| fontColor       | string  | "#337733"                   | No       | "#000000" | Text color       |
| backgroundColor | string  | "#EEEEEE"                   | No       | "#FFFFFF" | Background color |

**Position**

| Option name     | Type    | Example | Required | Default | Purpose          |
| --------------- | ------- | ------- | -------- | ------- | ---------------- |
| left            | integer | 200     | Yes      |         | X absolute value |
| top             | integer | 50      | Yes      |         | Y absolute value |

**Link**

| Option name     | Type    | Example                   | Required | Default    | Purpose        |
| --------------- | ------- | ------------------------- | -------- | ---------- | -------------- |
| href            | string  | "http://www.website.com/" | Yes      |            | href attribute |
| label           | string  | "Website"                 | No       | href value | Label          |

**Plugin options**

| Option name     | Type    | Example   | Required | Default   | Purpose                 |
| --------------- | ------- | --------- | -------- | --------- | ----------------------- |
| debug           | boolean | true      | No       | false     | Logs enabled in console |
| fontColor       | string  | "#337733" | No       | "#000000" | Text color              |
| backgroundColor | string  | "#EEEEEE" | No       | "#FFFFFF" | Background color        |



# Tests

```bash
$ npm run test
```

# Code quality

```bash
$ npm run eslint
```
https://eslint.org/docs/rules/

# Contribute

Feel free to contribute to this project and open some pull requests.

Interactive Image uses npm and webpack.

```bash
$ npm run dev
```

Please follow the typical GitHub workflow:

1. Fork it (`git clone git@github.com:jpchateau/Interactive-Image.git`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


# Alternatives

* Free: [iPicture](http://ipicture-square.justmybit.com/)
* For business: [ThingLink](https://www.thinglink.com/)


# License

Copyright (c) 2015-2018 Jean-Philippe Chateau.
This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE).
