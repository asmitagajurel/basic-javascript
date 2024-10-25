// Write a JavaScript program that prints 'Hello World'.

document.write("hello world")
console.log("hello world")


//Write a JavaScript program to set the value of PI.

const pi= 3.14

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

const num1=Number(prompt("enter num1")) 
const num2=Number(prompt("enter num2 ")) 

if(num1 ===num2 )
{   
    let cal = 3*(num1+num2 )  
    document.write(cal)
}
else {
    document.write("number are not same")
}

// login logic problem

const user_id="mirajdeep"
const pass="asmita"

const id = prompt("enter your id")
const password= prompt("enter your passowd")

if(user_id == id && pass == password )
{
    document.write("Login Suceessful")
}
else{

    document.write("userid or passord do not match")
}

