const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    console.log("Mail gönderiliyor:", {
      name,
      email,
      subject,
      message,
    });

    const mailOptions = {
      from: `"BD Medikal İletişim Formu" <${process.env.EMAIL_USER}>`,
      to: "imjackmartin54@gmail.com",
      subject: `BD Medikal İletişim Formu: ${subject}`,
      html: `
        <h2>BD Medikal İletişim Formu</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail başarıyla gönderildi");
    res.status(200).json({ message: "Mail başarıyla gönderildi" });
  } catch (error) {
    console.error("Hata detayları:", error);
    res
      .status(500)
      .json({ error: "Mail gönderilemedi", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
  console.log("Mail yapılandırması:", {
    user: process.env.EMAIL_USER,
    passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
  });
});
