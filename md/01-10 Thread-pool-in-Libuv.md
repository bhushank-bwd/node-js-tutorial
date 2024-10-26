# Thread pool in Libuv

- Tick of Event Loop => One Full cycle of Event Pool
- Event Loop in Libuv While Loop on [core.c](https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c)
- By default 4 thread Pool so 5th one need to wait

> Node Js is single threaded or multithreaded. for sync code Node JS is single threaded and for async code it is multi threaded using thread pool

> We can change size of thread pool

```js
process.env.UV_THREADPOOL_SIZE = n;
```
