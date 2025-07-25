// pages/api/contact.js
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/lib/models/Contact";

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  try {
    await dbConnect();
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
}
