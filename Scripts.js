function cardChange() {
 	var card = document.getElementById("cards");
 	var cardinput = document.getElementById("Card");
	switch (card.innerHTML) {
  	case "No Card":
  		card.style.backgroundColor = "#ede621";
  		card.innerHTML = "Yellow";
  		cardinput.selectedIndex = 1;
  	break;
  	case "Yellow":
  		card.style.backgroundColor = "#eb1e1e";
  		card.innerHTML = "Red";
  		cardinput.selectedIndex = 2;
  	break;
  	default:
  		card.style.backgroundColor = "#c0c0c0";
  		card.innerHTML = "No Card";
  		cardinput.selectedIndex = 0;
  	}
}
		
function manualInput() {
	var manual = document.getElementById("manual");
	if (manual.checked) {
		document.getElementById("scouterPosition").className = "preset";
		document.getElementById("Team").className = "preset";
		document.getElementById("Match").className = "preset";
	}
	else {
		document.getElementById("scouterPosition").className = "enable";
		document.getElementById("Team").className = "enable";
		document.getElementById("Match").className = "enable";
	}
}
		
function scoutingPosition() {
	var position = document.getElementById("scouterPosition").value;
	if (position=="R1" || position=="R2" || position=="R3") { document.getElementById("scouterPosition").style.backgroundColor = "#B00"; }
	else { document.getElementById("scouterPosition").style.backgroundColor = "#00B"; }
}

function countUp(button_class) {
	console.log(button_class);
	var buttonColor = button_class;
	switch (buttonColor) {
		case "auto lowGoal right-button":
			var lowgoalAuto = document.getElementById("LowGoals_Auto");
			var lowgoalAutoDisplay = document.getElementById("AutoLowCounter");
			lowgoalAuto.value++;
			lowgoalAutoDisplay.innerHTML++;
		break;
		case "auto outGoal right-button":
			var outgoalAuto = document.getElementById("OutGoals_Auto");
			var outgoalAutoDisplay = document.getElementById("AutoOutCounter");
			outgoalAuto.value++;
			outgoalAutoDisplay.innerHTML++;
		break;
		case "auto inGoal right-button":
			var ingoalAuto = document.getElementById("InGoals_Auto");
			var ingoalAutoDisplay = document.getElementById("AutoInCounter");
			ingoalAuto.value++;
			ingoalAutoDisplay.innerHTML++;
		break;
		case "teleOp lowGoal right-button":
			var lowgoalTeleop = document.getElementById("LowGoals_TeleOp");
			var lowgoalTeleopDisplay = document.getElementById("TeleopLowCounter");
			lowgoalTeleop.value++;
			lowgoalTeleopDisplay.innerHTML++;
		break;
		case "teleOp outGoal right-button":
			var outgoalTeleop = document.getElementById("OutGoals_TeleOp");
			var outgoalTeleopDisplay = document.getElementById("TeleopOutCounter");
			outgoalTeleop.value++;
			outgoalTeleopDisplay.innerHTML++;
		break;
		case "teleOp inGoal right-button":
			var ingoalTeleop = document.getElementById("InGoals_TeleOp");
			var ingoalTeleopDisplay = document.getElementById("TeleopInCounter");
			ingoalTeleop.value++;
			ingoalTeleopDisplay.innerHTML++;
		break;
		case "foul right-button":
			var foul = document.getElementById("fouls");
			var foulDisplay = document.getElementById("FoulCounter");
			foul.value++;
			foulDisplay.innerHTML++;
		break;
		case "techFoul right-button":
			var techFoul = document.getElementById("techFouls");
			var techFoulDisplay = document.getElementById("TechFoulCounter");
			techFoul.value++;
			techFoulDisplay.innerHTML++;
		break;
		case "block right-button":
			var block = document.getElementById("ShotsBlocked");
			var blockDisplay = document.getElementById("BlockCounter");
			block.value++;
			blockDisplay.innerHTML++;
		break;
		default: alert("oh no");
	}
}

