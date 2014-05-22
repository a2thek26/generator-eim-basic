# generator-eim-basic 

A generator for [Yeoman](http://yeoman.io).


## Getting Started

This is a super basic setup that creates the files and directories to get you started.

It will prompt you a few times:

1. What do you want to call the project? (MySite)
2. Should we load Bootstrap? (Y/n) *
3. Where should we complile your assets like js and css? (assets)

*`No` will load [Semantic Grid](http://semantic.gs) (small, simple responsive library)

Upon completion you should be set up with the following files and folder structure:

```
assets/
|-- js/
|-- css/
|-- fonts/
.bowerrc
.gitignore
bower.json
Gruntfile.js
node_modules/
|-- ...
package.js
src/
|-- js/
|--|-- app.js
|-- less/
|--|-- _helpers.less
|--|-- _template.less
|--|-- _ui.less
|--|-- _variables.less
|--|-- app.less
|-- vendor/
|--|-- ...
```

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-eim-basic from npm, run:

```
$ npm install -g generator-eim-basic
```

Finally, initiate the generator:

```
$ yo eim-basic
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
