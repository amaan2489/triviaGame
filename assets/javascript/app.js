$(document).ready(function () {
    var count = 0;
    var time = 31;
    var isSelected = false;
    var correctAns = 0;
    var incorrectAns = 0;
    var unanswered = 0;

   
    var question = ["Approximately how many people visit San Francisco each year?",
        "How large is San Francisco?", "How many hills make up the San Francisco landscape?", "One end of which of these famous bridges is located in San Francisco?", "How high are San Francisco's Twin Peaks?",
        "When does summer occur in San Francisco?", "Which of these is the main airport for the San Francisco area?", "The form of transportation most closely associated with San Francisco is what?"];
    var answer = ["16 Million", "47 square miles", "43", "Golden Gate Bridge", "900 feet above sea level", "Late August to Late October", "San Francisco International Airport", "Cable car"];
    var firstChoice = ["8 Million", "14 square miles", "31", "Golden Gate Bridge", "300 feet above sea level", "December to February", "San Jose International Airport", "Automobile"];
    var secondChoice = ["16 Million", "25 square miles", "43", "Brooklyn Bridge", "600 feet above sea level", "Early July to mid September", "Oakland International Airport", "Cable car"];
    var thirdChoice = ["24 Million", "47 square miles", "61", "London Bridge", "900 feet above sea level", "Late August to Late October", "San Francisco International Airport", "Skate Board"];
    var fourthChoice = ["30 Million", "55 square miles", "70", "George Washington Bridge", "1000 feet above sea level", "November to January", "Los Angeles International Airport", "Bike"];


    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);


     
    }
    $("#choice-holder-1").on("click", checkAnswer)
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)


    function checkAnswer() {

        hideHolders();
      
        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correctAns++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrectAns++;
            count++;
        }

        checkGameEnd();
    }


    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
    }

    var counter;

    function startTime() {
        clearInterval(counter);
        counter = setInterval(displayTime, 1000);
    }

    function stopTime() {
        clearInterval(counter);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

 
    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/SF_people.gif">');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/large.gif">');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/hills.gif">');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/ggBridge.gif">');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/twinpeaks.gif">');
        }
        else if (count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/summer.gif">');
        }
        else if (count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/airport.gif">');
        }
        else if (count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/cc.gif">');
        }
    }

      
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correctAns);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrectAns);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

    function resetResults() {
        correctAns = 0;
        incorrectAns = 0;
        unanswered = 0;
    }

    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

    // Start Game On Click
    $(".start").on("click", function () {
        startGame();
    });
});