function countDown(button_class) {
	console.log(button_class);
	var buttonColor = button_class;
	switch (buttonColor) {
		case "auto lowGoal left-button":
			var lowgoalAuto = document.getElementById("LowGoals_Auto");
			var lowgoalAutoDisplay = document.getElementById("AutoLowCounter");
			if(lowgoalAuto.value > 0) {
				lowgoalAuto.value--;
				lowgoalAutoDisplay.innerHTML--;
			}
		break;
		case "auto outGoal left-button":
			var outgoalAuto = document.getElementById("OutGoals_Auto");
			var outgoalAutoDisplay = document.getElementById("AutoOutCounter");
			if(outgoalAuto.value > 0) {
				outgoalAuto.value--;
				outgoalAutoDisplay.innerHTML--;
			}
		break;
		case "auto inGoal left-button":
			var ingoalAuto = document.getElementById("InGoals_Auto");
			var ingoalAutoDisplay = document.getElementById("AutoInCounter");
			if(ingoalAuto.value > 0) {
				ingoalAuto.value--;
				ingoalAutoDisplay.innerHTML--;
			}
		break;
		case "teleOp lowGoal left-button":
			var lowgoalTeleop = document.getElementById("LowGoals_TeleOp");
			var lowgoalTeleopDisplay = document.getElementById("TeleopLowCounter");
			if(lowgoalTeleop.value > 0) {
				lowgoalTeleop.value--;
				lowgoalTeleopDisplay.innerHTML--;
			}
		break;
		case "teleOp outGoal left-button":
			var outgoalTeleop = document.getElementById("OutGoals_TeleOp");
			var outgoalTeleopDisplay = document.getElementById("TeleopOutCounter");
			if(outgoalTeleop.value > 0) {
				outgoalTeleop.value--;
				outgoalTeleopDisplay.innerHTML--;
			}
		break;
		case "teleOp inGoal left-button":
			var ingoalTeleop = document.getElementById("InGoals_TeleOp");
			var ingoalTeleopDisplay = document.getElementById("TeleopInCounter");
			if(ingoalTeleop.value > 0) {
				ingoalTeleop.value--;
				ingoalTeleopDisplay.innerHTML--;
			}
		break;
		case "foul left-button":
			var foul = document.getElementById("fouls");
			var foulDisplay = document.getElementById("FoulCounter");
			if(foul.value > 0) {
				foul.value--;
				foulDisplay.innerHTML--;
			}
		break;
		case "techFoul left-button":
			var techFoul = document.getElementById("techFouls");
			var techFoulDisplay = document.getElementById("TechFoulCounter");
			if(techFoul.value > 0) {
				techFoul.value--;
				techFoulDisplay.innerHTML--;
			}
		break;
		case "block left-button":
			var block = document.getElementById("ShotsBlocked");
			var blockDisplay = document.getElementById("BlockCounter");
			if(block.value > 0) {
				block.value--;
				blockDisplay.innerHTML--;
			}
		break;
		default: alert("oh no");
	}
}
		
function rotateOn() {
	var button = document.getElementById("rotate");
	var buttonColor = button.style.backgroundColor;
	var checkbox = document.getElementById("CRotate");
	if (checkbox.checked) {
		button.style.backgroundColor = "#eee";
		button.style.color = "black";
		checkbox.checked = false;
	}
	else {
		button.style.backgroundColor = "#2bc23f";
		button.style.color = "white";
		checkbox.checked = true;
	}
}
		
function positionOn() {
	var button = document.getElementById("position");
	var buttonColor = button.style.backgroundColor;
	var checkbox = document.getElementById("CPosition");
	if (checkbox.checked) {
		button.style.backgroundColor = "#eee";
		button.style.color = "black";
		checkbox.checked = false;
	}
	else {
		button.style.backgroundColor = "#2bc23f";
		button.style.color = "white";
		checkbox.checked = true;
	}
}

function toggleDefender() {
	var button = document.getElementById("defended");
	var checkbox = document.getElementById("CDefended");
	if (checkbox.checked) {
		button.style.backgroundColor = "#eee";
		button.style.color = "black";
		checkbox.checked = false;
	}
	else {
		button.style.backgroundColor = "#2bc23f";
		button.style.color = "white";
		checkbox.checked = true;
	}
}

function toggleDefense() {
	var button = document.getElementById("playDefense");
	var checkbox = document.getElementById("CPlayDefense");
	if (checkbox.checked) {
		button.style.backgroundColor = "#eee";
		button.style.color = "black";
		checkbox.checked = false;
	}
	else {
		button.style.backgroundColor = "#2bc23f";
		button.style.color = "white";
		checkbox.checked = true;
	}
}
		
