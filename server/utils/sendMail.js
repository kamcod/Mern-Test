const nodemailer = require('nodemailer');
const {google} = require('googleapis');



const OAuth2_client = new google.auth.OAuth2(process.env.clientID, process.env.clientSecret);
OAuth2_client.setCredentials({refresh_token: process.env.refreshToken});

const sendMail = (recipient, body) => {
    const accessToken = OAuth2_client.getAccessToken();
    
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: "OAUTH2",
            user: "mkamran4786@gmail.com",
            clientId: process.env.clientID,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken
        }
    });

    const mailOptions = {
        from: 'Mern App <mkamran4786@gmail.com>',
        to: recipient,
        subject: body.subject,
        text: body.text
    }

    transport.sendMail(mailOptions, function(err, result){
        if(err){
            console.log("Mail Error", err)
        } else {
            console.log("Email is sent successfully!", result);
        }
        transport.close()
    })
};

module.exports = sendMail ;

