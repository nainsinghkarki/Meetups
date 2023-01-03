import { MongoClient } from "mongodb";

async function handler(req, res) {
  const DB_URL = process.env.DB_URL;
  if (req.method === "POST") {
    const data = req.body;
    console.log("data received", data);
    const client = await MongoClient.connect(DB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
