const nodemailer = require("nodemailer");

const sendEmail = (option) => {
  //Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // DEFINE EMAIL OPTIONS
  const emailOptions = {
    from: "Cineflix support<support@cineflix.com>",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

 transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
