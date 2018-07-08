// array object with questions and answers
var quizQuestions = ["What is the name of Jon's direwolf?", 'In the first episode, King Robert Baratheon says "In my dreams, I kill him every night." To whom is the King referring?', "In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?", "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)?", "Who utters the words: Say it. Say her name. Say it!", " At the end of his training, what must an Unsullied kill to prove he has no mercy or weakness?"]

var quizDisplay = [{
        Nymeria: false,
        Snow: false,
        Ghost: true,
        "Grey Wind": false
    },
    {
        "Rhaegar Targaryen": true,
        "The Mad King": false,
        "Tywin Lannister": false,
        Joffrey: false
    },
    {
        "Theon Greyjoy": true,
        "Peter Baelish": false,
        Arya: false,
        Sansa: false
    },
    {
        None: false,
        two: false,
        three: false,
        four: true
    },
    {
        Rorge: false,
        Ros: false,
        "Joffrey Baratheon": false,
        "Oberyn Martell": true
    }, {
        "A Dalthraki": false,
        "A newborn slave child": true,
        "An Astapor Prisoner": false,
        "Their trainer": false
    }
]

// variables for results
var correct = 0;
var wrong = 0;
var question = 0;
var quizEnd = false;
var countdown = 10;
var percentage = parseInt(correct) / 6;
//!!!!!! place Audio here

//user input
$(this).on('click', function () {
    console.log(this);
    checker();
})


// function to check if correct and make correct v. wrong answer actions
function checker() {
    if (countdown = 0) {
        alert("You ran out of time!");
        wrong++;
    } else {
        if (this.value = true) {
            correct++;
            $(this).css('color', 'green');
        } else {
            wrong++;
            $(this).css('color', 'red');
        }
    }

    question++;
    finalFrame();
    nextQuestion();
}

//use timeSet to wait a few moments before next question
function nextQuestion() {
    setTimeout(() => {
        update();
    }, 2000);
}

// function for update
function update() {
    //pulling an array of keys for us to use as possible answers   
    var propArr = Object.keys(quizDisplay[question]);
    var value = quizDisplay[question];
    $('.question').text(`Question ${question + 1}: ${quizQuestions[question]}`);
    $('.choice-1 button').text(`a. ${propArr[0]}`);
    $('.choice-2 button').text(`b. ${propArr[1]}`);
    $('.choice-3 button').text(`c. ${propArr[2]}`);
    $('.choice-4 button').text(`d. ${propArr[3]}`);
    $('.choice-1').attr('value', value[0]);
    $('.choice-2').attr('value', value[1]);
    $('.choice-3').attr('value', value[2]);
    $('.choice-4').attr('value', value[3]);
}

// function for final frame
function finalFrame() {
    if (question == 6) {
        alert("game over!")
        $('.countdown').remove();
        $('.question').remove();
        $('.multiple-choice').remove();
        $('.game').append(`<div class="final">Correct: ${correct} <br>Wrong: ${wrong} <br>Score: ${percentage}`)
        //will need to do some appending and removing here
    }
}

// function for question timer countdown from 10
function timer() {
    setInterval(function countdownTimer() {
        countdown--;
        if (countdown == 0) {
            clearInterval(countdownTimer);
        } else {
            $('.countdown').text(`Time Remaining: ${countdown} seconds`)
        };
    }, 1000)

    if ($('.multiple-choice').on('click')) {
        clearInterval(countdownTimer);
    }
}