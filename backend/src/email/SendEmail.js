import nodemailer from 'nodemailer'
import "dotenv-defaults/config.js"

const credentials = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS  
    }
  }

const transporter = nodemailer.createTransport(credentials)

const SendEmail = async (to, content) => {
  
    // The from and to addresses for the email that is about to be sent.
    const contacts = {
      from: process.env.MAIL_USER,
      to
    }
    
    // Combining the content and contacts into a single object that can
    // be passed to Nodemailer.
    const email = Object.assign({}, content, contacts)
    
    // This file is imported into the controller as 'sendEmail'. Because 
    // 'transporter.sendMail()' below returns a promise we can write code like this
    // in the contoller when we are using the sendEmail() function.
    //
    //  sendEmail()
    //   .then(() => doSomethingElse())
    // 
    // If you are running into errors getting Nodemailer working, wrap the following 
    // line in a try/catch. Most likely is not loading the credentials properly in 
    // the .env file or failing to allow unsafe apps in your gmail settings.
    await transporter.sendMail(email)
  
}

export default SendEmail