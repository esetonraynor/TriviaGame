window.onload = function() {
	
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

var questions = {
	question: ["Question 1: Which actor plays Hawkeye?", "Question 2: Which city is Klinger from?", "Question 3: What instrument does Gary Burghoff play?", "Question 4: Who replaces Frank Burns as Hawkeye and B.J.'s roommate in Season 6?", "Question 5: What nickname does Margaret Houlihan hate?", "Question 6: Who is the only character to appear in every episode?", "Question 7: Which of the following actresses do not guest star on the show?", "Question 8: What is Hawkeye's real name?", "Question 9: How many viewers tuned in for the series finale in 1983, making it the most-watched finale of all time?", "Question 10: What is the main characters' tent called?", "Question 11: Which event in the plot was kept a secret from the actors until shooting?", "Question 12: What denomination of Christianity is John Mulcahy?", "Question 13: Which famous actor plays Pvt. Gary Sturgis in the episode 'Blood Brothers'?", "Question 14: How does Hawkeye like his martinis?", "Question 15: What product does Radar sell in 'The Trial of Henry Blake'?", "Question 16: Which actor on the show went on to become a financial expert?", "Question 17: Which city is not listed on the signpost outside the Swamp?", "Question 18: Which fan favorite is first introduced in the episode titled, 'A Smattering of Intelligence'?", "Question 19: What does Radar always hear before anyone else?", "Question 20: What is the name of Hawkeye's childhood imaginary friend who takes on a life of his own in Season 1?"],
	choices: ["Gary Burghoff", "Alan Alda", "John McIntyre", "Larry Linville", "Santa Fe, NM", "Orlando, FL", "Toledo, OH", "Ottumwa, IA", "Drums", "Guitar", "Flute", "Vocals", "Sherman Potter", "Charles Emerson Winchester", "Maxwell Q. Klinger", "Margaret Houlihan", "Sweetie", "Nursie", "Hot Lips", "Margie", "Margaret Houlihan", "Colonel Potter", "Hawkeye", "Radar", "Terri Garr", "Blythe Danner", "Shelley Long", "Olivia Newton-John", "Benjamin Franklin Pierce", "John F.X. McIntyre", "Robert C. Whitley", "Thomas Jefferson Yates", "303 Million", "87 Million", "106 Million", "21 Million", "The Joint", "The Swamp", "The Hangout", "The O.R.", "Henry Blake's Death", "Margaret's Engagement", "Trapper's Discharge", "Klinger's Wedding", "Episcopal", "Methodist", "Baptist", "Catholic", "Tom Cruise", "Keanu Reeves", "Patrick Swayze", "Judd Nelson", "Wet", "Aged", "Dry", "Fruity", "Shoes", "Hats", "Gloves", "Snacks", "Alan Alda", "Harry Morgan", "McLean Stevenson", "Wayne Rogers", "Tokyo", "Coney Island", "London", "Death Valley", "Colonel Flagg", "Sargent Ringer", "General Penobscot", "Captain Williams", "Patients Calling", "Choppers", "Bad News", "Phone Ringing", "Greenbriar", "Willy", "Ulrich", "Tuttle"],
	answers: [1, 2, 0, 1, 2, 2, 3, 0, 2, 1, 0, 3, 2, 2, 0, 3, 2, 0, 1, 3]

}

var q=0;
var op1=0;
var op2=1;
var op3=2;
var op4=3;
var answer=0;

var score = {
	correct: 0,
	incorrect: 0
}

var currentQuestion = (questions.question[q]);
var radio1 = (questions.choices[op1]);
var radio2 = (questions.choices[op2]);
var radio3 = (questions.choices[op3]);
var radio4 = (questions.choices[op4]);
var currentAnswer = (questions.answers[answer]);

$(".question").html(currentQuestion);
$("#op1").html(radio1);
$("#op2").html(radio2);
$("#op3").html(radio3);
$("#op4").html(radio4);

function timeUp() {

	
}

$("#submit").on("click", function() {

	if ($('input[name = "radio"]:checked').val() == currentAnswer) {
		score.correct++;
	} else {
		score.incorrect++;
	}

	console.log(score);

	//$('input[name = "radio"]:checked').removeAttr("checked");

	q = q + 1;
	op1 = op1 + 4;
	op2 = op2 + 4;
	op3 = op3 + 4;
	op4 = op4 + 4;
	answer = answer + 1;

	currentQuestion = (questions.question[q]);
	radio1 = (questions.choices[op1]);
	radio2 = (questions.choices[op2]);
	radio3 = (questions.choices[op3]);
	radio4 = (questions.choices[op4]);
	currentAnswer = (questions.answers[answer]);

	$(".question").html(currentQuestion);
	$("#op1").html(radio1);
	$("#op2").html(radio2);
	$("#op3").html(radio3);
	$("#op4").html(radio4);
	
});

}

