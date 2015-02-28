debuglog

require('debulog')
return util.debuglog, if it exists, otherwise it will return an internal copy of the implementation from node v0.11

debuglog(section)
* section{string} the section of the program to be debugged
* returns: {function} the logging function

this is used to create a function which conditionally writes to stderr?? based on the exitence of NODE_DEBUG environment variable?? if the section name appears in that environment variable, then the returned function will be similar to console.error(). if not, then the returned function is a no-op.

for example:

```
var debuglog = util.debuglog('foo');

var bar =123;
debuglog('hello from foo [%d]', bar);
```

if this program is run with NODE_DEBUG=foo in the environment, then it will output something like:

FOO 3245: hello from foo [123]

where 3245 is the process id. if it is not run with that environment variable set, then it will not print anything.

you may seperate multiple NODE_DEBUG environment variables with a comma...for example NODE_DEBUG=fs,net,tls.


