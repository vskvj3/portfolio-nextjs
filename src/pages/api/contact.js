import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      res.status(200).json({ success: true, id: docRef.id });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Error adding contact:", error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
