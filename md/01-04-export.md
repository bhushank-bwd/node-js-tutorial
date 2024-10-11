# Export in Node JS

## Common JS module

1. Use require(<file_path>)

   - ```js
     require("./math/sum"); // sum.js can be used
     ```
   - This will only print code from <file_path>.
   - Methods and variable are by default protected (also protected to avoid conflict if we create x in both file)
   - if function in defined in file b.js can't access in file a.js without exporting in file b and require in a.js. It will give // `ReferenceError: sum is not defined`

2. Export & import in CJS Module

- one way

```js
module.exports = sum; // in file a.js; it will return sum function
const sum = require("./math/sum"); // in file b.js
```

- second way

```js
// in file a.js
module.exports = { sum };
module.exports = { sum: sum }; // can add multiple variables/keys in object
module.exports.sum = sum;
// all above will work same

// in file b.js
const obj = require("./math/sum");
obj.sum(5, 10);

//
const { sum } = require("./math/sum"); // destructure object
sum(5, 10);
```

- Create package.json and follow code for commonjs will be work also, `for commonjs no need of package.json`

```json
{
  "type": "commonjs"
}
```

## ES Module

1. Create package.json and follow code

```json
{
  "type": "module"
}
```

- Then require will not work. will give `ReferenceError: require is not defined in ES module scope, you can use import instead`

2. Export and Import in ES Module

```js
// in file c
export function multiply(a, b) {
  console.log(a * b);
}
```

```js
// in file d
import { multiply } from "./math/multiply.js"; // need to use js
multiply(6, 8);
```

- For multiple import same as cjs module

3. Default and multiple export

```js
// in file multiply.js"
function multiply(a, b) {
  console.log(a * b);
}
export function square(a) {
  console.log(a * a);
}
export default multiply;

// in file index2.js
import multiply, { square } from "./math/multiply.js";
multiply(6, 8);
square(6);
```

## Differences between Common JS and ESM

| Common Js Module                                      | ES Modules                                                       |
| :---------------------------------------------------- | :--------------------------------------------------------------- |
| known as CJS                                          | known as ESM,ES6 MJS                                             |
| module.export                                         | export/export default                                            |
| require                                               | import                                                           |
| by default node js use it                             | framework like vue/react use it                                  |
| Non Strict mode                                       | strict mode                                                      |
| a = "a" will work                                     | a = 5 will `give     ReferenceError: c is not defined `          |
| Synchronous call require will pause further execution | async call                                                       |
| Older way                                             | newer way, now Open JS Foundation says this will be standard way |

> **Note** In common js module we can require all module from a,b,c in d file and export in d so it is structured and e will communicate to only d
