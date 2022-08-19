// "use strict";

// console.log("I am here");

// let user = prompt("what is your name");

// console.log("the user name is " + user);

// let color = prompt("What is your favourite color?");

// console.log("Your favourite is " + color);

// alert("Hi there " + user + ". your favourite color is " + color);

//

// function quiz() {
//   let user = prompt(
//     "Hi, Chris here, tell me your name and we'll start the quiz!"
//   );

//   console.log("the user name is " + user);

//   alert(
//     "Hi " +
//       user +
//       ", nice to meet you. Please answer the following questions with a Yes or No response only. Lets see how well you really know me!"
//   );

//   let city = prompt(
//     "Born and raised, Norfolk is my home, but have I lived here all my life?"
//   ).toLowerCase();

//   if (city === yes) {
//     alert("Well done, great start. Norwich really is a fine city!");
//     points++;
//   } else if (city === no) {
//     alert("That's not correct! Did you fall asleep reading my Bio");
//   } else {
//     alert("Please enter a Yes or No response only");
//   }
// }

let points = 0;

document.getElementById("quiz-btn").addEventListener("click", function () {
  let user = prompt(
    "Hi, Chris here, tell me your name and we will start the quiz."
  );
  console.log("the users name is " + user);

  alert(
    "Hi " +
      user +
      ", nice to meet you! Please answer the following questions with a Yes, Y, No or N response only. Lets see how well you really know me!"
  );
  // question 1
  let city = prompt(
    "Born and raised, Norfolk is my home, but have I lived here all my life?"
  ).toLowerCase();

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

  if (education === "yes" || education === "y") {
    alert(
      "Almost " +
        user +
        ", but you're wrong, I studied a national diploma as well as a higher national diploma!"
    );
  } else if (education === "no" || education === "n") {
    alert(
      "Bingo, you're correct! It was actually a national diploma as well as a higher national diploma I studied."
    );
    points++;
  }
  // question 3
  let work = prompt(
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

  if (goal === "yes" || goal === "y") {
    alert("Hell yeah, Sukerberg watch out");
    points++;
  } else if (work === "no" || work === "n") {
    alert(
      "You really don't know me very well " + user + ", Sukerberg watch out"
    );
  }

  // question 5
  let goals = prompt(
    "Final question, if you get this question correct will you have answered " +
      `${points + 1}` +
      " questions correct?"
  );

  if (goals === "yes" || goals === "y") {
    points++;
    alert("well done, you have answered " + points + " question correct");
  } else if (work === "no" || work === "n") {
    alert("You can't even count " + user + ", life is gonna be hard!");
  }
});
