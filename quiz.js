let points = 0;
let user;

/*-------------------
Question One
--------------------*/

function questionOne() {
  let city = prompt(
    `Born and raised, Norfolk is my home, but have I lived here all my life?`
  ).toLowerCase();

  while (city != "yes" && city != "y" && city != "no" && city != "n") {
    alert(`Please answer using Yes, Y, No or N only!`);
    city = prompt(
      `Born and raised, Norfolk is my home, but have I lived here all my life?`
    ).toLowerCase();
  }

  if (city === "yes" || city === "y") {
    alert(`"Well done, great start. Norwich really is a fine city!"`);
    points++;
  } else if (city === "no" || city === "n") {
    alert(`That's not correct! Did you fall asleep reading my Bio`);
  }
}

/*-------------------
Question Two
---------------------*/

function questionTwo() {
  let education = prompt(`"Have I studied a degree in Media-Moving Image?"`);

  while (
    education != "yes" &&
    education != "y" &&
    education != "no" &&
    education != "n"
  ) {
    alert(`Please answer using Yes, Y, No or N only!`);
    education = prompt(
      `"Have I studied a degree in Media-Moving Image?"`
    ).toLowerCase();
  }

  if (education === "yes" || education === "y") {
    alert(
      `Almost ${user}, but you're wrong. I have studied a National diploma and Higher National Diploma.`
    );
  } else if (education === "no" || education === "n") {
    alert(
      `Bingo, you're correct! It was actually a National Diploma as well as a Higher National Diploma`
    );
    points++;
  }
}

/*------------------------
Question Three
--------------------------*/

function questionThree() {
  let work = prompt(
    `Was I the owner of a local made to measure blind business?`
  ).toLowerCase();

  while (work != "yes" && work != "y" && work != "no" && work != "n") {
    alert(`Please answer using Yes, Y, No or N only!`);
    work = prompt(
      `Was I the owner of a local made to measure blind business?`
    ).toLowerCase();
  }

  if (work === "yes" || work === "y") {
    points++;
    alert(`Good answer! Couple more questions to go!`);
  } else if (work === "no" || work === "n") {
    alert(`Bad answer! I did! Couple more questions to go!`);
  }
}

/*------------------------
Question Four
-------------------------*/

function questionFour() {
  let goal = prompt(
    `Is my goal to become a great web developer / designer?`
  ).toLowerCase();

  while (goal != "yes" && goal != "y" && goal != "no" && goal != "n") {
    alert(`Please answer using Yes, Y, No or N only!`);
    goal = prompt(
      `Is my goal to become a great web developer / designer?`
    ).toLowerCase();
  }

  if (goal === "yes" || goal === "y") {
    alert(`Hell yeah, Sukerberg watch out`);
    points++;
  } else if (goal === no || goal === "n") {
    alert(`You really dont know me very well ${user}, Sukerberg watch out`);
  }
}

/*-------------------------
Question Five
--------------------------*/

function questionFive() {
  let quiz = prompt(
    `Question five. If you get this question correct, will you have answered ${
      points + 1
    } questions correct?`
  ).toLowerCase();

  while (quiz != "yes" && quiz != "y" && quiz != "no" && quiz != "n") {
    alert(`Please answer using Yes, Y, No or N only!`);
    quiz = prompt(
      `Question five. If you get this question correct, will you have answered 
      ${points + 1} questions correct?`
    ).toLowerCase();
  }

  if (quiz === "yes" || quiz === "y") {
    points++;
    alert(
      `Well done ${user}, you have answered ${points} questions correctly.`
    );
  } else if (quiz === "no" || quiz === "n") {
    alert(
      `You cant even count ${user}, life is gonna be hard! You answered ${points} correct.`
    );
  }
}

/*-------------------------
Question Six
--------------------------*/

function questionSix() {
  const number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
  let guess = prompt(
    `I'm thinking of a number between 1 and 10, please guess the number? You have 4 attempts to get it right!`
  );

  for (let i = 3; i >= 0; i--) {
    if ((i === 0 && guess > number) || (i === 0 && guess < number)) {
      alert(
        `Unlucky ${user}, that was your final attempt. The number I was thinking of is ${number}.`
      );
    } else if (i === 0 && guess == number) {
      points++;
      alert(`congratualtions, you must be telepathic, you've read my mind`);
      break;
    } else if (guess > number) {
      alert(`To high, guess again`);
      guess = prompt(
        `I'm thinking of a number between 1 and 10, please guess the number? You have ${i} attempts to get it right!`
      );
    } else if (guess < number) {
      alert(`To low, guess again`);
      guess = prompt(
        `I'm thinking of a number between 1 and 10, please guess the number? You have ${i} attempts to get it right!`
      );
    } else if (guess == number) {
      points++;
      alert(`congratualtions, you must be telepathic, you've read my mind`);
      break;
    }
  }
}

/*
testing

function q6() {
  const number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
  let guess = prompt(
    `I'm thinking of a number between 1 and 10, please guess the number? You have 3 attempts to get it right!`
  );

  for (let i = 3; i >= 0; i--) {
    if (i === 0) {
      alert(
        `Unlucky ${user}, that was you final attempt. My favourite number is ${number}.`
      );
      break;
    }
    if (guess < number) {
      // attempts--;
      alert("Too low, guess again!");
      guess = prompt(
        `Please guess my favourite number? You now have ${i} more attempts to get it right!`
      );
    } else if (guess > number) {
      // attempts--;
      alert("Too high, guess again!");
      guess = prompt(
        `Please guess my favourite number? You now have ${i} more attempts to get it right!`
      );
    } else {
      points++;
      alert(`congratualtions, you must be telepathic, you've read my mind`);
      break;
    }
  }
}


 * / 
 






/*-------------------------
Question Seven
--------------------------*/

function questionSeven() {
  let answers = ["mexico", "turkey", "france"];

  let guess = prompt(
    `Name a country I have visited? You have 6 attampts.`
  ).toLowerCase();

  for (let i = 5; i >= 0; i--) {
    if (i === 0) {
      alert(
        `You have no more attempts left. The correct answers were Mexico, Turkey and France.`
      );
      break;
    }

    if (guess === answers[0]) {
      points++;
      alert(
        `Correct, I have been to Mexico. You could have also answered Turkey or France`
      );
      break;
    } else if (guess === answers[1]) {
      points++;
      alert(
        `Correct, I have been to Turkey. You could have also answered Mexico or France`
      );
      break;
    } else if (guess === answers[2]) {
      points++;
      alert(
        `Correct, I have been to France. You could have also answered Mexico or Turkey`
      );
      break;
    } else {
      console.log("lose");
      guess = prompt(
        `I have not been to ${guess}! Name a country I have visited? You have ${i} attempts left.`
      ).toLowerCase();
    }
  }
}

/*---------------------------------------------------
Quiz Button .addEventListner("Click" function(){})
----------------------------------------------------*/

document.getElementById("quiz-btn").addEventListener("click", function () {
  user = prompt(
    `Hi, Christopher here, tell me your name and we can start the quiz.`
  );

  alert(
    `Hi ${user}, nice to meet you! Please answer the following questions with a Yes, Y, No or N response only. Lets see how well you really know me!`
  );

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();

  alert(`Well done. You answered ${points} out of 7 questions correct`);
  points = 0;
});
