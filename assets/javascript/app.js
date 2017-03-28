window.onload = function() {

	$("#clickHere").click(function() {
		var song=$("#backgroundMusic");
		play.loop=true;
		song.play();
	})
	
	var intervalId;
	var time = 180;

reset();
start();

	function reset() {
		time = 180;
		$("#time").html("3:00");
	}
	
	function start() {
		invtervalId=setInterval(count, 1000);
	}

	function count() {
		time--;
		var converted=timeConverter(time);
		$("#time").html(converted);
	}

	function timeConverter(t) {
			
			var minutes= Math.floor(t / 60);
			var seconds= t - (minutes * 60);

			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			if (minutes === 0) {
				minutes == "0";
			}

			else if (minutes < 10) {
				minutes = "" + minutes;
			}

			return minutes + ":" + seconds;
	}

	setTimeout(timeUp, 1000 * 180);


function timeUp() {

var numberCorrect=0;
var numberWrong=0;


reset();


checkOne();
checkTwo();
checkThree();
checkFour();
checkFive();
checkSix();
checkSeven();
checkEight();
checkNine();
checkTen();
checkEleven();
checkTwelve();
checkThirteen();
checkFourteen();
checkFifteen();
checkSixteen();
checkSeventeen();
checkEighteen();
checkNineteen();
checkTwenty();

function checkOne() {
	//var correctAnswer=$("#alan");
	if ($("#alan").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTwo() {
	if ($("#toledo").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkThree() {
	if ($("#drums").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}


function checkFour() {
	if ($("#winchester").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkFive() {
	if ($("#hotlips").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSix() {
	if ($("#hawkeye").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSeven() {
	if ($("#olivia").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkEight() {
	if ($("#benjamin").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkNine() {
	if ($("#106").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTen() {
	if ($("#swamp").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkEleven() {
	if ($("#death").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTwelve() {
	if ($("#catholic").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkThirteen() {
	if ($("#patrick").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkFourteen() {
	if ($("#dry").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkFifteen() {
	if ($("#shoes").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSixteen() {
	if ($("#wayne").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSeventeen() {
	if ($("#london").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkEighteen() {
	if ($("#adam").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkNineteen() {
	if ($("#choppers").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTwenty() {
	if ($("#tuttle").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

localStorage.setItem("correct", numberCorrect);

localStorage.setItem("incorrect", numberWrong);



document.location.href="finalPage.html";

$("#noCorrect").html(localStorage.getItem("correct"));
$("#noIncorrect").html(localStorage.getItem("incorrect"));


alert("you scored " + numberCorrect + " correct and " + numberWrong+ " incorrect!");

if (numberCorrect === 20) {
	$("#expertLevel").html("You must've watched every episode! You are M*A*S*H fanatic. Congratulations!");
}

if (numberCorrect >= 15 && numberCorrect <= 19) {
	$("#expertLevel").html("You definitely know a lot about M*A*S*H! Now go brush up on the details.");
}

if (numberCorrect > 10 && numberCorrect <= 14) {
	$("#expertLevel").html("Great try! You could definitely afford to watch more M*A*S*H!");
}

if (numberCorrect <= 10) {
	$("#expertLevel").html("You need to watch more M*A*S*H!!");
}

}


$("#submit").click(function check() {

reset();

var numberCorrect=0;

var numberWrong=0;


checkOne();
checkTwo();
checkThree();
checkFour();
checkFive();
checkSix();
checkSeven();
checkEight();
checkNine();
checkTen();
checkEleven();
checkTwelve();
checkThirteen();
checkFourteen();
checkFifteen();
checkSixteen();
checkSeventeen();
checkEighteen();
checkNineteen();
checkTwenty();

function checkOne() {
	if ($("#alan").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTwo() {
	if ($("#toledo").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkThree() {
	if ($("#drums").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}


function checkFour() {
	if ($("#winchester").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkFive() {
	if ($("#hotlips").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSix() {
	if ($("#hawkeye").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSeven() {
	if ($("#olivia").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkEight() {
	if ($("#benjamin").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkNine() {
	if ($("#106").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTen() {
	if ($("#swamp").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkEleven() {
	if ($("#death").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTwelve() {
	if ($("#catholic").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkThirteen() {
	if ($("#patrick").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkFourteen() {
	if ($("#dry").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkFifteen() {
	if ($("#shoes").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSixteen() {
	if ($("#wayne").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkSeventeen() {
	if ($("#london").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkEighteen() {
	if ($("#adam").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkNineteen() {
	if ($("#choppers").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

function checkTwenty() {
	if ($("#tuttle").is(':checked')) {
		numberCorrect++;
	}
	else {
		numberWrong++;
	}
}

localStorage.setItem("correct", numberCorrect);
localStorage.setItem("incorrect", numberWrong);

document.location.href="finalPage.html";


$("#noCorrect").html(localStorage.getItem("correct"));
$("#noIncorrect").html(localStorage.getItem("incorrect"));


alert("you scored " + numberCorrect + " correct and " + numberWrong+ " incorrect!");

if (numberCorrect === 20) {
	$("#expertLevel").html("You must've watched every episode! You are M*A*S*H fanatic. Congratulations!");
}

if (numberCorrect >= 15 && numberCorrect <= 19) {
	$("#expertLevel").html("You definitely know a lot about M*A*S*H! Now go brush up on the details.");
}

if (numberCorrect > 10 && numberCorrect <= 14) {
	$("#expertLevel").html("Great try! You could definitely afford to watch more M*A*S*H!");
}

if (numberCorrect <= 10) {
	$("#expertLevel").html("You need to watch more M*A*S*H!!");
}

});

}


