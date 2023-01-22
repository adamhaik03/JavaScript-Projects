function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is most popular song of " + character.innerHTML);
}