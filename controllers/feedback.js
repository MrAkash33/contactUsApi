const { customerModal } = require("../modal/contact")
var nodemailer = require('nodemailer');

const feedBack = async (req,res,next) => {
    console.log(process.env.PASSWORD,"envfile);
    console.log(req.body);
    const data = req.body
    let user = new customerModal ({
        username :req.body.username,
        email :req.body.email,
        message :req.body.message
    })
    const savedData = await user.save()
      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',   
        port: 587,
        secure:false,
        auth: {
          user: 'artstartdotin@gmail.com',
          pass: process.env.PASSWORD
        }
      });
      var mailOptions = {
        from: 'artstartdotin@gmail.com',
        to: req.body.email,
        subject: 'Thankyou for contacting!',
        text: ` Hii ${req.body.username} thanks for contacting. I will touch you soon!`
      };
      var mailOptionsSender = {
        from: 'artstartdotin@gmail.com',
        to: 'artstartdotin@gmail.com',
        subject: 'Someone Wants to connect With you !',
        text: ` Hello Artstart ${req.body.username} wants to connect with you please contact him to further query!`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
            transporter.sendMail(mailOptionsSender, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
        }
      });
      res.json(savedData)
}

module.exports = {
    feedBack
}
