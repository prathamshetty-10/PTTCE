
import nodemailer from "nodemailer";

export const contact = async (req, res, next) => {
  const { message, name, email, phone} = req.body;

  if (!message || !name || !email || !phone) {
    return res.json({ msg: "All fields are required", status: false });
  }

  // Prepare the content with name, email, phone, and message
  const messageContent = `New contact request received:
  Name: ${name}
  Phone: ${phone}
  Email: ${email}
  Message: ${message}`;
  

  // Send Email using Nodemailer
  const sendEmail = async () => {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail service, you can configure for others if needed
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Admin email address
      subject: "New Contact Request from PTTCE Website",
      text: messageContent, // Send the same message content as the WhatsApp message
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully.");
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }
  };

  try {
    
    await sendEmail();

    return res.json({ msg: "Message sent successfully", status: true });
  } catch (error) {
    console.error("Error in message sending process:", error.message);
    return res.json({ msg: "Failed to send message", error: error.message });
  }
};

