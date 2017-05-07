const Promise = require("bluebird")
const {prepend, map, join, compose} = require("ramda")
const util = require("util")
const fs = require("fs-extra-promise")

const complexity = require("typhonjs-escomplex")

const files = map(compose(join(""), prepend(__dirname)), [
  "/sample/alan.js",
  "/sample/egg.js",
  "/sample/index.js"
])

Promise.all(files)
  .map(path => Promise.props({
    code: fs.readFileAsync(path, "utf8"),
    filePath: path,
    srcPath: path,
  }))
  .then(project => complexity.analyzeProject(project, {commonjs: true}))
  .then(fs.outputJSON.bind(null, __dirname + "/out-project.json"))
