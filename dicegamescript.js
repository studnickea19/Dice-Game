//Format turns
//javascript - apply class
//css - delay animation until click
//***html - onclick event to run function - jquery apply class;

let turn = 1;
//let scoreStore;
let turnID = "";
let displayScore = 0;
let sides = 4;
function runDiceGame(roll){
// 	//for (i = 1; i <= 6; i++) {
		if (turn === 1) {
	 		let score = initialRollDice(sides);
	 		let result = determineScore(score);
	 		sides = decideNextDice(result,sides);
	 		displayScore += score;
	 		turnID += `<p>Turn: ${turn} Score: ${displayScore} Next Dice: ${sides}</p>`;
	 		turn++;
	 		
		}
		else if (turn <= 6)
		{
			let score = nextRoll(sides);
			let result = determineScore(score);
	 		sides = decideNextDice(result,sides);
	 		displayScore += score;
	 		nextDice = sides;
	 		turnID += `<p>Turn: ${turn} Score: ${displayScore} Next Dice: ${sides}</p>`;
	 		turn++;
		}
		else{
	 		turnID = "GAME OVER - Refresh to Play Again.";
	 	}
		displayTurns(turnID);
	}
//  //}

// function storeScore(score){
// 	return score;
// }
function displayTurns(turnID){
	document.getElementById('displayTurns').innerHTML = turnID;
}

// let result = runDiceGame(3);
// console.log(result);


// /////////////////////////////////////////////////////////

function initialRollDice(sides){
	let score = Math.floor((Math.random() * sides) + 1);
	console.log("Initial Roll " + score);
	return score;
}
//TEST
// let result = initialRollDice(4);
// console.log(result);

function nextRoll(sides){
	let score = Math.floor((Math.random() * sides) + 1);
	console.log("nextRoll " + score);
	return score;
}
//TEST
// let result = nextRoll(8);
// console.log(result);

function determineScore(score){
	if(score === 0){
		let result = "even";
		return result;
	}
	else if(score%2 === 0){
		let result = "even";
		return result;
	}
	else{
		let result = "odd";
		return result;
	}
	console.log("determineScore " + result);
	return result;
}
//TEST
// let result = determineScore(16);
// console.log(result);

function decideNextDice(result,sides){		
	let nextDice;																		
	if (result === "even") {
		let nextDice = sides + 4;				
		return nextDice;
	}
	else{
		let nextDice = sides + 2;
		return nextDice;
	}
	console.log("decideNextDice " + nextDice);
	return nextDice;
}
//TEST
// let result = decideNextDice("odd",6);
// console.log(result);


// Define Dice

// let diceFour ={sides:4};
// let diceSix ={sides:6};
// let diceEight ={sides:8};
// let diceTen ={sides:10};
// let diceTwelve ={sides:12};

// // firstRoll > recordScore > decideNextDie(firstRoll)
// // 	rollDice(decideNextDie) > recordScore > decideNextDie

// // 	rollDice: Initiates, gives initial roll from 4 sided die.
// // 	recordScore: records the roll to the scoreboard. Calls decideNextDie, where even scores go up 4 sides, odd scores go up 2.
// // 	decideNextDie initiates rollDice, which 


// // 	Dice is rolled, score is recorded, next die is determined, dice is rolled.

// // 	Count turns, While turn < 6






// // 	Initiate rollDice, sides = 4
// // 	Return roll "result" to decideNextDie
// // 	if even, sides + 4
// // 	else sides + 2
// // 	Return decideNextDie to rollDice
