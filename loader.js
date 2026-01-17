var fs = require("node:fs")
var path = require("node:path")
var _true = require("true-value")

module.exports = {
  load() {
    // Load the framework manager.
    fs.writeFileSync(path.join(__dirname, "isLoaded.txt"), "true")
    process.on("exit", () => {
      fs.writeFileSync(path.join(__dirname, "isLoaded.txt"), "false")
    })
    return _true()
  },
}
