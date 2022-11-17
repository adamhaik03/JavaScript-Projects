function myConcat() { //naming and defining a function
    var X = "This is "; //naming and defining a variable
    var Y = "an example of use ";//naming and defining a variable
    var C = "a concat method.";//naming and defining a variable
    var V = " Messi is a GOAT.";//naming and defining a variable
    var full = X.concat(Y, C, V); //naming and definig a variable using concat method
    document.getElementById("concatenate").innerHTML = full; //putting a value of a result into HTML element
}

function mySlice() { //naming and definig a variable
    var X = "This is an example of use a concat method."; //naming and defining a variable
    var Y = X.slice(28, 35); //naming and defining a variable using slice method
    document.getElementById("slice").innerHTML = Y; //putting a value of a result into HTML element
}

function myUpper() { //naming and definig a variable
    var X = document.getElementById("upper").innerHTML; //naming and defining a variable, reading a value from HTML element
    document.getElementById("upper").innerHTML = X.toUpperCase(); //putting a value of a result into HTML element
}

function mySearch() {
let text = "Let's make a cake for Drake"; //defining and naming a variable
let cake = "cake"; //defining and naming a variable
document.getElementById("search").innerHTML = text.search(cake); //using search method and putting a value of a result into HTML element
console.log(text.search(cake)); //using search method and putting a value into console

function myNumToStr() { //defining and naming a function
    var X = 2137; //defining and naming a variable
    document.getElementById("convertion").innerHTML = X.toString(); //using toString method and putting a value of a result into HTML element
}

function myPrecision() { //naming and defining a variable
    const X = 2137.21372137; //naming and defining a variable
    document.getElementById("precision").innerHTML = X.toPrecision(10); //using toPrecision method and putting a value of a result into HTML element
}

function myFix() { //naming and defining a function
    var Y = 2137.2137; //naming and defining a variable
    let X = Y.toFixed(3); //naming and defining a variable using toFixed method
    document.getElementById("fixed").innerHTML = X; //putting a value of a result into HTML element
}

function myValue() { //naming and defining a function
    var Q = "Bed soon."; //naming and defining a variable
    var result = Q.valueOf(); //naming and defining a variable using valueOf method
    document.getElementById("value").innerHTML = result; //putting a value of a result into HTML element
}
