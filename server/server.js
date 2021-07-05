var express = require("express");
var nodemailer = require('nodemailer');
var cors = require('cors')
var app = express();
const port = 4000;
const path = require("path");

//sms package
const accountSid = 'ACc53326a058466540ad237bd2a360f0cf';
const authToken = '6d7d24aef6833235efe502350719626a';
const client = require('twilio')(accountSid, authToken);

var xlsx = require('xlsx');



// Require employee routes
const companyRoutes = require('./company/router/company.router')
const mailRoutes = require('./service/mail.service')



app.use(cors())

app.use(express.json());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   });

   app.use(express.static(path.join(__dirname, 'dist/calmdusk')));
   app.get('/', function(req, res) {
       res.sendfile('./dist/calmdusk/index.html');
   });


// using as middleware
app.use('/api/v1/companies', companyRoutes)







app.post("/send-sms", (req, res)=> {
  console.log(req.body)
var to = req.body.sms.to;
// for(var i =0; i < to.length; i++){
//   client.messages
//       .create({
//         body: req.body.sms.message,
//         from: '+13368720647',
//         to: to[i]
//       })
//       .then(message => {
//         console.log(message.sid)
//         res.status(200).send({
//           messages: "sent success"
//         })
//       })
//   .catch(error => console.log(error));
// }

});

app.post("/send-sms-via-upload", (req, res)=> {

  var toSmsList = ['+2347059388823','+2347012907166','+2348078411263'];
for(var i =0; i<toSmsList.length; i++){
  client.messages
    .create({
      body: 'Sunshine Why are you taking everbody property to your school',
      from: '+13368720647',
      to: toSmsList[i]
    })
    .then(message => console.log(message.sid))
.catch(error => console.log(error));
}
});



app.post("/send-mail", (req, res)=> {
    console.log(req.body.email)
        console.log(req.body.email);

var transport = nodemailer.createTransport("smtps:victor@mynairagram.com:"+encodeURIComponent('Rossoneri23$$') + "@smtp.office365.com:587");

// var transport = nodemailer.createTransport("SMTP", {
//           host: "smtp.office365.com",
//           secureConnection: false,
//           port: 587,
//           auth: {
//             user: "victor@mynairagram.com",
//             pass: "Rossoneri23$$"
//           },
//           tls: {
//             ciphers:'SSLv3'
//           }
//         });

        //   let mailOptions = {
        //     from: 'enigmaticvictor@gmail.com', // sender address
        //     to: 'cubelinksa1@gmail.com', // list of receivers
        //     //subject: req.body.subject, // Subject line
        //     text: req.body.body, // plain text body
        //     html: `<div>${req.body.params.firstName}</div><div>${req.body.params.lastName}</div>
        //     <div>${req.body.params.location}</div><div>${req.body.params.email}</div>
        //     <div>${req.body.params.phoneNumber}</div><div>${req.body.params.message}</div>` // html body
        // };

        const mailOptions = {
          from: 'victor@mynairagram.com',
          to: 'victor@mynairagram.com',
          subject: 'options.subject',
          html: 'options.subject',
          text: 'options.subject'
        };

        transport.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
         });

});

// app.post("/recieve-mail", (req, res) => {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//                user: 'cubelinksa1@gmail.com',
//                pass: 'cubelinksadmin'
//            }
//        });


//        let mailOptions = {
//         from: `${req.body.params.email}`, // sender address
//         to: 'cubelinksa1@gmail.com', // list of receivers
//         bcc: 'calmdusk615@gmail.com',
//         subject: req.body.params.firstName, // Subject line
//         text: req.body.params.body, // plain text body
//         html: `<div>${req.body.params.message}</div>` // html body
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//         if(err)
//          console.log(err)
//          else
//          console.log(info)
//     })
// })






app.listen(process.env.PORT || port, function( ) {
    console.log(`running on port ${port}`);
});
