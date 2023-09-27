const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const { createTransport } = nodemailer;


function  emailSender(receiverEmail,sub,text){ 

 
    
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: receiverEmail,
  subject: sub,
  text: text,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});



}
module.exports = {
    emailSender  
}
