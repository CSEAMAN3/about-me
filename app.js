// "use strict";

let points = 0;

function alertUnknownAnswer(data, question) {
  while (data != "yes" && data != "y" && data != "no" && data != "n") {
    alert("Please answer using Yes, Y, No or N only");
    data = prompt(question).toLowerCase();
  }
  return data;
}

document.getElementById("quiz-btn").addEventListener("click", function () {
  let user = prompt(
    "Hi, Chris here, tell me your name and we will start the quiz."
  );

  alert(
    "Hi " +
      user +
      ", nice to meet you! Please answer the following questions with a Yes, Y, No or N response only. Lets see how well you really know me!"
  );
  // question 1
  let city = prompt(
    "Born and raised, Norfolk is my home, but have I lived here all my life?"
  ).toLowerCase();

  alertUnknownAnswer(
    city,
    "Born and raised, Norfolk is my home, but have I lived here all my life?"
  );

  if (city === "yes" || city === "y") {
    alert("Well done, great start. Norwich really is a fine city!");
    points++;
  } else if ((city = "no" || city === "n")) {
    alert("That's not correct! Did you fall asleep reading my Bio");
  }
  // question 2
  let education = prompt(
    "Have I studied a degree in Media-Moving Image?"
  ).toLowerCase();

  alertUnknownAnswer(
    education,
    "Have I studied a degree in Media-Moving Image?"
  );

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

  // question 3
  let work = prompt(
    "Was I the owner of a local made to measure blind business?"
  );

  alertUnknownAnswer(
    work,
    "Was I the owner of a local made to measure blind business?"
  );

  if (work === "yes" || work === "y") {
    alert("Good answer! Couple more questions to go!");
    points++;
  } else if (work === "no" || work === "n") {
    alert("Bad answer! I did! Couple more questions to go!");
  }
  // question 4
  let goal = prompt("Is my goal to become a great web developer / designer?");

  alertUnknownAnswer(
    goal,
    "Is my goal to become a great web developer / designer?"
  );

  if (goal === "yes" || goal === "y") {
    alert("Hell yeah, Sukerberg watch out");
    points++;
  } else if (goal === "no" || goal === "n") {
    alert(`You really dont know me very well ${user}, Sukerberg watch out`);
  }

  // question 5
  let quiz = prompt(
    `Final question, if you get this question correct will you have answered ${
      points + 1
    } questions correct?`
  );

  alertUnknownAnswer(
    quiz,
    `Final question, if you get this question correct will you have answered ${
      points + 1
    } questions correct`
  );

  if (quiz === "yes" || quiz === "y") {
    points++;
    alert(
      `Well done ${user}, you have answered ${points} questions correctly.`
    );
  } else if (quiz === "no" || quiz === "n") {
    alert(
      `you cant even count ${user}, life is gonna be hard! You answered ${points} correct.`
    );
  }
});
