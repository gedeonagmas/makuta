import nodemailer from "nodemailer";
import AppError from "./AppError.js";

const sendEmail = async ({ email, message, subject, html, next, res }) => {
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "mail.makutalawyerss.com",
    port: 465,
    secure: true,
    auth: {
      // user: "gedeonagmas2580@gmail.com",
      // pass: "dkgpxlapjqdbnvql",
      user: "donotreply@makutalawyers.com",
      pass: "Maku@Mesy#2098",
    },
  });

  const mailOptions = {
    from: "Makuta law firm system <donotreply@makutalawyers.com>",
    to: email,
    text: message,
    subject: subject,
    html: html,
  };

  const response = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error in sending email  " + error);
      // return next(
      //   new AppError(
      //     "Something went wrong unable to send the email please try again",
      //     500
      //   )
      // );
      val = "false";
      return val;
    } else {
      console.log("Email sent: " + info.response);
      let val = "true";
      return val;
    }
  });
  return response;
};

export default sendEmail;
