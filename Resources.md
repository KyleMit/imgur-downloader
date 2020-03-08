# Resources

A collection of resources used


## Prior Art

* [imgurdl](https://github.com/nyanotech/imgurdl)
* [imgur-album-download](https://github.com/statico/imgur-album-downloader)
* [imgurgitate](https://github.com/hickford/imgurgitate)
* [imgur-api-album-downloader](https://github.com/VictorioBerra/imgur-album-downloader)
* [album-pull](https://github.com/queercat/Album-Pull)


## Node CLI Intro

* [How to build a CLI with Node.js | Twilio](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
* [Building command line tools with Node.js | Atlassian](https://blog.developer.atlassian.com/scripting-with-node/)
* [Building a simple command line tool with npm | npm](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm)
* [How to Build a Command Line (CLI) Tool in NodeJS](https://blog.bitsrc.io/how-to-build-a-command-line-cli-tool-in-nodejs-b8072b291f81)
* [Build a JavaScript Command Line Interface (CLI) with Node.js](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

## Regex

[Regex to find Imgur links](https://regexr.com/4tk87)

```js
/https?://(?:i.)?imgur\.com/([^\.]*)\.([\w]*)/g
```

### Test CLI locally

```bash
npm init proj
```

```bash
npm link
```

### Publish CLI on npm

```bash
npm publish
```




### Regex to find Imgur Links + Desc

* [Inline](https://regexr.com/4ve53)
* [Footnote](https://regexr.com/4ve59)

## Debugging

### Identify script as shell

#### Problem

If you get this error message:

> line 1: syntax error near unexpected token

#### Solution

Make sure you *start* your CLI file with following [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)):

```js
#!/usr/bin/env node
```
