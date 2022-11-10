

var num1 = 21; // defining a variable 
var num2 = "37"; //defining a variable
var comb = 21 + "37" //combining string and number
console.log(comb); //putting a value into a console

document.write(typeof comb); //putting a type of a value into HTML
document.write("<br>");

document.write(21 == 37); // checking if numbers are equal
document.write("<br>");

document.write("21" === 37); // checking if numbers and their type are equal
document.write("<br>");

document.write(21 > 37); //checking if first number is greater than other
document.write("<br>");

document.write(21 < 37);//checking if second number is greater than other
document.write("<br>");

document.write(21 < 37 && 11 > 9); // checking if both expressions are true
document.write("<br>");

document.write(21 < 37 || 9 > 11); //checking if at least one expression is true
document.write("<br>");

function not_Function() { //naming and defining a function
    document.getElementById("Not").innerHTML = !(21 > 37) //checking if expression is true and putting a value into HTML element
}
