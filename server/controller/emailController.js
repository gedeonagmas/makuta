const AppError = require("../utils/AppError");
const nodemailer = require("nodemailer");

const sendEmailHandler = (email, res, next, subject, message, html) => {
  const transporter = nodemailer.createTransport({
    host: "mail.makutalawyers.com",
    port: 465,
    secure: true,
    auth: {
      user: "donotreply@makutalawyers.com",
      pass: "Maku@Mesy#2098",
    },
  });

  const mailOptions = {
    from: "Makuta Law Firm <donotreply@makutalawyers.com>",
    to: email,
    text: message,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error in sending email  " + error);
      return next(
        new AppError(
          "Connection problem unable to send the email please try again!",
          500
        )
      );
    } else {
      return res.status(200).json({ message: message });
    }
  });
};

module.exports = { sendEmailHandler };
