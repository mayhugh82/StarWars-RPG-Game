$(document).ready(function(){
    var characters = {
      Xena: {
        name: "Xena",
        health: 100,
        attack: 14,
        imageUrl: "..assets/images/Xena.jpg",
        enemyAttackBack: 15,
      },
      Gabrielle: {
        name: "Gabrielle",
        health: 120,
        attack: 8,
        imageUrl: "..assets/images/Gabrielle.jpg",
        enemyAttackBack: 15,
      },
      Callisto: {
        name: "Callisto",
        health: 150,
        attack: 8,
        imageUrl: "..assets/images/callisto.jpeg",
        enemyAttackBack: 15,
      },
      Ares: {
        name: "Ares",
        health: 180,
        attack: 7,
        imageUrl: "..assets/images/ares.jpg",
        enemyAttackBack: 15,
      }
    };
    console.log(characters);
    //This function will render a character card to the page.
    //The character rendered and the area they are rendered to.
    var renderOne = function(character, renderArea) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    }

    //This function handles the rendering of the characters based on which area they are to be rendered in.
    var renderCharacters = function(charObj, areaRender) {
        if (arearender === "#characters-section") {
            $(areadrender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }
            }
        }

    }
});