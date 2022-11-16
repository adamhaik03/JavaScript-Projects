function Time_function () { //Naming and defining a function
    var Time = new Date().getHours(); //naming and defining a variable, getting it to read time from your computer
    var Reply; //naming and defining a variable
    if ( Time < 12 == Time > 0) { //creating a condition statement
        Reply = "It is morning time!"; // naming and defining a variable
    }
    else if (Time > 12 == Time <= 18) { //creating a condition statement if above is false
        Reply = "It is afternoon time!";//naming and defining a variable
    }
    else {//creating a condition statement if above is false
        Reply = "It is evening time!";//naming and definign a variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//  putting a value of a result into HTML element
}


var X = 2136; // naming and defining a variable
function myPope() { //naming and definig a function
    document.write(X + 1 + " is my favourite number"); //putting a value of a result into HTML element
}
myPope();//reading a function

document.write("<br>");//starting another line

function mySlope() {//naming and creating a function
    var Y = 2137;//naming and creating a variable
    document.write(Y + 1 + " is not my favourite number.")//putting a value of a result into HTML element
}
function myHope() { //naming and creating a function
   console.log(Y + 2137 + " you will never read this.") //debugging a code in a console
}
mySlope();//reading a function
myHope();//reading a function