// "use strict";

let points = 0;
const number = Math.floor(Math.random() * 10) + 1;
let attempts = 5;
let holiday = ["mexico", "turkey", "france"];

// function alertUnknownAnswer(data, question) {
//   while (data != "yes" && data != "y" && data != "no" && data != "n") {
//     alert("Please answer using Yes, Y, No or N only");
//     data = prompt(question).toLowerCase();
//   }
//   return data;
// }

// let favouriteNumber = document
//   .getElementById("quiz-btn")
//   .addEventListener("click", function () {
let user = prompt(
  "Hi, Chris here, tell me your name and we will start the quiz."
);

alert(
  `Hi ${user}, nice to meet you! Please answer the following questions with a Yes, Y, No or N response only. Lets see how well you really know me!`
);
// question 1
function q1() {
  let city = prompt(
    "Born and raised, Norfolk is my home, but have I lived here all my life?"
  ).toLowerCase();

  // alertUnknownAnswer(
  //   city,
  //   "Born and raised, Norfolk is my home, but have I lived here all my life?"
  // );

  while (city != "yes" && city != "y" && city != "no" && city != "n") {
    alert(`${user}, please answer using Yes, Y, No or N only`);
    city = prompt(
      "Born and raised, Norfolk is my home, but have I lived here all my life?"
    ).toLowerCase();
  }

  if (city === "yes" || city === "y") {
    alert("Well done, great start. Norwich really is a fine city!");
    points++;
  } else if ((city = "no" || city === "n")) {
    alert("That's not correct! Did you fall asleep reading my Bio");
  }
}
q1();
function q2() {
  // question 2
  let education = prompt(
    "Have I studied a degree in Media-Moving Image?"
  ).toLowerCase();

  // alertUnknownAnswer(
  //   education,
  //   "Have I studied a degree in Media-Moving Image?"
  // );

  while (
    education != "yes" &&
    education != "y" &&
    education != "no" &&
    education != "n"
  ) {
    alert(`${user}, please answer using Yes, Y, No or N only`);
    education = prompt(
      "Have I studied a degree in Media-Moving Image?"
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
q2();

// question 3
function q3() {
  let work = prompt(
    "Was I the owner of a local made to measure blind business?"
  ).toLowerCase();

  // alertUnknownAnswer(
  //   work,
  //   "Was I the owner of a local made to measure blind business?"
  // );

  while (work != "yes" && work != "y" && work != "no" && work != "n") {
    alert(`${user}, please answer using Yes, Y, No or N only`);
    work = prompt(
      "Was I the owner of a local made to measure blind business?"
    ).toLowerCase();
  }

  if (work === "yes" || work === "y") {
    alert("Good answer! Couple more questions to go!");
    points++;
  } else if (work === "no" || work === "n") {
    alert("Bad answer! I did! Couple more questions to go!");
  }
}

q3();
// question 4
function q4() {
  let goal = prompt(
    "Is my goal to become a great web developer / designer?"
  ).toLowerCase();

  // alertUnknownAnswer(
  //   goal,
  //   "Is my goal to become a great web developer / designer?"
  // );

  while (goal != "yes" && goal != "y" && goal != "no" && goal != "n") {
    alert(`${user}, please answer using Yes, Y, No or N only`);
    goal = prompt(
      "Is my goal to become a great web developer / designer?"
    ).toLowerCase();
  }

  if (goal === "yes" || goal === "y") {
    alert("Hell yeah, Sukerberg watch out");
    points++;
  } else if (goal === "no" || goal === "n") {
    alert(`You really dont know me very well ${user}, Sukerberg watch out`);
  }
}
q4();

// question 5
function q5() {
  let quiz = prompt(
    `Question five, if you get this question correct will you have answered ${
      points + 1
    } questions correct?`
  ).toLowerCase();

  // alertUnknownAnswer(
  //   quiz,
  //   `Final question, if you get this question correct, will you have answered ${
  //     points + 1
  //   } questions correct?`
  // );

  while (quiz != "yes" && quiz != "y" && quiz != "no" && quiz != "n") {
    alert(`${user}, please answer using Yes, Y, No or N only`);
    quiz = prompt(
      `Final question, if you get this question correct will you have answered ${
        points + 1
      } questions correct?`
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
q5();
// question 6
function q6() {
  let guess = prompt(
    `I'm thinking of a number between 1 and 10, please guess the number? You have ${attempts} attempts to get it right!`
  );

  for (let i = 0; i < 3; i++) {
    if (guess < number) {
      attempts--;
      alert("Too low, guess again!");
      guess = prompt(
        `Please guess my favourite number? You now have ${
          attempts - 1
        } more attempts to get it right!`
      );
    } else if (guess > number) {
      attempts--;
      alert("Too high, guess again!");
      guess = prompt(
        `Please guess my favourite number? You now have ${
          attempts - 1
        } more attempts to get it right!`
      );
    } else {
      points++;
      alert("congratualtions, you must be telepathic, you've read my mind");
      break;
    }
    if (attempts === 1) {
      alert(
        `Unlucky ${user}, that was you final attempt. My favourite number is ${number}.`
      );
      break;
    }
  }
}
q6();

// question 7
let country = prompt(
  "Final question, name a country outside of the uk that I have travelled to?"
);
// });

document.getElementById("quiz-btn").addEventListener("click", function () {
  q1(); // Q1
  q2(); // Q2
  q3(); // Q3
  q4(); // Q4
  q5(); // Q5
  q6(); // Q6
});
