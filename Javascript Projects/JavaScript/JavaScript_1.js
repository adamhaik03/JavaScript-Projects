function artistFunction() {
    var  artistOutput;
    var artists = document.getElementById("artistInput").value;
    var artistString = " is an amazing artist!";
    switch(artists) {
        case "Drake":
            artistOutput = "Drake" + artistString;
        break;
        case "Paul Kalkbrenner":
            artistOutput = "Paul Kalkbrenner" + artistString;
        break;
        case "Anyma":
            artistOutput = "Anyma" + artistString;
        break;
        case "Rufus du Sol":
            artistOutput = "Rufus du Sol" + artistString;
        break;
        case "Reinier Zonneveld":
            artistOutput = "Reinier Zonneveld" + artistString;
        break;
        default:
            artistOutput = "Please enter a name exactly as written above."
    }
    document.getElementById("output").innerHTML = artistOutput;
}


function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!"
}
