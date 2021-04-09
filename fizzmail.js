const nodemailer = require("nodemailer");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const { Builder, By, Key, Capabilities } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const onePath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[4]/td[1]/div/div";
const twoPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[4]/td[2]/div/div";
const threePath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[4]/td[3]/div/div";
const fourPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[3]/td[1]/div/div";
const fivePath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[3]/td[2]/div/div";
const sixPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[3]/td[3]/div/div";
const sevenPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[2]/td[1]/div/div";
const eightPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[2]/td[2]/div/div";
const ninePath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[2]/td[3]/div/div";
const zeroPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[5]/td[1]/div/div";
const dividePath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[2]/td[4]/div/div";
const equalsPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[5]/td[3]/div/div";
const answerPath = "/html/body/div[8]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[1]/div[2]/div[2]/div/div/span";

const agreePath = "/html/body/div[3]/div[3]/span/div/div/div[3]/button[2]/div";
const potentialAgreePath = "/html/body/div/c-wiz/div[2]/div/div/div/div/div[2]/form/div";

const paths = [zeroPath, onePath, twoPath, threePath, fourPath, fivePath, sixPath, sevenPath, eightPath, ninePath, dividePath, equalsPath];

async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

let rawCredentials = fs.readFileSync('credentials.json');
let credentials = JSON.parse(rawCredentials);

let target;
let numberToFizzBuzz;
let delay = 30;

/*
function fizzBuzzTest (n)
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
*/

async function fizzBuzz (n)
{
    const FIZZ = 3;
    const BUZZ = 5;
    let email = "";

    let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get("https://google.com");
    await driver.findElement(By.name("q")).sendKeys("Calculator",Key.ENTER);
    for (let i = 1; i <= n; i++)
    {
        let output = "";
        let numArr = i.toString().split("");        
        try 
        {
            await wait(delay);
            await driver.findElement(By.xpath(agreePath)).click();
            await driver.findElement(By.xpath(potentialAgreePath)).click();
        }
        catch {}
        finally 
        {
            for (let n = 0; n < numArr.length; n++)
            {
                await driver.findElement(By.xpath(paths[numArr[n]])).click();
                await wait(delay);
            }
            await driver.findElement(By.xpath(dividePath)).click();
            await wait(delay);
            await driver.findElement(By.xpath(paths[FIZZ])).click();
            await wait(delay);
            await driver.findElement(By.xpath(equalsPath)).click();
            await wait(delay);
            await setFizzOrBuzz(await driver.findElement(By.xpath(answerPath)).getText(), "Fizz");
            await wait(delay);
            for (let n = 0; n < numArr.length; n++)
            {
                await driver.findElement(By.xpath(paths[numArr[n]])).click();
            }
            await driver.findElement(By.xpath(dividePath)).click();
            await driver.findElement(By.xpath(paths[BUZZ])).click();
            await driver.findElement(By.xpath(equalsPath)).click();
            await wait(delay);
            await setFizzOrBuzz(await driver.findElement(By.xpath(answerPath)).getText(), "Buzz");
            await wait(delay);
        
            await getOutput();
            await wait(delay);
            
            async function getOutput () 
            {
                if (output) email += (output + "\n");
                else email += (i + "\n");
            }

            async function setFizzOrBuzz(n, fizzOrBuzz)
            {
                if (Number.isInteger(Number.parseFloat(n)) && n != 0) output += fizzOrBuzz;
            }              
        }       
    }
    await driver.quit();
    return email;
}

/*
async function getFizzBuzzTestAnswer () {
    let data = await fizzBuzz(50);    
    console.log(data);
    console.log(fizzBuzzTest(50));
    if (data == fizzBuzzTest(50)) console.log("hooray");
}
getFizzBuzzTestAnswer();
*/
async function sendMail(userName, passWd, service, sender, recipient, n)
{
    let data = await fizzBuzz(n);
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
            text: data
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
    rl.question("Enter desired calculator input delay in ms (recommended is 50): ", (desiredDelay) => {
        rl.question("Enter desired number: ", (desiredNumber) => {
            target = targetEmail;
            numberToFizzBuzz = desiredNumber; 
            delay = desiredDelay;
            sendMail(credentials.user, credentials.pass, credentials.service, credentials.sender, target, numberToFizzBuzz);
            rl.close();    
        });
    });

});



