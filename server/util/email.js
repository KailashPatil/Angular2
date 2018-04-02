"use strict";

const nodemailer = require("nodemailer");   // Install the package
const mg = require("nodemailer-mailgun-transport");    // Install the package

const config = require("config");  // Importing config file here - config file is to declare common used things like url, mailsender from, mailgun apikey etc
const _ = require("underscore");

const MailSender = {
  getTransporter: () => {
    const auth = {
      auth: {
        api_key: config.get("email.mailgun.api_key"),  // Accesses apikey from config file - api_key is like door to give entrance into the mailgun to send email
        domain: config.get("email.mailgun.domain")
      }
    };

    return nodemailer.createTransport(mg(auth));
  },
  send: function(values) {
    return new Promise((resolve, reject) => {
      let transporter = MailSender.getTransporter();
      let mailOptions = {    // These Mailoptions details are over written in api call(api/forgot-password)
        from: config.get("email.from"),  // takes email from config
        to: values["to"],   // In 'api/forgot-password' call we mentioned 'to' address in values object
        subject: values["subject"],    // In 'api/forgot-password' call we mentioned 'subject' in values object
        html: values['html']  // In 'api/forgot-password' call we mentioned 'html' in values object
      };

      transporter.sendMail(mailOptions, e => {
        if (e) {
          return reject(e);
        }
        return resolve();
      });
    });
  }
};

module.exports = MailSender;
