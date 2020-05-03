$(document).ready(function(){

    //GLOBAL VARIABLES
    //===========================================================================================================

    //Creating an object to hold our characters.
    var characters = {
      Xena: {
        name: "Xena",
        health: 100,
        attack: 14,
        imageUrl: "assets/images/Xena.jpg",
        enemyAttackBack: 15,
      },
      Gabrielle: {
        name: "Gabrielle",
        health: 120,
        attack: 8,
        imageUrl: "assets/images/Gabrielle.jpg",
        enemyAttackBack: 15,
      },
      Callisto: {
        name: "Callisto",
        health: 150,
        attack: 8,
        imageUrl: "assets/images/callisto.jpeg",
        enemyAttackBack: 15,
      },
      Ares: {
        name: "Ares",
        health: 180,
        attack: 7,
        imageUrl: "assets/images/ares.jpg",
        enemyAttackBack: 15,
      }
    };

    var currSelectedCharacter;
    var combatants = [];
    //FUNCTIONS
    //=========================================================================================================
    //This function will render a character card to the page.
    //The character rendered and the area they are rendered to.
    var renderOne = function(character, renderArea) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
    }

    //This function handles the rendering of the characters based on which area they are to be rendered in.
    var renderCharacters = function(charObj, areaRender) {
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }
            }
            
        }

    }


    //Render all characters to the page when the game starts.
    renderCharacters(characters, "#characters-section");

    // On click even for selection our character.
    $(document).on("click", ".character", function() {
        //Saving the clicked character's name.
       var name = $(this).attr("data-name");
       console.log(name);

        //If a player character has not yet been chosen...
        if(!currSelectedCharacter) {
            // We then loop through the remaining characters and push them to the combatants area.
            for (var key in characters) {
                if (key !== name) {
                combatants.push(characters[key]);
                }
            }
            console.log(combatants);
            //Hide the character select div.
            $("#characters-selection").hide();

            //Then reder our selected character and our combatants.
            renderCharacters(currSelectedCharacter, "#selected-character");
            renderCharacters(combatants, "#availabe-to-attack-section");
        }
    })
});