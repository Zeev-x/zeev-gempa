const zeev = require("./index.js");

zeev.gempa()
  .then(result => {
    console.log(result);
  });