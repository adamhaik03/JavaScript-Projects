function Call_loop() { //defining and naming a function
    var papaj = ""; //naming and defining a variable
    var pope = 21; //naming and defining a variable
    while (pope < 38) { //creating a conditional statement
        papaj += "<br>" + pope; //executing a loop
        pope++; //incrementing value of "pope" for each run
    }
    document.getElementById("Loop").innerHTML = papaj; //putting a value of a result into HTML element
}

function myLength() { //defining and naming a function
    var X = "papaj2137"; //naming and defining a variable
    var long = X.length; //naming and defining a variable using "length" property
    document.getElementById("length").innerHTML = "The length of \x22papaj2137\x22 string equals " + long + "."; //putting a value of a result into HTML element
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //naming and defining an array
var Content = ""; //naming and defining a variable
var Y; // declaring a variable
function for_loop() {  // declaring a function 
    for(Y = 0; Y < Instruments.length; Y++) { //creating a conditional statement
    Content += Instruments[Y] + "<br>"; // executing a loop
    }
    document.getElementById("List_of_instruments").innerHTML = Content; //putting a value of a result into HTML element
}
    
function array_function() { //defining a function
    var national_teams = []; // declaring an array
    national_teams[0] = "Poland"; //declaring a property
    national_teams[1] = "Netherlands"; //declaring a property
    national_teams[2] = "Brazil"; //declaring a property
    national_teams[3] = "Germany"; //declaring a property
    national_teams[4] = "England"; //declaring a property
    national_teams[5] = "Senegal"; //declaring a property
document.getElementById("Array").innerHTML = national_teams[0] + " will win FIFA World Cup 2022 in Qatar."; //putting a value of a result into HTML element
}

function constant_function() { //declaring a function
    const car = {make: "ford", model: "fiesta", color: "black"} // naming and defining an object
    car.yop = "2010"; //declaring a property
    car.color = "red"; //declaring a property
    document.getElementById("Constant").innerHTML = "I'm curently driving " + car.color + " " + car.model + " from " + car.yop + " and I've never been happier."; //putting a value of a result into HTML element
}

let G = "2137"; //declaring a variable
document.write(G); //reading a variable

let x = myReturn(4, 3); //declaring a variable
document.getElementById("score").innerHTML = x; //putting a value of a result into HTML element

function myReturn(a, b) { //declaring a function
  return a * b; // performing an operation
}

let biscuit = { //creating a variable 
    company : "Kinder ", //declaring a property
    name : "Happy Hippo ", //declaring a property
    flavour : "cocoa ", //declaring a property
    description : function() { //creating a function
        return "My favourite sweet is " + this.name + "from " + this.company + this.flavour + "flavoured." // performing an operation
    }
};
document.getElementById("aLet").innerHTML = biscuit.description() //putting a value of a result into HTML element

let broken = ""; //creating a variable
Loop0: //naming a loop
for (let i = 0; i < 10; i++) { //creating a conditional statement
    if (i === 5) break Loop0; //creating a conditional statement
    broken += i + "<br>"; //executing a loop
}
document.getElementById("break").innerHTML = broken;//putting a value of a result into HTML element

let cont = ""; //declaring a variable
Loop1://naming a loop
for (let i = 0; i < 10; i++) {//creating a conditional statement
    if (i === 2) continue Loop1; //creating a conditional statement
    cont += i + "<br>"; //executing a loop
}
document.getElementById("continue").innerHTML = cont;//putting a value of a result into HTML element


