var express = require("express");
var nodemailer = require('nodemailer');
var cors = require('cors')
var app = express();
const port = 3000;
const path = require("path");




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

app.use(express.static(__dirname + '/dist/calmdusk/index.html'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/calmdusk/index.html'));
});




app.post("/send-mail", (req, res)=> {
        console.log(req.body.params.email);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'enigmaticvictor@gmail.com',
                   pass: 'rossoneri'
               }
           });
        
          let mailOptions = {
            from: 'enigmaticvictor@gmail.com', // sender address
            to: 'cubelinksa1@gmail.com', // list of receivers
            //subject: req.body.subject, // Subject line
            text: req.body.body, // plain text body
            html: `<div>${req.body.params.firstName}</div><div>${req.body.params.lastName}</div>
            <div>${req.body.params.location}</div><div>${req.body.params.email}</div>
            <div>${req.body.params.phoneNumber}</div><div>${req.body.params.message}</div>` // html body
        };
        
        transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
         });
   
});

app.post("/recieve-mail", (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'cubelinksa1@gmail.com',
               pass: 'cubelinksadmin'
           }
       });
    

       let mailOptions = {
        from: `${req.body.params.email}`, // sender address
        to: 'cubelinksa1@gmail.com', // list of receivers
        bcc: 'calmdusk615@gmail.com',
        subject: req.body.params.firstName, // Subject line
        text: req.body.params.body, // plain text body
        html: `<div>${req.body.params.message}</div>` // html body
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
         console.log(err)
         else  
         console.log(info)
    })
}) 






app.listen(process.env.PORT || port, function( ) {
    console.log(`running on port ${port}`);
});