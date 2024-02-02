"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "fullstack8k2@gmail.com",
    // pass: "iqzv exik ymgo zvje",
    pass: "cjwa qgxy pwwl gqaz",

  },
});

const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"F8 Education" <hoangan@f8team.dev>', // sender address
    to,
    subject,
    html: message, // html body
  });
  return info;
};
module.exports = sendMail;
