const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/");

// Database Name
const dbName = "mongoDB-client";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  //   const insertResult = await collection.insertOne({
  //     name: "bhushan2",
  //     email: "bhushan2@gmail.com",
  //   });
  //   console.log("Inserted documents =>", insertResult);

  //   const updateResult = await collection.updateOne(
  //     { email: "bhushan@gmail.com" },
  //     { $set: { name: "Bhushan Edited" } }
  //   );
  //   console.log("Updated documents =>", updateResult);

  //   const filteredDocs = await collection.find({ name: "bhushan" }).toArray();
  //   console.log(
  //     'Found documents filtered by { name: "bhushan" } =>',
  //     filteredDocs
  //   );
  const deleteResult = await collection.deleteOne({ name: "bhushan2" });
  console.log("Deleted documents =>", deleteResult);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
