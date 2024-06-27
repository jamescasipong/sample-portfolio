// api/send-email.js

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method Not Allowed", allowedMethods: ["POST"] });
  }

  const { name, email, message } = req.body;

  try {
    // Create a Nodemailer transporter using SMTP settings
    let transporter = nodemailer.createTransport({
      service: "Gmail", // Example: replace with your SMTP service
      auth: {
        user: "jamescasipong8@gmail.com",
        pass: "bmsz njuh qfna zpyw",
      },
    });

    // Email content
    let mailOptions = {
      from: "jamescasipong8@gmail.com",
      to: "recipient-email@example.com",
      subject: "New Message from Portfolio Contact Form",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Unable to send email" });
  }
}
