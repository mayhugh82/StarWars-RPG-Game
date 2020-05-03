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
    var renderOne = function(character, renderArea, charStatus) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);

        //If the character is an enemy or defender (the active opponent), add the appropriate class
        if (charStatus === "enemy") {
            $(charDiv).addClass("enemy");
        }
    }

    //This function handles the rendering of the characters based on which area they are to be rendered in.
    var renderCharacters = function(charObj, areaRender) {

        // "characters-section" is the div where all of our characters begin the game
        // If true, render all characters to the starting area.
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            // Loop through the characters object and cal the renderOne function on each character to render their card.
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender, "");
                }
            }

        }
        // "selected-character" is the div where our selected character appears.
        // If true, render the selected played character to this area.
        if (areaRender === "#selected-character") {
            renderOne(charObj, areaRender, "");
        }

        // "available-to-attack" is the div where our "inactive" opponents reside
        // If true, render the selected character to this area.
        if (areaRender === "#available-to-attack-section") {

            // Loop throught he combatants array and call the renderOne function to each character
            for(var i = 0; i < charObj.length; i++) {
                renderOne(charObj[i], areaRender, "");
            }

            //Creates an on click even for each enemy.
            $(document).on("click", ".enemy", function() {
                renderOne(charObj[i], areaRender, "enemy");
                var name = ($(this).attr("data-name"));

                // If there is no defender, the clicked enemy will become
                if($("#defender").children().lenght === 0) {
                    renderCharacters(name, "#defender");
                    $(this).hide();
                }
            });
        }
    }


    //Render all characters to the page when the game starts.
    renderCharacters(characters, "#characters-section");

    // On click even for selection our character.
    $(document).on("click", ".character", function() {
        //Saving the clicked character's name.
       var name = $(this).attr("data-name");
       
        //If a player character has not yet been chosen...
        if(!currSelectedCharacter) {
            // We populate currSelectedCharacter with the selected character's info.
            currSelectedCharacter = characters[name];
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