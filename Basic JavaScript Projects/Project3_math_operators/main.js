function addition() { //Defining and naming a function
    var x = 21 + 37; //Defining a variable and performing addition
    document.getElementById("Addition").innerHTML = "The result of adding 21 to 37 is " + x; //Putting the value of result into HTML element
}

function subtraction() { //Defining and naming a function
    var a = 37 - 21; //Defining a variable and performing subtraction
    document.getElementById("Subtraction").innerHTML = "The result of subtracting 21 from 37 is " + a //Putting the value of result into HTML element
}

function multiplication() { //Defining a function and naming it
    var b = 21 * 37; //Defining a variable and performing multiplication
    document.getElementById("Multiplication").innerHTML = "The result of multiplicating 21 and 37 is " + b //Putting a value of result into HTML element
}

function division() { //Defining and naming a function
    var c = 21 / 37; //Defining a variable and performing division
    document.getElementById("Division").innerHTML = "The result of dividing 21 by 37 is " + c  //Putting a value of result into HTML element
}

function incremention() { //Defining and naming a function
    var d = 2137; //Defining a variable and giving it value
    d++; //Performing incremention
    document.getElementById("Incremention").innerHTML = "The result of using increment operator on 2137 is " + d //Putting a value of result into HTML element
}

function decremention() { //Defining a function and naming it
    var e = 2137; //Defining a variable and giving it value
    e--; //Performing decremention
    document.getElementById("Decremention").innerHTML = "The result of using decrement operator on 2137 is " + e //Putting a value of result into HTML element
}

function random() { //Defining a function and naming it
    document.getElementById("Random").innerHTML = "Your random number is " + Math.random(); //Putting a value of random math operation into HTML element
}