// var questions = 
// [
// 	{question: "Question 1: Which actor plays Hawkeye?",
// 	choices: ["Gary Burghoff", "Alan Alda", "John McIntyre", "Larry Linville"],
// 	answer: "Alan Alda"
// 	},

// 	{question: "Question 2: Which city is Klinger from?",
// 	choices: ["Santa Fe, NM", "Orlando, FL", "Toledo, OH", "Ottumwa, IA"],
// 	answer: "Toledo, OH"
// 	},

// 	{question: "Question 3: What instrument does Gary Burghoff play?",
// 	choices: ["Drums", "Guitar", "Flute", "Vocals"],
// 	answer: "Drums"
// 	},

// 	{question: "Question 4: Who replaces Frank Burns as Hawkeye and B.J.'s roommate in Season 6?",
// 	choices: ["Sherman Potter", "Charles Emerson Winchester", "Maxwell Q. Klinger", "Margaret Houlihan"],
// 	answer: "Charles Emerson Winchester"
// 	},

// 	{question: "Question 5: What nickname does Margaret Houlihan hate?",
// 	choices: ["Sweetie", "Nursie", "Hot Lips", "Margie"],
// 	answer: "Hot Lips"
// 	},

// 	{question: "Question 6: Who is the only character to appear in every episode?",
// 	choices: ["Margaret Houlihan", "Colonel Potter", "Hawkeye", "Radar"],
// 	answer: "Hawkeye"
// 	},

// 	{question: "Question 7: Which of the following actresses do not guest star on the show?",
// 	choices: ["Terri Garr", "Blythe Danner", "Shelley Long", "Olivia Newton-John"],
// 	answer: "Olivia Newton-John"
// 	},

// 	{question: "Question 8: What is Hawkeye's real name?",
// 	choices: ["Benjamin Franklin Pierce", "John F.X. McIntyre", "Robert C. Whitley", "Thomas Jefferson Yates"],
// 	answer: "Benjamin Franklin Pierce"
// 	},

// 	{question: "Question 9: How many viewers tuned in for the series finale in 1983, making it the most-watched finale of all time?",
// 	choices: ["303 Million", "87 Million", "106 Million", "21 Million"],
// 	answer: "106 Million"
// 	},

// 	{question: "Question 10: What is the main characters' tent called?",
// 	choices: ["The Joint", "The Swamp", "The Hangout", "The O.R."],
// 	answer: "The Swamp"
// 	},

// 	{question: "Question 11: Which event in the plot was kept a secret from the actors until shooting?",
// 	choices: ["Henry Blake's Death", "Margaret's Engagement", "Trapper's Discharge", "Klinger's Wedding"],
// 	answer: "Henry Blake's Death"
// 	},

// 	{question: "Question 12: What denomination of Christianity is John Mulcahy?",
// 	choices: ["Episcopal", "Methodist", "Baptist", "Catholic"],
// 	answer: "Catholic"
// 	},

// 	{question: "Question 13: Which famous actor plays Pvt. Gary Sturgis in the episode 'Blood Brothers'?",
// 	choices: ["Tom Cruise", "Keanu Reeves", "Patrick Swayze", "Judd Nelson"],
// 	answer: "Patrick Swayze"
// 	},

// 	{question: "Question 14: How does Hawkeye like his martinis?",
// 	choices: ["Wet", "Aged", "Dry", "Fruity"],
// 	answer: "Dry"
// 	},

// 	{question: "Question 15: What product does Radar sell in 'The Trial of Henry Blake'?",
// 	choices: ["Shoes", "Hats", "Gloves", "Snacks"],
// 	answer: "Shoes"
// 	},

