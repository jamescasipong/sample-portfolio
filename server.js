const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Node.js path module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory (index.html, etc.)
app.use(express.static(path.join(__dirname)));

// POST endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter using SMTP settings
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // Example: replace with your SMTP service
    auth: {
      user: 'jamescasipong8@gmail.com',
      pass: 'bmsz njuh qfna zpyw'
    }
  });

  // Email content
  let mailOptions = {
    from: 'jamescasipong8@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Message from Portfolio Contact Form',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Unable to send email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/send-email-success.html');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
