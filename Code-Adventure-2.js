/** Created by session1 on 9/30/15. */

console.log("Night 1");
var userChoice1 = prompt("What do you do? Run left or run right?");
//Choose left or right.
var computerChoice = Math.random();
//Decides what pops up later.
var enemies = ["Bonnie", "Chica"];
//Will be used later.
if(computerChoice < .76){
    computerChoice = "You hear no breathing.";
}
else if(computerChoice <= .93) {
    computerChoice = "Was that breathing or a noise outside?";
}
else {
    computerChoice = "That was breathing.";
}
        if (userChoice1 === "left") {
            console.log(computerChoice);
            var userChoice2 = prompt("Close door or use flashlight?");
            //Choose either door or flashlight. Choose carefully, because if you choose wrong you may die.
            switch (userChoice2) {
                case 'door':
                    if (computerChoice === "You hear no breathing.") {
                        console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
                    }
                    else if (computerChoice === "Was that breathing or a noise outside?") {
                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                    }
                    else if (computerChoice === "That was breathing.") {
                        console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
                    }
                    break;
                case 'flashlight':
                    if (computerChoice === "You hear no breathing.") {
                        console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
                    }
                    else if(computerChoice === "Was that breathing or a noise outside?") {
                        console.log("You flash your light and see that nightmare halfway down your hallway. It retreats around the corner back down the hall. It looked like " + enemies[0] + ". You run back to your bed.");
                    }
                    else if (computerChoice === "That was breathing.") {
                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                    }
                    break;

            }
        }
    if (userChoice1 === "right") {
        console.log(computerChoice);
        var userChoice3 = prompt("Close door or use flashlight?");
        //Once again. Choose carefully.
        switch(userChoice3) {
            case 'door':
                if (computerChoice === "You hear no breathing.") {
                    console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
                }
                else if (computerChoice === "Was that breathing or a noise outside?") {
                    console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                }
                else if (computerChoice === "That was breathing.") {
                    console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
                }
                break;
            case 'flashlight':
                if (computerChoice === "You hear no breathing.") {
                    console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
                }
                else if(computerChoice === "Was that breathing or a noise outside?") {
                    console.log("You flash your light and see that nightmare halfway down your hallway. It retreats around the corner back down the hall. It looked like " + enemies[1] + ". You run back to your bed.");
                }
                else if (computerChoice === "That was breathing.") {
                    console.log("You flash your light and are killed by " + enemies[1] + ".");
                }
                break;

        }
    }
var userChoice4 = prompt("What do you do? Run left or run right?");
//Choose left or right.
var computerChoice2 = Math.random();
//Decides what pops up later.
if(computerChoice < .68){
    computerChoice2 = "You hear no breathing.";
}
else if(computerChoice <= .87) {
    computerChoice2 = "Was that breathing or a noise outside?";
}
else {
    computerChoice2 = "That was breathing.";
}
if (userChoice4 === "left") {
    console.log(computerChoice);
    var userChoice5 = prompt("Close door or use flashlight?");
    //Choose either door or flashlight. Choose carefully, because if you choose wrong you may die.
    switch (userChoice5) {
        case 'door':
            if (computerChoice2 === "You hear no breathing.") {
                console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
            }
            else if (computerChoice2 === "Was that breathing or a noise outside?") {
                console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
            }
            else if (computerChoice2 === "That was breathing.") {
                console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
            }
            break;
        case 'flashlight':
            if (computerChoice2 === "You hear no breathing.") {
                console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
            }
            else if(computerChoice2 === "Was that breathing or a noise outside?") {
                console.log("You flash your light and see that nightmare halfway down your hallway. It retreats around the corner back down the hall. It looked like " + enemies[0] + ". You run back to your bed.");
            }
            else if (computerChoice2 === "That was breathing.") {
                console.log("You flash your light and are killed by " + enemies[0] + ".");
            }
            break;

    }
}
if (userChoice4 === "right") {
    console.log(computerChoice2);
    var userChoice6 = prompt("Close door or use flashlight?");
    //Once again. Choose carefully.
    switch(userChoice6) {
        case 'door':
            if (computerChoice2 === "You hear no breathing.") {
                console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
            }
            else if (computerChoice2 === "Was that breathing or a noise outside?") {
                console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
            }
            else if (computerChoice2 === "That was breathing.") {
                console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
            }
            break;
        case 'flashlight':
            if (computerChoice2 === "You hear no breathing.") {
                console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
            }
            else if(computerChoice2 === "Was that breathing or a noise outside?") {
                console.log("You flash your light and see that nightmare halfway down your hallway. It retreats around the corner back down the hall. It looked like " + enemies[1] + ". You run back to your bed.");
            }
            else if (computerChoice2 === "That was breathing.") {
                console.log("You flash your light and are killed by " + enemies[1] + ".");
            }
            break;

    }
}

