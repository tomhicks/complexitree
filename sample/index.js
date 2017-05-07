import fs from "fs"

import alan from "./alan"
const egg = require("./egg")

function alan(ee, ff) {
  console.log(ee * 2)
}

const fn = (ff, gg) => ff * gg

const a = 1

if (a === 2) {
  console.log("it's two")
} else {
  console.log("it's one")
  throw new Error("Foo")
}

export class Cheese {
  constructor() {
    this.egg = "bacon"
  }

  whatAmI() {
    function getIt(name) {
      return name.toUpperCase()
    }

    return getIt(this.egg)
  }
}
