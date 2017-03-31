function onLoadHandler() {
    updateScreen("S");
}



function updateScreen(newState) {

    var currentState = newState;
    var text = "";
    var choice1Text = "";
    var choice1NextState = "";
    var choice2Text = "";
    var choice2TextState = "";

    switch (currentState) {

        case "S":
		/* This is the start of the story */
            text = "You find yourself tied to a chair in a creepy dark room. You assume that the door is locked. What do you do?";
            choice1Text = "Try to get free from the chair";
            choice1NextState = "S1";
            choice2Text = "Stay put";
            choice2NextState = "S.2";
			document.getElementById("progressBar").value = 0;
            break;


        case "S1":
		/*This is the "S" storyline */
            text = "The ropes are too thick and bound too tight for you to move.  But then you find a sharp object by the floor next to you.";
            choice1Text = "Try to get the object";
            choice1NextState = "S2";
            choice2Text = "Leave it alone";
            choice2NextState = "S3";
			document.getElementById("progressBar").value = 1;
            break;

        case "S.2":
		/*This is the "S." storyline */
            text = "You stay put and then hear footsteps coming down the hall toward you.  Do you call for help or stay quiet?";
            choice1Text = "Call for help";
            choice1NextState = "S.3";
            choice2Text = "Stay quiet";
            choice2NextState = "S.4";
			document.getElementById("progressBar").value = 1;                                                                                                                                                     
            break;

        case "S2":
            text = "When you try to get the object you decide to get it by tipping your chair over so that your hand was by the object you then cut yourself free.";
            choice1Text = "Do you break the window and jump out?";
            choice1NextState = "S4";
            choice2Text = "Or try opening the door and escape.";
            choice2NextState = "S5";
			document.getElementById("progressBar").value = 2;

            break;
			
		case "S3":
			text ="You leave the object alone so you are still tied to the chair, though you still made a lot of noise during your struggle.";
			 choice1Text = "Continue";
            choice1NextState = "S.11";
			document.getElementById("progressBar").value = 2;

			break;
			
		case "S4":
			text ="You broke the window with the sharp object and jumped out of the window, you landed into a bin full of trash bags.";
			choice1Text = "continue";
			choice1NextState = "S5";
			document.getElementById("progressBar").value = 3;

			break;
			
		case "S.3":
            text = "You call for help but the person yells, 'be quiet!'";
            choice1Text = "Still call for help";
            choice1NextState = "S.10";
            choice2Text = "Shut up";
            choice2NextState = "S.4";
			document.getElementById("progressBar").value = 2;

            break;
			
		case "S5":
			text = "Do you go left or right?";
			choice1Text = "Left";
			choice1NextState = "S6";
			choice2Text = "Right";
			choice2NextState = "S7";
			document.getElementById("progressBar").value = 4;

			break;
			
		case "S.4":
            text = "You stayed quiet and the foot steps walks away.";
            choice1Text = "continue";
            choice1NextState = "S.5";
			document.getElementById("progressBar").value = 2;

			break;
			 
		case "S6":
			text = "You accidentally run into a group of thugs and they kill you. Try again.";
			choice1Text = "continue";
			choice1NextState ="Dead";
			document.getElementById("progressBar").value = 4;

			break;
		
		case "S.5":
			text ="You then decide what to do next and see a silver glint on the floor";
			choice1Text = "Grab the object";
            choice1NextState = "S.6";
			document.getElementById("progressBar").value = 3;

			 break;
		
		case "S.6":
			text ="You are tring to break free from the ropes while using the sharp object to cut yourself free";
			choice1Text ="Keep on cutting";
			choice1NextState ="S.8";
			document.getElementById("progressBar").value = 4;

			break;
			
			case "S7":
			text = "You go to the police station and you report to the police.";
			choice1Text = "continue";
			choice1NextState = "S8";
			document.getElementById("progressBar").value = 4;
			break;
		
		case "S8":
			text = "They ask you, 'What happened to you?'";
			choice1Text = "You lie to the police.";
			choice1NextState = "S9";
			choice2Text = "You tell the truth to the police.";
			choice2NextState = "S.15";
			document.getElementById("progressBar").value = 5;
			break;
		
		case "S.8":
			text ="You keep on cutting, but you accidently slit across your wrist. You dropp the object and cry in fustration.";
			choice1Text ="Cry (you have no choice for this one)";
			choice1NextState ="S.10";
			document.getElementById("progressBar").value = 5;
			break;
		
		case "S9":
			text ="You said,'I was attacked by a dog.' The police officer asked, 'Do you know the breed of the dog?'";
			choice1Text ="continue";
			choice1NextState ="S10";
			document.getElementById("progressBar").value = 6;
			break;
			
		case "S.10":
			text ="There is suddenly a sound of keys jingling and the door knob turns.";
			choice1Text ="Stay back onto chair";
			choice1NextState ="S.11";
			document.getElementById("progressBar").value = 3;
			break;
			
		case "S10":
			text ="You tell the police that it was a huge German Shepherd. The police looks to each other and they look at you suspiciously.";
			choice1Text ="continue";
			choiceNextState ="S11";
			document.getElementById("progressBar").value = 7;
			break;
			
		case "S.11":
			text ="A person with a ski mask comes in and laughs";
			choice1Text ="continue";
			choice1NextState ="S.12";
			document.getElementById("progressBar").value = 3;
			break;
			
		case "S11":
			text ="They lead you to another dim-lit room and the handcuff you to the table.";
			choice1Text ="continue";
			choice1NextState ="S12";
			document.getElementById("progressBar").value = 8;
			break;
			
		case "S.12":
			text ="The kidnapper asks, 'Do you want to escape?'";
			choice1Text ="Yes";
			choice1NextState ="S.13";
			choice2Text ="No";
			choice2NextState ="S.14";
			document.getElementById("progressBar").value = 4;
			break;
		
		case "S12":
			text ="Then they start interrogating you and ask a lot a questions irrelevant to the case. Afterward, they quickly put a dark cloth bag oveer your head and tied your ankles, wrists and legs up.";
			choice1Text ="continue";
			choice1NextState ="S13";
			document.getElementById("progressBar").value = 9;
			break;
			
		case "S.13":
			text  ="You jump out of the window and escape and you live";
			choice1Text ="continue";
			choice1NextState ="S7";
			document.getElementById("progressBar").value = 5;
			break;
			
		case "S13":
			text ="You then hear engines starting, men shouting, a sound of gates openning. You then quickly fall asleep from the hum of the engine.";
			choice1Text ="continue";
			choice1NextState ="S14";
			document.getElementById("progressBar").value = 10;
			break;
		
		case "S.14":
			text = "The man said 'Ok....For being honest...I'll grant you a quick death for annoying me.' Then he shot you on the head.'";
			choice1Text ="continue";
			choice1NextState ="Dead";
			document.getElementById("progressBar").value = 5;
			break;
			
		case "S14":
			text ="When you wake up, you find yourself in a damp cell, with a crying little girl clutching a teddy bear. Do you start a conversation?";
			choice1Text ="Yes";
			choice1NextState ="S15";
			choice2Text ="No";
			choice2NextState ="S.18";
			document.getElementById("progressBar").value = 11;
			break;
		
		case "S.15":
			text = "You say, 'I got kidnapped and was brought into a room.'";
			choice1Text ="continue";
			choice1NextState ="S.16";
			document.getElementById("progressBar").value = 6;
			break;
			
		case "S15":
			text ="You start to discuss what happened to yourself but quickly get interupted by the cell guard.";
			choice1Text ="continue";
			choice1NextState ="S16";
			document.getElementById("progressBar").value = 12;
			break;
		
		case "S.16":
			text ="They then ask you,'do you want to call for an investigation or not?' then the officer walked away and start discussing with other officers.'";
			choice1Text ="Yes";
			choice1NextState ="S11";
			choice2Text ="No";
			choice2NextState ="S.17";
			document.getElementById("progressBar").value = 7;
			break;
		
		case "S16":
			text ="He then says that one of your family members is here to bring you home. Do you accept the offer?";
			choice1Text ="Yes";
			choice1NextState ="S17";
			choice2Text ="No";
			choice2NextState ="S17";
			document.getElementById("progressBar").value = 13;
			break;
		
		case "S.17":
			text ="The officer heard your answer, he returned and repied to you' I am sorry, but since you are the witness about this case, we are responsible for you now.'";
			choice1Text ="Continue";
			choice1NextState ="S11";
			document.getElementById("progressBar").value = 8;
			break;
		
		case "S17":
			text ="A woman who comes into the room claims that she's your mom and offers to take you somewhere safe.  You notice that she has warm brown eyes... the thing that you remember about Mom... You don't remember much and that last thing you recall is finding your yourself tied to a chair in a creepy dark room. Is she really who she claims she is? Can she be trusted?";
			choice1Text ="Yes";
			choice1NextState ="S18";
			choice2Text ="No";
			choice2NextState="S.19";
			document.getElementById("progressBar").value = 14;
			break;
			
		case "S.18":
			text ="You keep quiet when the guards walk to you.";
			choice1Text ="continue";
			choice1NextState ="S16";
			document.getElementById("progressBar").value = 12;
			break;
			
		case "S18":
			text ="She smiles and it seems to light up the room. You are released from prison.";
			choice1Text ="Continue";
			choice1NextState ="S19";
			document.getElementById("progressBar").value = 15;
			break;
			
		case "S.19":
			text ="She frowns and leaves the room, you are left here alone except the girl crying.";
			choice1Text ="continue";
			choice1NextState ="S.20";
			document.getElementById("progressBar").value = 15;
			break;
			
		case "S19":
			text ="She leads you into a clack car and takes you to a forest clearing. You	try to ask a question and she tells you to be quiet."
			choice1Text ="continue";
			choice1NextState ="S21";
			document.getElementById("progressBar").value = 16;
			break;
			
		case "S.20":
			text ="She comes back the next day and offers to take you somewhere safe.";
			choice1Text ="Yes";
			choice1NextState ="S20";
			choice2Text ="No";
			choice2NextState ="S.21";
			document.getElementById("progressBar").value = 16;
			break;
			
		case "S20":
			text ="You realize that she won't stop coming back, so you accept";
			choice1Text ="continue";
			choice1NextState ="S18";
			document.getElementById("progressBar").value = 17;
			break;
					
		case "S.21":
			text ="You are left here alone.";
			choice1Text ="Continue";
			choice1NextState ="S.20";
			document.getElementById("progressBar").value = 17;
			break;
			
		case "S21":
			text ="When she settles down, she sits and speaks, 'I know you have a lot of questions, but I can't tell you everything. What would you like to know?'";
			choice1Text ="Are you really my mom?! Sorry, I just happened to forget everything.";
			choice1NextState ="S22";
			choice2Text ="How did I get in the warehouse?";
			choice2NextState ="S.22";
			document.getElementById("progressBar").value = 17;
			break;
			
		case "S.22":
			text ="You were taken away by 'MANGOS' who is an organization who takes away children to help their cause, which is something I'm still trying to find out...";
			choice1Text ="continue to listen";
			choice1NextState ="End";
			document.getElementById("progressBar").value = 17;
			break;
			
		case "S22":
			text ="She replied, 'Of course I am you mom! Why would you doubt that?!' She stopped and thought for a while and continued 'But what happened to your dad is no concern.'.";
			choice1Text ="continue to listen";
			choice1NextState ="End";
			document.getElementById("progressBar").value = 18;
			break;
		
		case "S23":
			text ="Suddenly you hear rustling in the trees and then....";
			choice1Text ="continue";
			choice1NextState ="End";
			document.getElementById("progressBar").value = 19;
			break;
				
		case "Dead":
			text ="you died, restart?";
			choice1Text ="restart";
			choice1NextState = "S";
			document.getElementById("progressBar").value = 0;
            break;
		
		case "End":
			text ="Our story ends here for now. Thanks for playin'";
			choice1Text ="End";
			choice1NextState ="S";
			document.getElementById("progressBar").value = 19;
			break;

	
        default:
            text = "ERROR";
            break;
    }

    document.getElementById("story").innerHTML = text;

    if (choice1Text === "") {
        document.getElementById("choice1").style.visibility = "hidden";
    } else {
        document.getElementById("choice1").style.visibility = "visible";
        document.getElementById("choice1").value = choice1Text;
        document.getElementById("choice1").setAttribute("onClick", "updateScreen('" + choice1NextState + "');");
    }
    if (choice2Text === "") {
        document.getElementById("choice2").style.visibility = "hidden";
    } else {
        document.getElementById("choice2").style.visibility = "visible";
        document.getElementById("choice2").value = choice2Text;
        document.getElementById("choice2").setAttribute("onClick", "updateScreen('" + choice2NextState + "');");
    }
}



