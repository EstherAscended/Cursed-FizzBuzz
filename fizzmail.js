const nodemailer = require("nodemailer");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let rawCredentials = fs.readFileSync('credentials.json');
let credentials = JSON.parse(rawCredentials);

let target;
let numberToFizzBuzz;

function fizzBuzz (n)
{
    const FIZZ = 3;
    const BUZZ = 5;
    let email = "";
    for (let i = 1; i <=n; i++)
    {
        let output = "";
        
        if (i % FIZZ === 0) output += "Fizz";
        if (i % BUZZ === 0) output += "Buzz";

        if (output) email += (output + "\n");
        else email += (i + "\n");
    }
    return email;
}

function sendMail(userName, passWd, service, sender, recipient, n)
{
    const transporter = nodemailer.createTransport(
        {
            service: service,
            auth: 
            {
                user: userName,
                pass: passWd
            }
        });
        
        const mailOptions = 
        {
            from: sender,
            to: recipient,
            subject: "FizzBuzz",
            text: fizzBuzz(n)
        }
        
        transporter.sendMail(mailOptions, function(error, info) 
        {
            if (error) 
            {
                console.log(error);
            }
            else
            {
                console.log("Email sent: " + info.response);
            }
        });
}

rl.question("Enter target email: ", (targetEmail) => {
    rl.question("Enter desired number: ", (desiredNumber) => {
        target = targetEmail;
        numberToFizzBuzz = desiredNumber; 
        sendMail(credentials.user, credentials.pass, credentials.service, credentials.sender, target, numberToFizzBuzz);
        rl.close();    
    });
});



