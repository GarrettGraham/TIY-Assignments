packages are defined in a manifest file named bower.json
    -- this is similar to Node's package.json 
    
interactively create a `bower.json` with `bower-init`

```
$ bower-init
```

the `bower.json` spec defines several options, including:
    * name(required): thae name of your package; see register section for how to name your package.
    * version: a semantic version number (see semver)
    * main: string or array: the primary acting files necessary to use your package
    * ignore array: an array of paths not needed in production that you want Bower to ignore when installing your package
    * keywords array of strings (recommended) helps make your package easier to discover 
    * dependencies: hash: packages your package depends upon in production. Note that you can specify ranges of version for your dependencies
    * devDependencies: hash: Developement dependencies
    * private boolean: set to true if you want to keep th package priveate and do not want to register the package in the future
    
    ```
    {
  "name": "my-project",
  "version": "1.0.0",
  "main": "path/to/main.css",
  "ignore": [
    ".jshintrc",
    "**/*.txt"
  ],
  "dependencies": {
    "<name>": "<version>",
    "<name>": "<folder>",
    "<name>": "<package>"
  },
  "devDependencies": {
    "<test-framework-name>": "<version>"
  }
}
    ```
    
MAINTAINING DEPENDENCIES

using `bower-install <package> --save` will add `<package>` to your project's bower.json `dependencies` array

```
# install package and add it to bower.json dependencies
        $ bower install <package> --save
```

similarly, using `bower-install <package> --save-dev` will add `<package>` to your project's bower.json`devDependencies` array.

```
# install package and add it to bower.json devDependencies
    $ bower install <package> --save-dev
```

REGISTER

Registering your package allows others to install it with a short name, like `bower-install <my-package-name>`

to register a new package:
    * the package name must adhere to the bower.json spec
    * there must be a valid manifest JSON in the current working directory
    * your package should use semver Git tags
    * your package must be publically available at a Git endpoint (e.g. Github) Remember to push your Git tags!!
    * for private packages (eg Git Enterprise), consider running a private bower registry
    
the use `bower register`:

```
    $ bower register <my-package-name> <git-endpoint>

# for example

    $ bower register example git://github.com/user/example.git
```

Now anyone can run bower install `<my-package-name>`, and get your library installed. The Bower registry does not have authentication or user management at this point in time. It’s on a first come, first served basis.

Bower doesn’t support GitHub-style namespacing (org/repo), however you are encouraged to namespace related packages with -, for example, angular- and paper-.

Please do not squat on package names. Register your package and claim your name after you have a valid public repo with working code.

For package name transfers, intellectual property and other disputes, please try to resolve with the owner first. If no resolution, please submit a ticket in the Bower Registry repo and the Bower Core Team will assist.

Unregister

Package unregistering will be available via bower unregister `<package>` soon, but for now, you can unregister packages yourself using curl, if the package is hosted on GitHub and you’re an owner or collaborator.

```
    curl -X DELETE "https://bower.herokuapp.com/packages/<package>?access_token=<token>"
```

Where `<package>` is the package name you want to delete and `<token>` is GitHub’s Personal Access Token that you can fetch from GitHub settings for applications.

A default GitHub Personal Access Token will work – no permissions necessary.

You need to be an owner or collaborator of the repo and URL needs to be OK.

You’ll likely want to bower cache clean after your change. Please remember it is generally considered bad behavior to remove versions of a library that others are depending on. Think twice :) If the above doesn’t work for you, you can request a package be unregistered manually.