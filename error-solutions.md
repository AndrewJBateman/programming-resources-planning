# Common Errors and Solutions

* **Error 1: `error in the angular compiler requires typescript >= 3.1 1 and 3.2 0 but 3.0 3 was found instead`**

* In CLI type: `npm i typescript@3.1.6 --save-dev --save-exact`

* **Error 2: `Module not found: Error: Can't resolve 'core-js/es7/reflect'`**

* Add this to `tsconfig.json` after "lib" ["es2018","dom"]:

```json
  "paths": {
    "core-js/es7/reflect": ["node_modules/core-js/proposals/reflect-metadata"],
    "core-js/es6/*": ["node_modules/core-js/es/*"]
  }
```

* downgrade version of npm dependency `core-js` from v3.0.1 to v2.5.7 by typing:

`npm i -S core-js@2.5.7`

* **Error 3: tar - arbitary file overwrite**

* change `package-lock.json` tar version from 2.2.1 to 4.4.8:

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

* **Error 4: tslint tabs**

* If "ident" does not exist in the `tslint.json` file then add this:

```json
"indent": {
      "options": ["tabs", 2]
    },
```