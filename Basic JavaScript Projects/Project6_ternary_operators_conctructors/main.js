function vote_elgibility() { //defining function and naming it
    var Age,  can_vote; // defining and naming variables
    Age = document.getElementById("Age").value; //using input from the browser to give variable a value
    can_vote = (Age < 18) ? "You are not eligible" : "You are eligible"; //performing ternary operation
    document.getElementById("Vote").innerHTML = can_vote + " to vote."; //putting a value of result into HTML element
}

function chrupki (manufacturer, name, flavour, year_of_production) { //defining a function and naming it(also our object constructor)
    this.chrupki_manufacturer = manufacturer; //I dont know how to exactly name whats happening here
    this.chrupki_name = name;
    this.chrupki_flavour = flavour;
    this.chrupki_year_of_production = year_of_production;
}
var uno = new chrupki("Star Foods", "Maces", "Ketchup", "2015"); //creating new objects
var dos = new chrupki("Lays", "Strong", " Chilli", "2017"); //creating new objects
var tres = new chrupki("Lorenz", "Curly", "Peanuts", "2020"); //creating new objects
  
function myChrupeczki() { //defining and naming a function
    document.getElementById("New_and_This").innerHTML = "My favourite crisps are " // putting a value of result into HTML element
    + tres.chrupki_name + " with " + tres.chrupki_flavour + " flavour, made by "
    + tres.chrupki_manufacturer + ".";
}

function nest_function() { //defining and naming a function
    var number, papaj; //defining and naming variables
    number = document.getElementById("number").value; //using input from browser to give variable a value
    function add() { //defining and naming a function
        papaj = Number(number) + Number(2137);} //performing addition
        add(); //reading a function
document.getElementById("nested_function").innerHTML = papaj; //putting a value of result into HTML element
}