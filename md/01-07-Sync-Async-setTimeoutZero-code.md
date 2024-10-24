# Sync Async setTimeoutZero code

## Code

- [async](../js/01-07-Sync-Async-setTimeuutZero-code/async.js)
- [sync](../js/01-07-Sync-Async-setTimeuutZero-code/sync.js)
- [blocking](../js/01-07-Sync-Async-setTimeuutZero-code/blocking.js)
- [setTimeoutZero](../js/01-07-Sync-Async-setTimeuutZero-code/setTimeOutZero.js)

> `fs.readFileSync("./file.txt", "utf8"); // 10 ms` Don't use this blocking operation, Good developer don't use this

- ...sync will force blocking eg readFileSync

## Module List

- [Reference](https://nodejs.org/docs/latest/api/)
- Try another async operation from above reference eg. crypto.pbkdf2

## SetTimeOut Zero issue

```js
setTimeout(() => {
  console.log("call me right now");
}, 0);
```

> It is async operation goes in v8 callstack after main thread is emty

- so there is trust issue in setTimeout
