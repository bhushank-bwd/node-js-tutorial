# Middlewares & Error Handlers

## Some Scenario

1. Simple two route

```js
app.use(
  "/",
  (req, res) => {
    res.send("Response from first route handler");
  },
  (req, res) => {
    res.send("Response from second route handler");
  }
);
```

- This return `Response from first route handler`

2. Simple two route with next in first one

```js
app.use(
  "/",
  (req, res, next) => {
    console..log("Hello from rh1");
    next();
  },
  (req, res) => {
    res.send("Response from second route handler");
  }
);
```

- This return `Response from first route handler`

3.

```js
app.use(
  "/",
  (req, res, next) => {
    console.log("Hello from rh1");
    next();
    res.send("Response from first route handler");
  },
  (req, res) => {
    res.send("Response from second route handler");
  }
);
```

- This return `Response from second route handler` but it will throw error in rh1 `Cannot set headers after they are sent to the client`
- `res.send("Response from first route handler");` will be in callback or callstack so it will execute after `res.send() in second rh2`
- If we don't send response it will go `infinite loop`

4. Route can be multiple

```js
app.use(
  "/",

  [
    (req, res, next) => {
      console.log("Hello from rhArray1");
      next();
    },
    (req, res, next) => {
      console.log("Hello from rhArray2");
      // res.send("Response from second route handler");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Hello from rh1");
    next();
  },
  (req, res, next) => {
    console.log("Hello from rh2");
    // res.send("Response from second route handler");
    next();
  },
  (req, res, next) => {
    console.log("Hello from rh3");
    // res.send("Response from third route handler");
    next();
  },
  (req, res, next) => {
    console.log("Hello from rh4");
    // res.send("Response from fourth route handler");
    next();
  },
  (req, res) => {
    console.log("Hello from rh5");
    res.send("Response from fifth route handler");
  }
);
```

- route handler may be array of route handler also
- In above rh other last one act like middleware and last rh will be actual handler

5. Route handle with same name also

```js
app.get("/user", (req, res, next) => {
  console.log("this is first route handler for user route");
  next();
});
app.get("/user", (req, res, next) => {
  console.log("this is second route handler for user route");
  res.send("this is second route handler for user route");
});
```

- Output will be `this is second route handler for user route`
- reverse the above sequence `this is second route handler for user route` and ` this is first route handler for user  route` won't print
- use same but next and next, it will throw `404 Cannot GET /user`

## Middleware

1. Admin middleware

```js
app.use("/admin", (req, res, next) => {
  // check admin condition
  console.log("admin middleware");
  next();
  // else
  // res.send("no admin");
});

app.post("/admin/add", (req, res, next) => {
  res.send("add done");
});
app.get("/admin/id", (req, res, next) => {
  res.send("get done");
});
```

- first use `"/admin"` will act as middleware for all other get, post etc route like /admin/...

## Error handling

### Route handler parameters based upon numbers

1. If two parameter given then first will be request and second will be response like `req,res`
2. If three parameter given then first will be request and second will be response, third will be next like `req,res,next`
3. If four parameter given then first will be error and second will be request, third will be response and fourth one will be next like `err,req,res,next`

- parameter name not matter, number of parameter matters e.g. if three parameter given then `err,req,res` => err will act like request, req will act like response, res will act like next,

```js
app.use("/admin", (err, req, res, next) => {
  // check admin condition
  if (err) {
    res.status(500).send(err);
  }
  console.log("admin middleware");
  next();
  // else
  // res.send("no admin");
});

app.post("/admin/add", (req, res, next) => {
  throw new Error("error in admin post add");
  res.send("add done");
});
app.get("/admin/id", (req, res, next) => {
  try {
    console.log("admin get id");
    throw new Error("error in admin get id");
    res.send("get done");
  } catch (err) {
    console.log(err);
    res.status(500).send("error in admin get id catch");
  }
});
```

- error response order will matter
