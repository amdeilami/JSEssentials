"use strict";
/**
 *`require` is kind of an old way to use code written in other files
 * a newer way is to use `import` and `export`
 * we can `import` something from a file if it has been exported
 * when you `export` something from a file, everything from that file gets executed when you `import` it
 */
import SpaceShip from "./025-class.js"

/**
 * there is difference between named and default exports
 * Default exports (or fallback export) must be imported with `import <name> from "..."`
 * Named exports must be imported with `import { something } from "..."` (with curly braces)
 */


const kratos = new SpaceShip("Saturn");
// at this point, you've seen print statements from `025-class.js`

console.log(kratos);

/**
 * we can use `*` to import every exported thing from a file
 * `import * as newObjectName from "./file.js"
 */