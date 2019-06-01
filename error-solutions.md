# Common Errors and Solutions

* **Error a: `error in the angular compiler requires typescript >= 3.1 1 and 3.2 0 but 3.0 3 was found instead`**

* Solution: In CLI type: `npm i typescript@3.1.6 --save-dev --save-exact`

* **Error b: `error in the angular compiler requires typescript >= 3.4 0 and <3.5 0 but 3.5 1 was found instead`**

* Solution: In CLI type: `npm i typescript@3.4.1 --save-dev --save-exact`

**Error: C:\Users\Andrew\code\code-uptodate\angular-elements-study\src\polyfills.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.**

* Solution: Add this to `tsconfig.json` after "lib" ["es2018","dom"]:

`"files": [
    "./../src/main.ts"
  ]`

* **Error: `src/app/app.module.ts(7,15): error TS2591: Cannot find name 'process'. Do you need to install type definitions for node? Try`npm i @types/node`and then add`node`to the types field in your tsconfig.`**

* Solution: In CLI type: `npm i typescript@3.1.6 --save-dev --save-exact`

* Solution: If "types" does not exist in the `tslint.json` file then add this: `"types": ["node"],`

* **Error: `Module not found: Error: Can't resolve 'core-js/es7/reflect'`**

* Solution: Add this to `tsconfig.json` after "lib" ["es2018","dom"]:

```json
  ",paths": {
    "core-js/es7/reflect": ["node_modules/core-js/proposals/reflect-metadata"],
    "core-js/es6/*": ["node_modules/core-js/es/*"]
  }
```

* downgrade version of npm dependency `core-js` from v3.0.1 to v2.5.7 by typing:

`npm i -S core-js@2.5.7`

* **Error: tar - arbitary file overwrite**

* Solution: change `package-lock.json` tar version from 2.2.1 to 4.4.8:

```json
    "tar": {
      "version": "4.4.8",
      "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.8.tgz",
      "integrity": "sha1-jk0qJWwOIYXGsYrWlK7JaLg8sdE=",
      "dev": true,
      "optional": true,
      "requires": {
        "block-stream": "*",
        "fstream": "^1.0.2",
        "inherits": "2"
      }
```

* **Error: tslint tabs**

* Solution: If "ident" does not exist in the `tslint.json` file then add this:

```json
"indent": {
      "options": ["tabs", 2]
    },
```
