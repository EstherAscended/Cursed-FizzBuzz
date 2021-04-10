# The Cursed Fizzmailer

             This place is a message... and part of a system of messages... pay attention to it!
           Sending this message was important to us. We considered ourselves to be a powerful culture.
             This place is not a place of honor... no highly esteemed deed is commemorated here... 
                                       nothing valued is here.
             What is here was dangerous and repulsive to us. This message is a warning about danger.
                 The danger is in a particular location... it increases towards a center... 
                 the center of danger is here... of a particular size and shape, and below us.
                         The danger is still present, in your time, as it was in ours.
                                   The danger is to the body, and it can kill.
                                The form of the danger is an emanation of energy.
                The danger is unleashed only if you substantially disturb this place physically. 
                                This place is best shunned and left uninhabited.

## What is this nightmare?
The Cursed Fizzmailer is a painfully stupid solution to the iconic FizzBuzz problem that utilises the Google calculator to do all of the basic mathematical operations. Once the problem has been solved, it then emails the solution to the specified email address. It is not efficient, nor is it that clever, but it looks really funny whilst it does its thing. You can see a [video of it in action here](https://www.youtube.com/watch?v=mUGsuIy4EZE).

The crux of the joke revolves around the thought of going into an interview and responding to a request to solve FizzBuzz for n with "Okay, what's your email?" With that thought in mind you have now experienced most of what is to be gained from this project. However, should you be deranged enough to want to try it out yourself, I will provide some general guidelines below.

## How to use

 1. Clone the repository and use npm to install the [nodemailer](https://www.npmjs.com/package/nodemailer), [chromedriver](https://www.npmjs.com/package/chromedriver) and [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) packages.
 2. Ensure you have both Google Chrome and the appropriate version of [Chrome Webdriver](https://chromedriver.chromium.org/downloads) installed. Check **Help->About Google Chrome** to see the version of Chrome you are running.
 3. Ensure the Chrome Webdriver has been added to your PATH. [Here is a guide on how to do that.](https://zwbetz.com/download-chromedriver-binary-and-add-to-your-path-for-automated-functional-testing/)
 4. Edit the *credentials.json* file with all information needed. This program has only been tested sending email from gmail addresses however it will likely work for other services without too much issue. Check the [nodemailer documentation](https://nodemailer.com/about/) for any specific changes you may have to make. You will also likely have to enable less secure app access on your account. For this reason and the potential risk of your emails triggering spam filters I recommend making a throwaway account for use with this program.
 5. Run the program by typing **node fizzmail.js**.
 6. When prompted, enter the email you wish to send the solution to.
 7. Enter the desired delay between certain inputs into the calculator. I have found 50ms to be the most reliable for me. If you are having issues with the program not running properly then increasing this value will likely help.
 8. Finally, enter the desired number which you want FizzBuzz to be solved for. The larger the number, the longer you get to look at the calculator and the more annoying the email you send will be. 
 9. Think about what you have done.

## Important
Please don't use this program to send annoying emails to people you don't know/don't like. The only real value it brings to the world is in being a funny thing to watch run for a minute or two whilst you show it to a friend. Using it for any other purpose is just kind of weird. Don't be weird.