// 	{question: "Question 16: Which actor on the show went on to become a financial expert?",
// 	choices: ["Alan Alda", "Harry Morgan", "McLean Stevenson", "Wayne Rogers"],
// 	answer: "Wayne Rogers"
// 	},

// 	{question: "Question 17: Which city is not listed on the signpost outside the Swamp?",
// 	choices: ["Tokyo", "Coney Island", "London", "Death Valley"],
// 	answer: "London"
// 	},

// 	{question: "Question 18: Which fan favorite is first introduced in the episode titled, 'A Smattering of Intelligence'?",
// 	choices: ["Colonel Flagg", "Sargent Ringer", "General Penobscot", "Captain Williams"],
// 	answer: "Colonel Flagg"
// 	},

// 	{question: "Question 19: What does Radar always hear before anyone else?",
// 	choices: ["Patients Calling", "Choppers", "Bad News", "Phone Ringing"],
// 	answer: "Choppers"
// 	},

// 	{question: "Question 20: What is the name of Hawkeye's childhood imaginary friend who takes on a life of his own in Season 1?",
// 	choices: ["Greenbriar", "Willy", "Ulrich", "Tuttle"],
// 	answer: "Tuttle"
// 	},

// ];

// var questionDiv = $(".questionDiv");
// var questionHolder = $("<div>");
// questionHolder.addClass("question");

// for (var i = 0; i < questions.length; i++) {

// 	var question = questions[i].question;
// 	questionHolder.append(question + "<br>");
// 	var options = questions[i].choices;
// 	console.log(JSON.stringify(options));
// 	var name = "radio" + i;

// 	for (var opt in options) {
// 		var radioElement= $("<input type='radio'>");
// 		radioElement.val(options[opt]);
// 		radioElement.attr("name", name);
// 		questionHolder.append(radioElement);

// 		var label = $("<label>");
// 		label.html(options[opt]);
// 		var text = label[0].innerHTML;
// 		questionHolder.append(text + "<br>");
// 	}

// }

// questionDiv.append(questionHolder);



// function timeUp() {
// 	var correctAnswers = 0;
// 	var incorrectAnswers = 0;

// 	for (var a = 0; a < questions.length; a++) {
// 		//check if index of checked radio button is equal to answer value
// 		//check if the index of the choice in choices is equal to the value of the answer in the same object
// 		if ($('input[name="name"]:checked') === questions[a].answer) {

// 			correctAnswers++;
// 			} else {
// 			incorrectAnswers++;
// 			}


// 	reset();

// 		// console.log(correctAnswers);
// 		// console.log(incorrectAnswers);
// 	}
	
// }

// $("#submit").on("click", function() {
// 	timeUp();
// });

// }

// for (var i = 0; i < questions.length; i++) {

// 	var question = questions[i].question + "<br>";
// 	console.log(question);
// 	$(".questionDiv").append(question);

// 	var options = questions[i].choices + "<br>";
// 	console.log(options);

// 	var name = "radio" + i;
	
// 	for (var opt in options) {
// 		var radioButton = $("<input> type = 'radio'");
// 		radioButton.attr("value", "options[opt]");
// 		radioButton.addName("name");

// 		$(".questionDiv").append(radioButton);

// 		var label = $("<label>");
// 		label.html(options[opt]);
// 		$(".questionDiv").append(label); 
// 	}
// }



// function timeUp() {

// var numberCorrect=0;
// var numberWrong=0;


// reset();


// checkOne();
// checkTwo();
// checkThree();
// checkFour();
// checkFive();
// checkSix();
// checkSeven();
// checkEight();
// checkNine();
// checkTen();
// checkEleven();
// checkTwelve();
// checkThirteen();
// checkFourteen();
// checkFifteen();
// checkSixteen();
// checkSeventeen();
// checkEighteen();
// checkNineteen();
// checkTwenty();

// function checkOne() {
// 	//var correctAnswer=$("#alan");
// 	if ($("#alan").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTwo() {
// 	if ($("#toledo").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkThree() {
// 	if ($("#drums").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }


