# Diving into the APis

## API Notes

- use following code to accept json data as request payload

```js
app.use(express.json()); // this will apply to all request due to `use`
```

## Moongose methods

1. **Save()** => create a new document
2. **find({})** => find list of documents with {} object filter, return array
3. **findOne({})** => find list of documents with {} object filter, return object
4. **findByIdAndUpdate** => [Reference](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>)
5. **findByIdAndDelete** => [Reference](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>)
