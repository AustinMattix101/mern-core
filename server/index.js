const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const uri = process.env.ATLAS_URI;
const local_uri = process.env.LOCAL_URI;

const app = express();
app.use(cors());
app.use(express.json({ limit:"30mb", extended: true }));
app.use(express.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());

// mongoose
//     const connect = mongoose.connect(url, 
//         {   useNewUrlParser: true, 
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false     });
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
    console.log(err)
//   client.close();
});

// const client = new MongoClient(uri);
// console.log("API reached!");
// console.log(ServerApiVersion);
// async function run() {
//     try {
//         const database = client.db('Camunited');
//         const users = database.collection('users');
//         // Query for a customer that has the title 'Back to the Future'
//         res = await users.insertOne({ username: "austin", email: "songchimchek23712@gmail.com", passord: "password12345" });
//         const query = { username: "austin" };
//         const user = await users.findOne(query);
//         console.log(user);
//     } catch (err) {
//           console.error(`Something went wrong: ${err}`);
//         }
// }
// run().catch(console.dir);


// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );