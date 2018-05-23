# Three.js-Multiplayer-Template

[![Version](https://img.shields.io/badge/Version-0.0.1-blue.svg)](https://github.com/TheCodeCrafter/Three.js-Multiplayer-Template/tree/master/feature-list.md)
[![GitHub stars](https://img.shields.io/github/stars/TheCodeCrafter/Three.js-Multiplayer-Template.svg)](https://github.com/TheCodeCrafter/Three.js-Multiplayer-Template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TheCodeCrafter/Three.js-Multiplayer-Template.svg)](https://github.com/TheCodeCrafter/Three.js-Multiplayer-Template/network)
[![GitHub issues](https://img.shields.io/github/issues/TheCodeCrafter/Three.js-Multiplayer-Template.svg)](https://github.com/TheCodeCrafter/Three.js-Multiplayer-Template/issues)

[Examples](http://github.com/TheCodeCrafter/Three.js-Multiplayer-Template/examples) &mdash;
[Documentation](http://threejs-multiplayer.github.com/docs) &mdash;
[Wiki](https://github.com/TheCodeCrafter/Three.js-Multiplayer-Template/wiki) &mdash;
[Help](http://stackoverflow.com/questions/tagged/three.js)


### Three.js Multiplayer Template ####
This is a Socket.io and Express powered template for a multiplayer three.js game using NodeJS.

### Usage ###

After installing this directory, go into it, and in a terminal, do node app.js and success! You're now running!

Of course, there's a more in depth explanation here:

```
app.js :: socket.js server
index.html :: contains connections for all files
main.js :: three.js and client-side script
ui.js :: controls for UI (custom-code)
main.css :: simple container styles to make it appear cleaner on the webpage
ui.css :: styling for the UI (probably going to be the longest CSS file here)
```

#### Installation ####

Copy/Paste this directory. Pretty simple...

#### Setup ####

There's not much to be done to setup this to work, however, you will have to add your own socket events in app.js and index.html

#### Configuration ####

In the config file, you can customize some minor things, for instance, which port the client/server is hosted on, and dependencies, and some other neat options. Remember, this is meant to be a template, not some monster of a game that you can customize to your every need.

#### Customization ####

There's a ton of things that could be done to configure this, so I won't cover all of them, however, here are a few key examples as to what could be customized.

- app.js (node packages, socket events, etc)
- main.css and ui.css *must* be customized to your specific needs (even though main.css does contain some boilerplate code)
- main.js is where the real magic happens. Customize this file as you see fit.

### Contribution ###

If you wish to contribute, please contact me via [my email](mailto:noahcoder77@gmail.com)

#### Contributers ####

[TheCodeCrafter](https://github.com/TheCodeCrafter)

