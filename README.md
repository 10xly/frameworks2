# Frameworks2.js. The framework framework.

Introducting Frameworks2.js. A JavaScript framework to manage and make your frameworks faster. It's Frameworks 2.0!

## Why?

Frameworks are usually slow and not 10x. This framework will make your frameworks faster because it is 10x!

## Usage

For safety and reliability, every time Frameworks2.js is accessed, it must be loaded first, or it will throw an error. The module to load it is incorporated inside the Frameworks2.js module. To load it, just do this.

```javascript
require("frameworks2/loader").load()
```

Now, to use the Framework Manager, you need to import it like this:

```javascript
require("frameworks2/loader").load()
const fm = require("frameworks2")
```

Here is an example of using a library (for this example, `lodash`) with Frameworks2.js:

```javascript
require("frameworks2/loader").load()
const fm = require("frameworks2")
fm.addFramework(require("lodash"))
fm.preloadFramework("lodash")
fm.loadFramework("lodash")
fm.postloadFramework("lodash")
const _ = fm.getFramework("lodash")
```

All of the methods are _absolutely_ crucial and work towards making your code as fast as possible. Or, if it is too much code, then you can simplify it with the `useFramework` method, which runs all these functions for you:

```javascript
require("frameworks2/loader").load()
const fm = require("frameworks2")
const _ = fm.useFramework(require("lodash"), "lodash")
```

For an even simpler usage, you can use the `fm.require` method, which will automatically require the name:

```javascript
require("frameworks2/loader").load()
const fm = require("frameworks2")
const _ = fm.require("lodash")
```
