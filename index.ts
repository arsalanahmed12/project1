#! /usr/bin/env node
import inquirer from "inquirer"
let answer = await inquirer.prompt([
    {message: "Welcome To The Karachi Park! Please Enter Your Age For Generate Ticket" , type:"number", name: "ticket" }
])
if (answer.ticket >= 0 && answer.ticket <= 4){
    console.log("Welcome, Kids! Free tickets for fun-filled joy in the park!")
}
else if (answer.ticket >= 5 && answer.ticket <= 17 ){
    console.log("Welcome, purchase ticket in just RS:200/= and make your day fun-filled!")
}
else if(answer.ticket >= 18 && answer.ticket <= 49){
    console.log("Welcome, purchase ticket in just RS:400/= and make your day fun-filled")
}
else if (answer.ticket >= 50 ){
    console.log("Welcome seniors! Enjoy complimentary access to our Park!")
}
else {
    console.log("Please enter valid age")
}
