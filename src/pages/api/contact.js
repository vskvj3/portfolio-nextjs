import transporter from "@/lib/email";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    try {
      const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "visakhvj3@gmail.com",
        subject: `Portfolio response: ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message:
        ${message}
        `,
      });
      res.status(200).json({ success: true, id: info.messageId });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error adding contact:", error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
