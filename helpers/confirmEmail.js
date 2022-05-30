/* eslint-disable no-useless-catch */
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const confirmEmail = async (data) => {
  try {
    const email = { ...data, from: "d.anasteysha@gmail.com" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = confirmEmail;
