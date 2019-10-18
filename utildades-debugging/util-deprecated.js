const util = require("util");
const helloPluto = util.deprecate(() => {
  console.log("Hello pluto");
}, "pluto is deprecated Is not a planet anymore");
helloPluto()