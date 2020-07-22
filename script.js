//document.getElementById('inputText1').style.visibility="hidden";
//document.getElementById('inputText1').style.visibility="visible";
//sound----------------------------------------





var soundStat="on";
        /*function Splay(){


var allcookies = document.cookie;
cookiearray = allcookies.split(';');
for(var i=0; i<cookiearray.length; i++){
                    var take = cookiearray[i].split('=')[0];
                    if(take.match("SS")){
                        soundStat=cookiearray[i].split('=')[1];
                    }
}
        }*/
            if (soundStat=="on") {
                var bgMusic=new Audio();
                bgMusic.src="menu.mp3";
                var gMusic=new Audio();
                gMusic.src="game.mp3";
                var menuMove=new Audio();
                menuMove.src="turn.mp3";
                var rpsClick=new Audio();
                rpsClick.src="Decision1.wav";
                var menuClick=new Audio();
                menuClick.src="Cursor1.wav";
                var rpsMove=new Audio();
                rpsMove.src="Jump1.wav";  
                
                
            }
            
            function Sounds () {
                var image = document.getElementById('Sound');
                if (image.src.match("soff")) {
                    image.src = "son.PNG";
                    bgMusic.play();
                    menuMove.src="turn.mp3";
                    menuClick.src="click.wav";
                    soundStat="on";
                    document.cookie="SS" + soundStat;

                } else {
                    image.src = "soff.PNG";
                    bgMusic.pause();
                    menuMove.src="";
                    menuClick.src="";
                    soundStat="off";
                    document.cookie="SS" + soundStat;
                }
            }
///----------------Game-------------------


var i=0,j=0;
function Fun (inputType) {
	
    var computerChoice = Math.floor((Math.random() * 3) + 1); 
    
    //set computer choice        
    if (computerChoice == 1) {
        computerChoice = "rock";
    } else if(computerChoice == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    //var humanChoice=document.getElementById('inputText').value;
    var humanChoice=inputType;
    /*var humanChoice=document.getElementById('inputText1').value;
    var humanChoice=document.getElementById('inputText2').value;
    var humanChoice=document.getElementById('inputText3').value;*/
    /*if(document.getElementById('inputText1').value.match("rock")){
        var humanChoice="rock";

    }else if(document.getElementById('inputText2').value.match("paper")){
        var humanChoice="paper";

    }else if(document.getElementById('inputText3').value.match("scissors"){

         var humanChoice="scissors";
    }*/


    //input check
    /*if(humanChoice.match('rock') ||humanChoice.match('paper') || humanChoice.match('scissors')){
        compare(computerChoice,humanChoice);
    }else{
        document.getElementById('viewResult').innerHTML="Invalid Input";

    }
    var choice1=computerChoice;
    var choice2=humanChoice;*/
    compare(computerChoice,humanChoice);
	
    //check result;
    function compare (choice1,choice2) {
                
        if(choice1.match(choice2)) {
            if(choice1.match("rock")){
                document.getElementById('ComputerBox').src="rock.PNG";
                document.getElementById('HumanBox').src= "rock.PNG";
                document.getElementById('com').innerHTML="Score: "+i;
                document.getElementById('hu').innerHTML="Score: "+j;
                document.getElementById('Result').innerHTML= "Same Input (Draw)";

            }else if(choice1.match("paper")){
                document.getElementById('ComputerBox').src="paper.PNG";
                document.getElementById('HumanBox').src= "paper.PNG";
                document.getElementById('com').innerHTML="Score: "+i;
                document.getElementById('hu').innerHTML="Score: "+j;
                document.getElementById('Result').innerHTML= "Same Input (Draw)";
            }
            else if(choice1.match("scissors")){
                document.getElementById('ComputerBox').src="scissors.PNG";
                document.getElementById('HumanBox').src= "scissors.PNG";
                document.getElementById('com').innerHTML="Score: "+i;
                document.getElementById('hu').innerHTML="Score: "+j;
                document.getElementById('Result').innerHTML= "Same Input (Draw)";

            }
        }
                
        if(choice1.match("rock")) {
            if(choice2.match("scissors")) {
                i++;
                document.getElementById('ComputerBox').src="rock.PNG";
                document.getElementById('HumanBox').src= "scissors.PNG";
                document.getElementById('com').innerHTML="Score: "+i;
                document.getElementById('hu').innerHTML="Score: "+j;
                document.getElementById('Result').innerHTML= "Computer win (rock)";
                
           	} else {
                if(choice2.match("paper")) {
                    j++;
	                document.getElementById('ComputerBox').src="rock.PNG";
                    document.getElementById('HumanBox').src= "paper.PNG";
                    document.getElementById('com').innerHTML="Score: "+i;
                    document.getElementById('hu').innerHTML="Score: "+j;
	                document.getElementById('Result').innerHTML= "Human win (paper)";
                    
                }
            }
        }
                
        if(choice1.match("paper")) {
	        if(choice2.match("rock")) {
                i++;
	            document.getElementById('ComputerBox').src="paper.PNG";
                document.getElementById('HumanBox').src= "rock.PNG";
                document.getElementById('com').innerHTML="Score: "+i;
                document.getElementById('hu').innerHTML="Score: "+j;
	            document.getElementById('Result').innerHTML= "Computer win (paper)";
                
	        } else {
	            if(choice2.match("scissors")) {
                    j++;
	                document.getElementById('ComputerBox').src="paper.PNG";
                    document.getElementById('HumanBox').src= "scissors.PNG";
                    document.getElementById('com').innerHTML="Score: "+i;
                    document.getElementById('hu').innerHTML="Score: "+j;
	                document.getElementById('Result').innerHTML= "Human win (scissors)";
                    
	            }
	        }
	    }
	                
	    if(choice1.match("scissors")) {
	        if(choice2.match("rock")) {
                j++;
	            document.getElementById('ComputerBox').src="scissors.PNG";
                document.getElementById('HumanBox').src= "rock.PNG";
                document.getElementById('com').innerHTML="Score: "+i;
                document.getElementById('hu').innerHTML="Score: "+j;
	            document.getElementById('Result').innerHTML="Human win (rock)";
                
	        } else {
	            if(choice2.match("paper")) {
                    i++;
	                document.getElementById('ComputerBox').src="scissors.PNG";
                    document.getElementById('HumanBox').src= "paper.PNG";
                    document.getElementById('com').innerHTML="Score: "+i;
                    document.getElementById('hu').innerHTML="Score: "+j;
	                document.getElementById('Result').innerHTML= "Computer win (scissors)";
                    
	            }
	        }
	    }
            	
     }
}