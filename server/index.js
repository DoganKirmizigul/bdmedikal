const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: ["https://www.bdmedikal.com", "http://localhost:3000"],
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());

// Serve static build files (if present) and handle SPA routing.
// This makes requests like `/index.html` or unknown paths return the app's index.html
const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

// Redirect explicit /index.html requests to root so client-side router shows Home
app.get("/index.html", (req, res) => {
  return res.redirect(301, "/");
});

// For SPA client-side routing: serve index.html for all other GET requests
app.get("*", (req, res) => {
  if (req.method !== "GET") return res.status(405).end();
  res.sendFile(path.join(buildPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send(err.message);
    }
  });
});

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
