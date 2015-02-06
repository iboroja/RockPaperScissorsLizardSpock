        var userChoice = prompt("Choose rock, paper, scissors, lizard or spock?");
            if(userChoice.toUpperCase() === "ROCK"){
                document.write("<h1>You chose: " + userChoice + "</h1>");
            }else if(userChoice.toUpperCase() === "PAPER"){
                document.write("<h1>You chose: " + userChoice + "</h1>");
            }else if(userChoice.toUpperCase() === "SCISSORS"){
                document.write("<h1>You chose: " + userChoice + "</h1>");
            }else if(userChoice.toUpperCase() === "LIZARD"){
                document.write("<h1>You chose: " + userChoice + "</h1>");
            }else if(userChoice.toUpperCase() === "SPOCK"){
                document.write("<h1>You chose: " + userChoice + "</h1>");
            }else{
                alert("To play this game you need to type one of this five words. Rock, paper, scissors, lizard or spock! Click play again button");
                throw new Error("Something went badly wrong!");
            }

            var computerChoice = Math.floor(Math.random() * 5)+1;
            if (computerChoice == 1) {
                computerChoice = "Rock";
            } else if(computerChoice == 2) {
                computerChoice = "Paper";
            } else if(computerChoice == 3) {
                computerChoice = "Scissors";
            } else if(computerChoice ==4) {
                computerChoice = "Lizard";
            } else {
                computerChoice = "Spock";
            } 
        document.write("<h1>Computer chose: " + computerChoice + "<h1>");

        var compare = function(choice1, choice2){
            if (choice1 === choice2.toUpperCase()){
                return "The result is a tie!";
            }else if(choice1 === "ROCK"){
                if(choice2 ==="Scissors"){
                    return "(and as it always has) Rock crushes scissors ";
                }else if(choice2 ==="spock"){
                    return "Spock vaporizes Rock";
                }else if(choice2 ==="Lizard"){
                    return "Rock crushes Lizard";
                }else{
                    return "Paper covers Rock";
                }
            }else if(choice1 === "PAPER"){
                if(choice2 === "Rock"){
                    return "Paper covers Rock ";
                }else if(choice2 ==="Spock"){
                    return "Paper disproves Spock";
                }else if(choice2 ==="Lizard"){
                    return "Lizard eats Paper";
                }else{
                    return "Scissors cuts Paper";
                }
            }else if(choice1 === "SCISSORS"){
                if(choice2 === "Paper"){
                    return "Scissors cuts Paper";
                }else if(choice2 ==="Spock"){
                    return "Spock smashes Scissors";
                }else if(choice2 === "Lizard"){
                    return "Scissors decapitates Lizard";
                }else{
                    return "(and as it always has) Rock crushes scissors ";
                }
            }else if(choice1 === "SPOCK"){
                if(choice2 === "Paper"){
                    return "Paper disproves Spock";
                }else if(choice2 ==="Lizard"){
                    return "Lizard poisons Spock";
                }else if(choice2 === "Scissors"){
                    return "Spock smashes Scissors";
                }else{
                    return "Spock vaporizes Rock";
                }  
            }else if(choice1 === "LIZARD"){
                if(choice2 === "Paper"){
                    return "Lizard eats Paper ";
                }else if(choice2 ==="Spock"){
                    return "Lizard poisons Spock";
                }else if(choice2 === "Scissors"){
                    return "Scissors decapitates Lizard ";
                }else{
                    return "Rock crushes Lizard ";
                }      
            }
        }
        document.write(compare(userChoice.toUpperCase(), computerChoice) );
