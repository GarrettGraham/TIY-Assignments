================================================
Man. Pages...
================================================


 
================================================ 
 TERMINAL COMMANDS
================================================

 man npm-`thing` :
    in order to retrieve the documentation on a particular topic, or 

npm help `thing` in order to see the same information as the command above


================================================



What is a package?

A package is:

    a. a folder containing a program described by a package.json file
    b. a gzipped tarball containing (a)
    c. a url that resolves to (b)
    d. a <name>@<version> that is published on the registry with (c)
    e. a <name>@<tag> that points to (d)
    f. a <name>@<tag> that points to (d)
    g. a git url that, when cloned, results in (a)
    
Even if you never publish your package, you can still benefit greatly by using npm if you only wish to write a node program (a), and perhaps if you also want to be able to easily install it elsewhere after packing it up into a ??tarball?? (b).


Git urls can be in the following forms:

```
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```
* the `commit-ish` can be any tag, ??sha?? or branch which can be supplied as an argument to `git checkout (gco)`. the default is `master`.



The `package.json` File:

You NEED to have a `package.json` file in the ROOT of your project to do much of anything with npm. This (??`package.json`??) is basically the entire interface.

  * At the very least you NEED...
    -- `name`: this should be a string that identifies your project. Please, do not use the name to specify that it runs on node, or is in JavaScript. You may use the "engines" field to explicitely state the versions of node(or whatever else) that your program requires, and it's pretty well assumed that it's JavaScript.
    
    * It does not necessarily need to match your github repository name. So, `node-foo` and `bar-js` are BAD names. `foo` and `bar` are BETTER. 

-- `version`: a server-compatible version

-- `engines`:specify the versions of node (or whatever else) that your program runs on. The node API changes a lot, and there may be bugs or new functionality that you depend on. Be explicit (rather than implicit)

-- `author`: take some credit

-- `scripts`: if you have a special compliation of installation sript, then you put it in the `scripts` objet. you should definitely have at least a basic smoke-test command as the "scripts.test" field. 

--`main`: if you have a single module that serves as the entry point to your program (like what the "foo" package gives you at require("foo")), then you need to specify that in the "main" field

You can use npm `init` in the root of you project in order to get you started with a pretty basic package.json file. 



Keeping files OUT of your package...

use a .npmignore file to keep stuff out of you package. if there's no .npmignore file, but there is a .gitignore file, then npm will ignore the stuff matched by the .gitignore file. if you want to include something that is excluded by your .gitignore file you can create an empty .npmignore file to override it.

.npmignore files follow the ssame pattern rules as .gitignore files:

    -- blank lines or line starting with # are ignored
    -- standard glob patterns work
    -- you can end patterns with a forward slash / to specify a directory
    -- you can negate a pattern by starting it with an exclamation point(!)

By default, the following paths and files are ignored, so theres no need to add them to .npmignore explicitly:
    -- .*.swp
    -- ._*
    -- .DS_Store
    -- .hg
    -- lock-wscript
    -- .svn
    -- .wafpickle-*
    -- CVS
    -- npm-debug.log

Additionally, everything in node_modules is ignored, except for bundled dependencies. `npm` automatically handles this for you, so dont bother adding node_modules to .npmignore

the following paths and files are never ignored, so adding them to .npmignore is pointles
    -- package.json
    -- README.*
    
Link Packages 

`npm` link is designed to install a developement package and see that changes in real time without having to keep reinstalling it. (you do need to either relink or `npm rebuild -g` to update compiled packages)


Before publishing: Make sure your package installs and works:

this is important

if you can not install it locally, youll have problems trying to publish it...or you wont be able to publish it. youll be publishing a broken or pointless package...DONT DO THAT!!

in the root of your package, do this:`npm install -g`

if youd rather just create a symlink package that points to your working directory, then do this:`npm link`

USE `npm ls -g` ...

TO TEST a local install, go into some other folder, and then do:

```
cd .../some-other-folder
npm install ../my-package
```

to install it locally into the node_modules folder in that other place...?

then go into the node-rpl, and try using require("my-thing" to bring in your module's main module




Create a User Account

create a user with the adduser command. It works like this:

```
npm adduser
```

and then follow the prompts

this is documented better in npm-adduser(1)




Publish you package--IN THE ROOT of your project...

```
npm publish
```

you can give publish a ursl to a tarball or a filename of a tarball or a path to a folder

note that pretty much everything in that folder will be exposed by default. so if you have secret stuff in there, use a `.npmignore` file to list the globs to ignore, or publish from a fresh checkout




=====
MISC
=====

```
npm-init
```

```
npm-faq
```

```
npm-registry
```


============================
Frequently Asked Questions
============================


Where can I find these docs in HTML?

https://docs.npmjs.com/, or run:

npm config set viewer browser
to open these documents in your default web browser rather than man.


