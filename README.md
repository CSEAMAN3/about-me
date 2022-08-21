# about-me

Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

Notes Friday

// comparison operators
a == b // loose equal to
a === b // Strict equal to
a != b // not equal to
a !== b // strict not equal to
a > b // greater than
a < b // less than
a >= b // greater than or equal to
a <= b // less than or equal to

// logical opertors
a && b // is a AND b true
a || b // is a OR b true
!a // not - inverts the boolean value of a (make it the opposite so if something is true it will make it false)

// evaluating comparisons
( <operand><operator><operand>)
( 1 === 2 )

// type coercion
let a = 5
a = "cookie"

"10" > 1
true - this will make the string into a number

"5" == 5
true - this will make the number into a string

//for loop - intitial value, condition, increment
for (let i = 0; i < 10; i++>){
console.log(i)
}

Lab 03

Part 1

1. Create a top ten list
2. convert work experience and education into an unordered list. - completed.

3. Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
4. Indicates through an alert if the guess is “too high” or “too low”.
5. It should give the user exactly four opportunities to get the correct answer.
6. After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

7. Add a 7th question that has multiple possible correct answers that are stored in an array.
8. Give the user 6 attempts to guess the correct answer.
9. The guesses will end once the user guesses a correct answer or they run out of attempts.
10. Display all the possible correct answers to the user.
11. Consider using a loop of some sort for this question.

12. Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
