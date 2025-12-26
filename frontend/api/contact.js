import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  const { message, name, email, phone, contactType } = req.body;

  if (!message || !name || !email || !phone || !contactType) {
    return res.status(400).json({
      msg: "All fields are required",
      status: false,
    });
  }

  const messageContent = `
New contact request received:

Name: ${name}
Phone: ${phone}
Email: ${email}
Contact Type: ${contactType}

Message:
${message}
`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Request from Padukone Centre for Sports Website",
      text: messageContent,
    });

    return res.status(200).json({
      msg: "Message sent successfully",
      status: true,
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      msg: "Failed to send message",
      status: false,
    });
  }
}