// function checkFour() {
// 	if ($("#winchester").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkFive() {
// 	if ($("#hotlips").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSix() {
// 	if ($("#hawkeye").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSeven() {
// 	if ($("#olivia").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkEight() {
// 	if ($("#benjamin").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkNine() {
// 	if ($("#106").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTen() {
// 	if ($("#swamp").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkEleven() {
// 	if ($("#death").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTwelve() {
// 	if ($("#catholic").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkThirteen() {
// 	if ($("#patrick").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkFourteen() {
// 	if ($("#dry").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkFifteen() {
// 	if ($("#shoes").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSixteen() {
// 	if ($("#wayne").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSeventeen() {
// 	if ($("#london").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkEighteen() {
// 	if ($("#adam").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkNineteen() {
// 	if ($("#choppers").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTwenty() {
// 	if ($("#tuttle").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// localStorage.setItem("correct", numberCorrect);

// localStorage.setItem("incorrect", numberWrong);



// document.location.href="finalPage.html";

// $("#noCorrect").html(localStorage.getItem("correct"));
// $("#noIncorrect").html(localStorage.getItem("incorrect"));


// alert("you scored " + numberCorrect + " correct and " + numberWrong+ " incorrect!");

// if (numberCorrect === 20) {
// 	$("#expertLevel").html("You must've watched every episode! You are M*A*S*H fanatic. Congratulations!");
// }

// if (numberCorrect >= 15 && numberCorrect <= 19) {
// 	$("#expertLevel").html("You definitely know a lot about M*A*S*H! Now go brush up on the details.");
// }

// if (numberCorrect > 10 && numberCorrect <= 14) {
// 	$("#expertLevel").html("Great try! You could definitely afford to watch more M*A*S*H!");
// }

// if (numberCorrect <= 10) {
// 	$("#expertLevel").html("You need to watch more M*A*S*H!!");
// }

// }


// $("#submit").click(function check() {

// reset();

// var numberCorrect=0;

// var numberWrong=0;


// checkOne();
// checkTwo();
// checkThree();
// checkFour();
// checkFive();
// checkSix();
// checkSeven();
// checkEight();
// checkNine();
// checkTen();
// checkEleven();
// checkTwelve();
// checkThirteen();
// checkFourteen();
// checkFifteen();
// checkSixteen();
// checkSeventeen();
// checkEighteen();
// checkNineteen();
// checkTwenty();

// function checkOne() {
// 	if ($("#alan").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTwo() {
// 	if ($("#toledo").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkThree() {
// 	if ($("#drums").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }


// function checkFour() {
// 	if ($("#winchester").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkFive() {
// 	if ($("#hotlips").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSix() {
// 	if ($("#hawkeye").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSeven() {
// 	if ($("#olivia").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkEight() {
// 	if ($("#benjamin").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkNine() {
// 	if ($("#106").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTen() {
// 	if ($("#swamp").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkEleven() {
// 	if ($("#death").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTwelve() {
// 	if ($("#catholic").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkThirteen() {
// 	if ($("#patrick").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkFourteen() {
// 	if ($("#dry").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkFifteen() {
// 	if ($("#shoes").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSixteen() {
// 	if ($("#wayne").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkSeventeen() {
// 	if ($("#london").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkEighteen() {
// 	if ($("#adam").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkNineteen() {
// 	if ($("#choppers").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// function checkTwenty() {
// 	if ($("#tuttle").is(':checked')) {
// 		numberCorrect++;
// 	}
// 	else {
// 		numberWrong++;
// 	}
// }

// localStorage.setItem("correct", numberCorrect);
// localStorage.setItem("incorrect", numberWrong);

// document.location.href="finalPage.html";


// $("#noCorrect").html(localStorage.getItem("correct"));
// $("#noIncorrect").html(localStorage.getItem("incorrect"));


// alert("you scored " + numberCorrect + " correct and " + numberWrong+ " incorrect!");

// if (numberCorrect === 20) {
// 	$("#expertLevel").html("You must've watched every episode! You are M*A*S*H fanatic. Congratulations!");
// }

// if (numberCorrect >= 15 && numberCorrect <= 19) {
// 	$("#expertLevel").html("You definitely know a lot about M*A*S*H! Now go brush up on the details.");
// }

// if (numberCorrect > 10 && numberCorrect <= 14) {
// 	$("#expertLevel").html("Great try! You could definitely afford to watch more M*A*S*H!");
// }

// if (numberCorrect <= 10) {
// 	$("#expertLevel").html("You need to watch more M*A*S*H!!");
// }

// });

// }


