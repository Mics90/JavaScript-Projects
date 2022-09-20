function displayType(character) {
    var animalType = character.getAttribute("data-animal-type");
    alert(character.innerHTML + " is in the " + animalType + " class.");
}
