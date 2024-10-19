# Routing & Request handlers

## Sequence of routes

- Sequence 1

1. app.use("/", ...) => will match any route
2. app.use("/hello", ...) => will match any route like /hello, /hello/abc
3. app.use("/test", ...) => will match any route like /test, /test/abc

- Sequence 2

1. app.use("/hello", ...) => will match any route like /hello, /hello/abc
2. app.use("/test", ...) => will match any route like /test, /test/abc
3. app.use("/", ...) => will match any route

- Express gives first matches routes
- Routes order matters
- in first sequence 2nd and 3rd route will not hit because "/" presents at starts

## Routes handling

1. if same route for use, get, post, delete then use will hit as it has first
2. app.get("/ab?c") work for ac and abc; ? for skip/optional b
3. app.get("/a(bc)?d") work for ad and abcd; ? for skip/optional bc
4. app.get("/a(bc)+d") work for abcd and abcbcd; ? for multiple occurrence bc
5. app.get("/ab+c") work for abc and abbc; ? for multiple occurrence of b
6. app.get("/ ab*cd") work for abcd and abbcd, abdsfsdfcd; ? ab*cd is any between ab and cd will work
7. regix also works

## Route Parameters

- Request Query

```js
// home?name=abc&age=5
console.log(req.query);
```

- Request Query Params for dynamic routes

```js
app.get("/list/:id/:name", (req, res) => {
  res.json(req.params);
});
```
