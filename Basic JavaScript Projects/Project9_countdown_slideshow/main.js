function countdown() { //creating a function and naming it
    var seconds = document.getElementById("seconds").value; //naming a variable and using input form the browser to give a value

    function tick() { //creating a function and naming it
        seconds = seconds - 1; //subtracting 1 from the value
        timer.innerHTML = seconds;//putting a value of a result into HTML element
        setTimeout(tick, 1000); //running a function every second
        if(seconds == -1) {//creating a conditional statement
            alert("Time's up!")//creating an alert which appears if conditional statement is true
        }
    }
    tick();//calling a function
}