var userChoice7 = prompt("What do you do? Run left or run right?");
//Choose left or right.
var computerChoice3 = Math.random();
//Decides what pops up later.
if(computerChoice3 < .65){
    computerChoice3 = "You hear no breathing.";
}
else if(computerChoice3 <= .78) {
    computerChoice3 = "Was that breathing or a noise outside?";
}
else {
    computerChoice3 = "That was breathing.";
}
if (userChoice7 === "left") {
    console.log(computerChoice3);
    var userChoice8 = prompt("Close door or use flashlight?");
    //Choose either door or flashlight. Choose carefully, because if you choose wrong you may die.
    switch (userChoice8) {
        case 'door':
            if (computerChoice3 === "You hear no breathing.") {
                console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
            }
            else if (computerChoice3 === "Was that breathing or a noise outside?") {
                console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
            }
            else if (computerChoice3 === "That was breathing.") {
                console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
            }
            break;
        case 'flashlight':
            if (computerChoice3 === "You hear no breathing.") {
                console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
            }
            else if(computerChoice3 === "Was that breathing or a noise outside?") {
                console.log("You flash your light and are killed by " + enemies[0] + ".");
            }
            else if (computerChoice3 === "That was breathing.") {
                console.log("You flash your light and are killed by " + enemies[0] + ".");
            }
            break;

    }
}
if (userChoice7 === "right") {
    console.log(computerChoice3);
    var userChoice9 = prompt("Close door or use flashlight?");
    //Once again. Choose carefully.
    switch(userChoice9) {
        case 'door':
            if (computerChoice3 === "You hear no breathing.") {
                console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
            }
            else if (computerChoice3 === "Was that breathing or a noise outside?") {
                console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
            }
            else if (computerChoice3 === "That was breathing.") {
                console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
            }
            break;
        case 'flashlight':
            if (computerChoice3 === "You hear no breathing.") {
                console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
            }
            else if(computerChoice3 === "Was that breathing or a noise outside?") {
                console.log("You flash your light and are killed by " + enemies[1] + ".");
            }
            else if (computerChoice3 === "That was breathing.") {
                console.log("You flash your light and are killed by " + enemies[1] + ".");
            }
            break;

    }
}

var userChoice10 = prompt("What do you do? Run left or run right?");
//Choose left or right.
var computerChoice4 = Math.random();
//Decides what pops up later.
if(computerChoice4 < .59){
    computerChoice4 = "You hear no breathing.";
}
else if(computerChoice4 <= .64) {
    computerChoice4 = "Was that breathing or a noise outside?";
}
else {
    computerChoice4 = "That was breathing.";
}
if (userChoice10 === "left") {
    console.log(computerChoice3);
    var userChoice11 = prompt("Close door or use flashlight?");
    //Choose either door or flashlight. Choose carefully, because if you choose wrong you may die.
    switch (userChoice11) {
        case 'door':
            if (computerChoice4 === "You hear no breathing.") {
                console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
            }
            else if (computerChoice4 === "Was that breathing or a noise outside?") {
                console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
            }
            else if (computerChoice4 === "That was breathing.") {
                console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
            }
            break;
        case 'flashlight':
            if (computerChoice4 === "You hear no breathing.") {
                console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
            }
            else if(computerChoice4 === "Was that breathing or a noise outside?") {
                console.log("You flash your light and are killed by " + enemies[0] + ".");
            }
            else if (computerChoice4 === "That was breathing.") {
                console.log("You flash your light and are killed by " + enemies[0] + ".");
            }
            break;

    }
}
if (userChoice10 === "right") {
    console.log(computerChoice4);
    var userChoice12 = prompt("Close door or use flashlight?");
    //Once again. Choose carefully.
    switch(userChoice12) {
        case 'door':
            if (computerChoice4 === "You hear no breathing.") {
                console.log("You play it safe... But did it move closer to the door? You run back to your bed.");
            }
            else if (computerChoice4 === "Was that breathing or a noise outside?") {
                console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
            }
            else if (computerChoice4 === "That was breathing.") {
                console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");
            }
            break;
        case 'flashlight':
            if (computerChoice4 === "You hear no breathing.") {
                console.log("You flash your light and see a glimpse of something nightmarish.. Luckily it fled around the corner. You run back to your bed.");
            }
            else if(computerChoice4 === "Was that breathing or a noise outside?") {
                console.log("You flash your light and are killed by " + enemies[1] + ".");
            }
            else if (computerChoice4 === "That was breathing.") {
                console.log("You flash your light and are killed by " + enemies[1] + ".");
            }
            break;

    }
}