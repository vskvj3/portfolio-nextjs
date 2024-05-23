

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }
    // The email could be validated here
    // The message could be validated here
    // The name could be validated here
    // The message could be sanitized here
    // The name could be sanitized here
    // The email could be sanitized here
    // The email could be saved to a database here
    // The message could be saved to a database here
    // The name could be saved to a database here
    return res.status(200).json({ message: "Message received" });
  }
  return res.status(405).json({ error: "Method not allowed" });
}