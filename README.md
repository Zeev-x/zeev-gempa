# zeev-gempa

<p align="center">
  <img src="https://telegra.ph/file/410a3935dc83d2944a629.jpg" height="200px">
</p>

## Contoh penggunaan

```
$ npm i zeev-gempa
```
### File index.js

```
const zeev = require("zeev-gempa");

zeev.gempa()
  .then(result => {
    console.log(result);
  });
```
