const nodemailer = require('nodemailer')
require("dotenv").config()
const path = require('path')

//create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port: 587,
    secure:false,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PW
    }
})

const mailOptions = {
    from:{
        name: 'Algo Network',
        address: process.env.EMAIL
    },
    to: ['emailpenerima@gmail.com'], // isi dengan email penerima, jika ingin bulk sending.
    subject: "Send email using nodemailer and gmail",
    text: "Hello World",
    html: "<b>Selamat bakureh guys</b>",
    attachments: [
        {
            filename: "test.pdf",
            path: path.join(__dirname, 'test.pdf'),
            contentType: 'application/pdf'
        },
    ]
}

const sendMail = async (transporter, mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions)
        console.log('email sendd')
    } catch (error) {
        console.log(error)
    }
}

sendMail(transporter, mailOptions)