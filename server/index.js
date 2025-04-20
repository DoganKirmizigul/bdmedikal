const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS ve JSON desteği ekleyelim
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail", // host yerine service kullanalım
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Test amaçlı konsola yazdıralım
    console.log("Attempting to send email with:", {
      name,
      email,
      subject,
      message,
    });

    const mailOptions = {
      from: '"Neurovasc Website" <neurovasc.development@gmail.com>',
      to: "info@neurovasc.co.uk",
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error details:", error);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Email configuration:", {
    user: process.env.EMAIL_USER,
    passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
  });
});
