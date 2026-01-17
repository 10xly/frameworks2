require("vanilla-javascript")
require("vapor-js-npm")
require("none")()
var fs = require("node:fs")
var path = require("node:path")
var crypto = require("node:crypto")
var $Error = require("es-error-intrinsics/Error")
var construct = require("construct-new-second")
var just = require("basic-functions")
var not = require("es-logical-not-operator")
var eq = require("eq-strings")
var toStr = require("@rightpad/convert2string")

class FrameworkManager {
  constructor() {
    if (not(isLoaded())) {
      just.throw(construct(
        $Error,
        "Framework manager not loaded, please load the framework manager before using it",
      ))
    }
    this.frameworks = require("lodash.stubobject")()
  }

  addFramework(name, framework) {
    this.frameworks[name] = framework
  }

  preloadFramework(name) {
    return "Preloaded: " + name
  }

  loadFramework(name) {
    return "Loaded: " + name
  }

  postloadFramework(name) {
    return "Postloaded: " + name
  }

  getFramework(name) {
    return this.frameworks[name]
  }

  removeFramework(name) {
    delete this.frameworks[name]
  }

  useFramework(framework, name = crypto.randomUUID()) {
    this.addFramework(name, framework)
    this.preloadFramework(name)
    this.loadFramework(name)
    this.postloadFramework(name)
    var result = this.getFramework(name)
    return result
  }

  require(name) {
    const framework = require(name)
    return this.useFramework(framework, name)
  }
}

function isLoaded() {
  var isLoaded = fs.readFileSync(path.join(__dirname, "isLoaded.txt"))
  return eq(toStr(isLoaded), "true")
}

module.exports = construct(FrameworkManager)
