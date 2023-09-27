//Task: Create a command-line tool that allows users to send an email by providing t
//he recipient's email address, subject, and message content.
//NPM Modules: readline for user input, nodemailer for sending emails.


const readline = require('readline');

const {emailSender} = require('./mailService');



function EmailApp(){



  let rl = readline.createInterface(process.stdin, process.stdout);


rl.question("Enter Email  ", (receiverEmail) => {
  

  rl.question("Enter Subject:", (sub) => {
    

    rl.question("Enter Text: ", (text) => {

emailSender(receiverEmail,sub,text);


    });
  });
});
}
EmailApp();


