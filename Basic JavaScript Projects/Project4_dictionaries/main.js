function Dict() { //Naming and defining a function
    var Car = { //Defining a variable
        speed : "fast", //creating a KVP    
        color : "red", //creating a KVP
        make : "ferrari", //creating a KVP
        horse_power : "2137hp", //creating a KVP
    };
    delete Car.horse_power; //using operator wrriten as word
    document.getElementById("Dictionary").innerHTML = Car.horse_power; //Putting a value of result into HTML element
}