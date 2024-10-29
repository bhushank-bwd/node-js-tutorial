# Data Sanitization & Schema Validations

## Schema level validation

1. Unique
2. trim
3. lowercase
4. validate => only called when new document to be insert
5. add timestamps
6. findByIdAndUpdate add run validator option to tackle above 4th point when update document
7. Add unique index in mongodb compass [Ref.](https://stackoverflow.com/questions/5535610/mongoose-unique-index-not-working?page=2&tab=scoredesc)

## API level Validation

- Skill validation

```js
if (req.body?.skills.length > 3) {
  throw new Error("Skills cannot be more than 3");
}
```

## API Level validation using Validator package

- Install package `validator`

```bash
npm i validator
```

- Code in User Schema

```js
emailId: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    index: true,
    validate(value) {
    if (!validator.isEmail(value)) {
        throw new Error("Invalid email address: " + value);
    }
    },
},
password: {
    type: String,
    required: true,
    validate(value) {
    if (!validator.isStrongPassword(value)) {
        throw new Error("Not strong password: " + value);
    }
    },
},
```

> Create new function in separate file
