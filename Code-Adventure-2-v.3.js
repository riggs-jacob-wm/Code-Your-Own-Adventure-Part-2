/** Created by session1 on 9/30/15. */

console.log("Here we go again.. Good luck.");
var userChoice1 = prompt("What do you do? Run left or right?");
//Choose left or right.
var computerChoice = Math.random();
//Decides what pops up later.
var enemies = ["Bonnie", "Chica", "Nightmare", "Fredbear"];
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


        if(userChoice1 = "left") {
            console.log(computerChoice);
            var userChoice2 = prompt("Close door or use flashlight?");
            //Choose either door or flashlight. Choose carefully because if you choose wrong it will cause your death.
                switch(userChoice2) {
                    case 'door':
                        if (computerChoice === "You hear no breathing.") {
                            console.log("You play it safe... But did it move closer to the door? You run back to your bed.");

                            var userChoice3 = prompt("Run left or right?");

                            var computerChoice2 = Math.random();

                            if (computerChoice2 < .40) {
                                computerChoice2 = "You hear no breathing.";
                            }

                            else if (computerChoice2 <= .62) {
                                computerChoice2 = "Was that breathing or a noise outside?";
                            }

                            else {
                                computerChoice2 = "That was breathing.";
                            }
                            if (userChoice3 = "left") {
                                console.log(computerChoice2);
                                var userChoice4 = prompt("Door or flashlight?");
                                switch (userChoice4) {
                                    case 'door':
                                        if (computerChoice2 === "You hear no breathing.") {
                                            console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[0] + " runs into your room and kills you.");

                                        }
                                        else if (computerChoice2 === "Was that breathing or a noise outside?") {
                                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                            for (var i = 1; i < 7; i++) {
                                                console.log(i);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else {
                                            console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                            for (var a = 1; a < 7; a++) {
                                                console.log(a);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        break;
                                    case 'flashlight':
                                        if (computerChoice2 === "You hear no breathing.") {
                                            console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                            for (var q = 1; q < 7; q++) {
                                                console.log(q);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else if (computerChoice2 === "Was that breathing or a noise outside?") {
                                            console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again, also hearing a the same voice whisper 'Nightmare', and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[2] + ".");
                                        }
                                        else {
                                            console.log("You flash your light and are killed by " + enemies[0] + ".");
                                        }
                                        break;
                                }

                            }


                            else {
                                var computerChoice3 = Math.random();

                                if (computerChoice3 < .40) {
                                    computerChoice3 = "You hear no breathing.";
                                }

                                else if (computerChoice3 <= .64) {
                                    computerChoice3 = "Was that breathing or a noise outside?";
                                }

                                else {
                                    computerChoice3 = "That was breathing.";
                                }
                                console.log(computerChoice3);
                                var userChoice5 = prompt("Door or flashlight?");
                                switch (userChoice5) {
                                    case 'door':
                                        if (computerChoice2 === "You hear no breathing.") {
                                            console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[1] + " runs into your room and kills you.");

                                        }
                                        else if (computerChoice2 === "Was that breathing or a noise outside?") {
                                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                            for (var w = 1; w < 7; w++) {
                                                console.log(w);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else {
                                            console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                            for (var e = 1; e < 7; e++) {
                                                console.log(e);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        break;
                                    case 'flashlight':
                                        if (computerChoice2 === "You hear no breathing.") {
                                            console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                            for (var r = 1; r < 7; r++) {
                                                console.log(r);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else if (computerChoice2 === "Was that breathing or a noise outside?") {
                                            console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[3] + ".");
                                        }
                                        else {
                                            console.log("You flash your light and are killed by " + enemies[0] + ".");
                                        }
                                        break;
                                }

                            }


                        }
                        else if(computerChoice === "Was that breathing or a noise outside?") {
                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");

                            var userChoice6 = prompt("Run left or right?");

                            var computerChoice4 = Math.random();

                            if (computerChoice4 < .26) {
                                computerChoice4 = "You hear no breathing.";
                            }

                            else if (computerChoice4 <= .57) {
                                computerChoice4 = "Was that breathing or a noise outside?";
                            }

                            else {
                                computerChoice4 = "That was breathing.";
                            }
                            if (userChoice6 = "left") {
                                console.log(computerChoice4);
                                var userChoice7 = prompt("Door or flashlight?");
                                switch (userChoice7) {
                                    case 'door':
                                        if (computerChoice4 === "You hear no breathing.") {
                                            console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[0] + " runs into your room and kills you.");

                                        }
                                        else if (computerChoice4 === "Was that breathing or a noise outside?") {
                                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                            for (var t = 1; t < 7; t++) {
                                                console.log(t);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else {
                                            console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                            for (var y = 1; y < 7; y++) {
                                                console.log(y);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        break;
                                    case 'flashlight':
                                        if (computerChoice4 === "You hear no breathing.") {
                                            console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                            for (var u = 1; u < 7; u++) {
                                                console.log(u);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else if (computerChoice4 === "Was that breathing or a noise outside?") {
                                            console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again, also hearing a the same voice whisper 'Nightmare', and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[2] + ".");
                                        }
                                        else {
                                            console.log("You flash your light and are killed by " + enemies[0] + ".");
                                        }
                                        break;
                                }

                            }


                            else {
                                var computerChoice5 = Math.random();

                                if (computerChoice5 < .36) {
                                    computerChoice5 = "You hear no breathing.";
                                }

                                else if (computerChoice5 <= .60) {
                                    computerChoice5 = "Was that breathing or a noise outside?";
                                }

                                else {
                                    computerChoice5 = "That was breathing.";
                                }
                                console.log(computerChoice5);
                                var userChoice8 = prompt("Door or flashlight?");
                                switch (userChoice8) {
                                    case 'door':
                                        if (computerChoice5 === "You hear no breathing.") {
                                            console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[1] + " runs into your room and kills you.");

                                        }
                                        else if (computerChoice5 === "Was that breathing or a noise outside?") {
                                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                            for (var o = 1; o < 7; o++) {
                                                console.log(o);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else {
                                            console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                            for (var p = 1; p < 7; p++) {
                                                console.log(p);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        break;
                                    case 'flashlight':
                                        if (computerChoice5 === "You hear no breathing.") {
                                            console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                            for (var s = 1; s < 7; s++) {
                                                console.log(s);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else if (computerChoice5 === "Was that breathing or a noise outside?") {
                                            console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[3] + ".");
                                        }
                                        else {
                                            console.log("You flash your light and are killed by " + enemies[0] + ".");
                                        }
                                        break;
                                }

                            }
                        }




                        else {
                            console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");

                            var userChoice9 = prompt("Run left or right?");

                            var computerChoice6 = Math.random();

                            if (computerChoice6 < .70) {
                                computerChoice6 = "You hear no breathing.";
                            }

                            else if (computerChoice6 <= .79) {
                                computerChoice6 = "Was that breathing or a noise outside?";
                            }

                            else {
                                computerChoice6 = "That was breathing.";
                            }
                            if (userChoice9 = "left") {
                                console.log(computerChoice6);
                                var userChoice10 = prompt("Door or flashlight?");
                                switch (userChoice10) {
                                    case 'door':
                                        if (computerChoice6 === "You hear no breathing.") {
                                            console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[0] + " runs into your room and kills you.");

                                        }
                                        else if (computerChoice6 === "Was that breathing or a noise outside?") {
                                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                            for (var d = 1; d < 7; d++) {
                                                console.log(d);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else {
                                            console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                            for (var f = 1; f < 7; f++) {
                                                console.log(f);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        break;
                                    case 'flashlight':
                                        if (computerChoice6 === "You hear no breathing.") {
                                            console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                            for (var g = 1; g < 7; g++) {
                                                console.log(g);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else if (computerChoice6 === "Was that breathing or a noise outside?") {
                                            console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again, also hearing a the same voice whisper 'Nightmare', and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[2] + ".");
                                        }
                                        else {
                                            console.log("You flash your light and are killed by " + enemies[0] + ".");
                                        }
                                        break;
                                }

                            }


                            else {
                                var computerChoice7 = Math.random();

                                if (computerChoice7 < .71) {
                                    computerChoice7 = "You hear no breathing.";
                                }

                                else if (computerChoice7 <= .79) {
                                    computerChoice7 = "Was that breathing or a noise outside?";
                                }

                                else {
                                    computerChoice7 = "That was breathing.";
                                }
                                console.log(computerChoice7);
                                var userChoice11 = prompt("Door or flashlight?");
                                switch (userChoice11) {
                                    case 'door':
                                        if (computerChoice7 === "You hear no breathing.") {
                                            console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[1] + " runs into your room and kills you.");

                                        }
                                        else if (computerChoice7 === "Was that breathing or a noise outside?") {
                                            console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                            for (var h = 1; h < 7; h++) {
                                                console.log(h);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else {
                                            console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                            for (var j = 1; j < 7; j++) {
                                                console.log(j);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        break;
                                    case 'flashlight':
                                        if (computerChoice7 === "You hear no breathing.") {
                                            console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                            for (var k = 1; k < 7; k++) {
                                                console.log(k);
                                            }
                                            console.log("It's 6 AM... You made it.");
                                        }
                                        else if (computerChoice7 === "Was that breathing or a noise outside?") {
                                            console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[3] + ".");
                                        }
                                        else {
                                            console.log("You flash your light and are killed by " + enemies[0] + ".");
                                        }
                                        break;
                                }

                            }
                        }
                        break;
                }
        }
        else {
            console.log(computerChoice);

            var userChoice12 = prompt("Close door or use flashlight?");
//Choose either door or flashlight. Choose carefully because if you choose wrong it will cause your death.
            switch (userChoice12) {
                case 'door':
                    if (computerChoice === "You hear no breathing.") {
                        console.log("You play it safe... But did it move closer to the door? You run back to your bed.");

                        var userChoice13 = prompt("Run left or right?");

                        var computerChoice8 = Math.random();

                        if (computerChoice8 < .26) {
                            computerChoice8 = "You hear no breathing.";
                        }

                        else if (computerChoice8 <= .30) {
                            computerChoice8 = "Was that breathing or a noise outside?";
                        }

                        else {
                            computerChoice8 = "That was breathing.";
                        }
                        if (userChoice13 = "left") {
                            console.log(computerChoice8);
                            var userChoice14 = prompt("Door or flashlight?");
                            switch (userChoice14) {
                                case 'door':
                                    if (computerChoice8 === "You hear no breathing.") {
                                        console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[0] + " runs into your room and kills you.");

                                    }
                                    else if (computerChoice8 === "Was that breathing or a noise outside?") {
                                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                        for (var l = 1; l < 7; l++) {
                                            console.log(l);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else {
                                        console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                        for (var z = 1; z < 7; z++) {
                                            console.log(z);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    break;
                                case 'flashlight':
                                    if (computerChoice8 === "You hear no breathing.") {
                                        console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                        for (var x = 1; x < 7; x++) {
                                            console.log(x);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else if (computerChoice8 === "Was that breathing or a noise outside?") {
                                        console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again, also hearing a the same voice whisper 'Nightmare', and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[2] + ".");
                                    }
                                    else {
                                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                                    }
                                    break;
                            }

                        }


                        else {
                            var computerChoice9 = Math.random();

                            if (computerChoice9 < .47) {
                                computerChoice9 = "You hear no breathing.";
                            }

                            else if (computerChoice9 <= .56) {
                                computerChoice9 = "Was that breathing or a noise outside?";
                            }

                            else {
                                computerChoice9 = "That was breathing.";
                            }
                            console.log(computerChoice9);
                            var userChoice15 = prompt("Door or flashlight?");
                            switch (userChoice15) {
                                case 'door':
                                    if (computerChoice9 === "You hear no breathing.") {
                                        console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[1] + " runs into your room and kills you.");

                                    }
                                    else if (computerChoice9 === "Was that breathing or a noise outside?") {
                                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                        for (var c = 1; c < 7; c++) {
                                            console.log(c);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else {
                                        console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                        for (var v = 1; v < 7; v++) {
                                            console.log(v);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    break;
                                case 'flashlight':
                                    if (computerChoice9 === "You hear no breathing.") {
                                        console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                        for (var b = 1; b < 7; b++) {
                                            console.log(b);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else if (computerChoice9 === "Was that breathing or a noise outside?") {
                                        console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[3] + ".");
                                    }
                                    else {
                                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                                    }
                                    break;
                            }

                        }


                    }
                    else if (computerChoice === "Was that breathing or a noise outside?") {
                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");

                        var userChoice16 = prompt("Run left or right?");

                        var computerChoice10 = Math.random();

                        if (computerChoice10 < .43) {
                            computerChoice410 = "You hear no breathing.";
                        }

                        else if (computerChoice10 <= .52) {
                            computerChoice10 = "Was that breathing or a noise outside?";
                        }

                        else {
                            computerChoice10 = "That was breathing.";
                        }
                        if (userChoice16 = "left") {
                            console.log(computerChoice10);
                            var userChoice17 = prompt("Door or flashlight?");
                            switch (userChoice17) {
                                case 'door':
                                    if (computerChoice10 === "You hear no breathing.") {
                                        console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[0] + " runs into your room and kills you.");

                                    }
                                    else if (computerChoice10 === "Was that breathing or a noise outside?") {
                                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                        for (var n = 1; n < 7; n++) {
                                            console.log(n);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else {
                                        console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                        for (var m = 1; m < 7; m++) {
                                            console.log(m);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    break;
                                case 'flashlight':
                                    if (computerChoice10 === "You hear no breathing.") {
                                        console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                        for (var ab = 1; ab < 7; ab++) {
                                            console.log(ab);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else if (computerChoice10 === "Was that breathing or a noise outside?") {
                                        console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again, also hearing a the same voice whisper 'Nightmare', and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[2] + ".");
                                    }
                                    else {
                                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                                    }
                                    break;
                            }

                        }


                        else {
                            var computerChoice11 = Math.random();

                            if (computerChoice11 < .57) {
                                computerChoice11 = "You hear no breathing.";
                            }

                            else if (computerChoice11 <= .60) {
                                computerChoice11 = "Was that breathing or a noise outside?";
                            }

                            else {
                                computerChoice11 = "That was breathing.";
                            }
                            console.log(computerChoice11);
                            var userChoice18 = prompt("Door or flashlight?");
                            switch (userChoice18) {
                                case 'door':
                                    if (computerChoice11 === "You hear no breathing.") {
                                        console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[1] + " runs into your room and kills you.");

                                    }
                                    else if (computerChoice11 === "Was that breathing or a noise outside?") {
                                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                        for (var ac = 1; ac < 7; ac++) {
                                            console.log(ac);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else {
                                        console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                        for (var as = 1; as < 7; as++) {
                                            console.log(as);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    break;
                                case 'flashlight':
                                    if (computerChoice11 === "You hear no breathing.") {
                                        console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                        for (var ad = 1; ad < 7; ad++) {
                                            console.log(ad);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else if (computerChoice11 === "Was that breathing or a noise outside?") {
                                        console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[3] + ".");
                                    }
                                    else {
                                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                                    }
                                    break;
                            }

                        }
                    }


                    else {
                        console.log("Good thing you shut the door. You have safely evaded that nightmare... For now. You run back to your bed.");

                        var userChoice19 = prompt("Run left or right?");

                        var computerChoice12 = Math.random();

                        if (computerChoice12 < .23) {
                            computerChoice12 = "You hear no breathing.";
                        }

                        else if (computerChoice12 <= .43) {
                            computerChoice12 = "Was that breathing or a noise outside?";
                        }

                        else {
                            computerChoice12 = "That was breathing.";
                        }
                        if (userChoice19 = "left") {
                            console.log(computerChoice12);
                            var userChoice20 = prompt("Door or flashlight?");
                            switch (userChoice20) {
                                case 'door':
                                    if (computerChoice12 === "You hear no breathing.") {
                                        console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[0] + " runs into your room and kills you.");

                                    }
                                    else if (computerChoice12 === "Was that breathing or a noise outside?") {
                                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                        for (var af = 1; af < 7; af++) {
                                            console.log(af);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else {
                                        console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                        for (var ag = 1; ag < 7; ag++) {
                                            console.log(ag);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    break;
                                case 'flashlight':
                                    if (computerChoice12 === "You hear no breathing.") {
                                        console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                        for (var ah = 1; ah < 7; ah++) {
                                            console.log(ah);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else if (computerChoice12 === "Was that breathing or a noise outside?") {
                                        console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again, also hearing a the same voice whisper 'Nightmare', and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[2] + ".");
                                    }
                                    else {
                                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                                    }
                                    break;
                            }

                        }


                        else {
                            var computerChoice13 = Math.random();

                            if (computerChoice13 < .39) {
                                computerChoice13 = "You hear no breathing.";
                            }

                            else if (computerChoice13 <= .87) {
                                computerChoice13 = "Was that breathing or a noise outside?";
                            }

                            else {
                                computerChoice13 = "That was breathing.";
                            }
                            console.log(computerChoice13);
                            var userChoice21 = prompt("Door or flashlight?");
                            switch (userChoice21) {
                                case 'door':
                                    if (computerChoice13 === "You hear no breathing.") {
                                        console.log("You play it safe... But did it move closer to the door? You run back to your bed. You look back to the door and see it open. " + enemies[1] + " runs into your room and kills you.");

                                    }
                                    else if (computerChoice13 === "Was that breathing or a noise outside?") {
                                        console.log("You were right not to take the risk... But was it for nothing? You run back to your bed.");
                                        for (var aj = 1; aj < 7; aj++) {
                                            console.log(aj);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else {
                                        console.log("Good thing you shut the door. You have safely evaded that nightmare.. For now. You run back to your bed.");
                                        for (var ak = 1; ak < 7; ak++) {
                                            console.log(ak);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    break;
                                case 'flashlight':
                                    if (computerChoice13 === "You hear no breathing.") {
                                        console.log("You see something nightmarish at the end of your hall. It retreats around the corner. You run back to your bed.");
                                        for (var al = 1; al < 7; al++) {
                                            console.log(al);
                                        }
                                        console.log("It's 6 AM... You made it.");
                                    }
                                    else if (computerChoice13 === "Was that breathing or a noise outside?") {
                                        console.log("You flash your light down the hall. You see something on it's way to your door. It laughs a low laugh and disappears. As you run back to your bed, you hear the laughing again and see the head of the thing sitting on your bed. The whole being forms. You are killed by " + enemies[3] + ".");
                                    }
                                    else {
                                        console.log("You flash your light and are killed by " + enemies[0] + ".");
                                    }
                                    break;
                            }

                        }
                    }
                    break;
            }
        }