function resetEverything() {
	var rcButton = document.getElementById("rotate");
	var pcButton = document.getElementById("position");
	var ddButton = document.getElementById("defended");
	var pdButton = document.getElementById("playDefense");
	var sPosition = document.getElementById("scouterPosition").value;
	var card = document.getElementById("cards");
	if (sPosition=="R1" || sPosition=="R2" || sPosition=="R3") { document.getElementById("scouterPosition").style.backgroundColor = "#B00"; }
	else { document.getElementById("scouterPosition").style.backgroundColor = "#00B"; }
	rcButton.style.backgroundColor = "#eee";
	rcButton.style.color = "black";
	pcButton.style.backgroundColor = "#eee";
	pcButton.style.color = "black";
	ddButton.style.backgroundColor = "#eee";
	ddButton.style.color = "black";
	pdButton.style.backgroundColor = "#eee";
	pdButton.style.color = "black";
	card.style.backgroundColor = "#c0c0c0";
	document.getElementById("AutoLowCounter").innerHTML = 0;
	document.getElementById("AutoOutCounter").innerHTML = 0;
	document.getElementById("AutoInCounter").innerHTML = 0;
	document.getElementById("TeleopLowCounter").innerHTML = 0;
	document.getElementById("TeleopOutCounter").innerHTML = 0;
	document.getElementById("TeleopInCounter").innerHTML = 0;
	document.getElementById("FoulCounter").innerHTML = 0;
	document.getElementById("TechFoulCounter").innerHTML = 0;
	document.getElementById("BlockCounter").innerHTML = 0;
}
		
function getData() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const name = urlParams.get('Name');
	const match = urlParams.get('Match');
	const position = urlParams.get('Position');
	var scouter = document.getElementById("Scouter");
	document.getElementById("Name").value = name;
	scouter.value = name;
	var matchnum = document.getElementById("Match");
	matchnum.value = match;
	document.getElementById("fieldPosition").value = position;
	document.getElementById("Position").value = position;
	switch(position) {
		case "Red 1":
			document.getElementById("scouterPosition").value = "R1";
		break;
		case "Red 2":
			document.getElementById("scouterPosition").value = "R2";
		break;
		case "Red 3":
			document.getElementById("scouterPosition").value = "R3";
		break;
		case "Blue 1":
			document.getElementById("scouterPosition").value = "B1";
		break;
		case "Blue 2":
			document.getElementById("scouterPosition").value = "B2";
		break;
		case "Blue 3":
			document.getElementById("scouterPosition").value = "B3";
		break;
		default: alert("heck");	
	}
	scoutingPosition();
	alert("You're scouting "+position+".");
}

function getTeam() {
	var teams = new XMLHttpRequest();
    var match = document.getElementById("Match").value;
    teams.open("GET", "https://www.thebluealliance.com/api/v3/match/" + event + "_qm" + match, true);
    teams.setRequestHeader("X-TBA-Auth-Key", key);
    teams.onreadystatechange = function(){
	if(this.readyState === 4 && this.status === 200){
  		var json = JSON.parse(this.responseText);
  		var options;
  		var matchTeams = new Array(json.alliances.red.team_keys[0],json.alliances.red.team_keys[1],json.alliances.red.team_keys[2],json.alliances.blue.team_keys[0],json.alliances.blue.team_keys[1],json.alliances.blue.team_keys[2]);
 		var teamPick = document.getElementById("Team");
 		switch (document.getElementById("scouterPosition").value) {
 			case "R1":
 				teamPick.value = removeFRC(matchTeams[0]);
 			break;
 			case "R2":
 				teamPick.value = removeFRC(matchTeams[1]);
 			break;
 			case "R3":
 				teamPick.value = removeFRC(matchTeams[2]);
 			break;
 			case "B1":
 				teamPick.value = removeFRC(matchTeams[3]);
 			break;
 			case "B2":
 				teamPick.value = removeFRC(matchTeams[4]);
 			break;
 			case "B3":
 				teamPick.value = removeFRC(matchTeams[5]);
 			break;
 			default: teamPick.value = "heck";
 		}
 	}
	}
    teams.send();
}

function getNumMatches() {
	var count = 0;
	var scroll = 0;
	var matches = new XMLHttpRequest();
	matches.open("GET", "https://www.thebluealliance.com/api/v3/event/"+event+"/matches/keys", true);
	matches.setRequestHeader("X-TBA-Auth-Key", key);
	matches.onreadystatechange = function(){
	if(this.readyState===4 && this.status===200) {
		var json = JSON.parse(this.responseText);
		while(scroll<json.length) {
			console.log(scroll+" "+count+" "+json.length);
			if(json[scroll].includes("_qm")) count++;
			scroll++;
		}
	nummatches = count;
	}
	}
	matches.send();
}

function submission() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
