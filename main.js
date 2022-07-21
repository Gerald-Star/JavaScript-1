var a;
a = 5;
var b;
b = 10;
var c;
c = "I am a";

console.log(a, b, c);
console.table(a, b, c);


/* DECLARING A VARIABLE WITH VAR KEYWORD
Problem of var over let Keywords
One of the biggest problems with declaring variables 
with the var keyword is that you can easily overwrite 
variable declarations*/

var camper = "James";
var camper = "David";
console.log(camper);

/* the camper variable is originally declared as James,
 and is then overridden to be David
 this behavior does not throw an error, searching 
 for and fixing bugs becomes more difficult
 */

 /* DECLARING A VARIABLE WITH LET KEYWORD
 
 when you use let, a variable with 
 the same name can only be declared 
 once and allows you to change the variable.*/

let catName = "Oliver";
let catSound = "Meow!";

console.log(catName);
console.log(catSound);


/* DECLARING A VARIABLE WITH CONST KEYWORD

once a variable is assigned with const, 
it cannot be reassigned: Here the variable remains
constant*/

/* const FAV_PET = "Cats";
FAV_PET = "Dogs";*/

//console.log(FAV_PET);

/*The console will display an error due to 
reassigning the value of FAV_PET.*/

/* 
Use let when you want the variable to change,
 and const when you want the variable to remain constant.

*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact);



// DATA TYPES- NUMBERS 

/*
Number is a data type in JavaScript which represents numeric
 data. Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as an addition operator when placed between two numbers.

Example: */

const myVar = 5 + 10;
console.log(myVar);

//myVar now has the value 15

const sum = 10 + 10;
console.log(sum);

const difference = 45 - 0;
console.log(difference);

const minus = 45 - 33;
console.log(minus);

const product = 8 * 0;
console.log(product);

const multiply = 8 * 10;
console.log(multiply);

const quotient = 66 / 33;
console.log(quotient)

/* 1. Increment a Number with JavaScript

You can easily increment (add one) to a number 
variable by using the ‘++’ increment operator. 
For example:
*/
var a = 6;
a++; // Now, 'a' is equal to 7 -- post-fixing
++a; // Now, 'a' is equal to 8 -- pre-fixing

console.log(a);

let incrementVar = 87;

// Only change code below this line
incrementVar = incrementVar + 1;

incrementVar++;
console.log(incrementVar);

//Example 2

let incrementVarPlus = 87;

incrementVarPlus = incrementVarPlus + 1;
++incrementVarPlus;

console.log(incrementVarPlus);



/* 2 Decrement a Number with JavaScript
You can easily decrement or decrease a variable 
by one with the -- operator.

i--;
is the equivalent of

i = i - 1;
Note: The entire line becomes i--;, 
eliminating the need for the equal sign.

*/

let decreVar = 11;

// Only change code below this line
//decreVar = decreVar - 1; --i removes the equal sign
--decreVar  //using only one makes output 10.
decreVar--;  // both makes output to be 9

console.log(decreVar);


/* 3 Create Decimal Numbers with JavaScript
We can store decimal numbers in variables too. 
Decimal numbers are sometimes referred 
to as floating point numbers or floats. */


const myDecimal = 4.2

//Multiply Two Decimals with JavaScript

const multiplyNumbers = 2.0 * 2.5;
console.log(multiplyNumbers);

//divde numbers
const divideQuotient = 4.4 / 2.0;

console.log(divideQuotient);


/* Remainder in Javascript using remainder % operator
The remainder operator % gives the remainder of the
 division of two numbers.
*/
var remainder = 11 % 3; //remainder gets the value 2

console.log(remainder);


/*   Compound Assignment With Augmented Addition
it is common to use assignments to modify the contents 
of a variable. 
Remember that everything to the right of the 
equals sign is evaluated first, so we can say:

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, 
there are operators which do both a mathematical operation
 and assignment in one step.

One such operator is the += operator.
 Example
*/
let assignmentOperator = 1;
assignmentOperator += 5;
console.log(assignmentOperator);

// 2 Example

let e = 3;
let f = 17;
let g = 12;

// Only change code below this line using 
//compund assignment operator +=
// a = a + 12;
// b = 9 + b;
// c = c + 7;

e += 12;
f += 9;
g += 7;

console.log(e, f, g);

/* Compound Assignment With Augmented Subtraction
Like the += operator, 
-= subtracts a number from a variable.

myVar = myVar - 5;
will subtract 5 from myVar. This can be rewritten as:

myVar -= 5;

*/

let assignmentOperatorSubVar =  - 5;
assignmentOperatorSubVar -= 5;

console.log(assignmentOperatorSubVar);


//Example  -= compound assignment operator
let h = 11;
let i = 9;
let j = 3;

// Only change code below this line
//h = h - 6;
//i = i - 15;
//j = j - 1;

h -= 6;
i -= 15;
j -= 1;

console.log(h, i, j);

/* Compound Assignment With Augmented Multiplication
The *= operator multiplies a variable by a number.

myVar = myVar * 5;
will multiply myVar by 5. This can be rewritten as:

myVar *= 5;

*/

//Example
let k = 5;
let l = 12;
let m = 4.6;

// Only change code below this line
k = l * 5;
l = 3 * l;
m = m * 10;

k *= 5;
l *= 3;
m *= 10;

console.log(k, l, m);


//Augmented Division
let n = 48;
let o = 108;
let p = 33;

// Only change code below this line
// n = n / 12;
// o = o / 4;
// p = p / 11;

n /= 12;
o /= 4;
p /= 11;

console.log(n, o, p);


// Escaping Literal Quotes in Strings

/*You define a string you must start and 
end with a single or double quote.
 What happens when you need a literal quote: 
 " or ' inside of your string?

In JavaScript, you can escape a quote from 
considering it as an end of string quote by 
placing a backslash (\) in front of the quote.*/

/*
This signals to JavaScript that the following quote
 is not the end of the string, but should instead appear
  inside the string. So if you were to print this to the 
  console, you would get:

Alan said, "Peter is learning JavaScript".
*/

//Example
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);
const sayNow = "Talk now, \"or forever remain silent\".";
console.log(sayNow);
const sayYes = "The priest says, \"submissive to your family\".";
console.log(sayYes);

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
console.log(myStr)



/* Types of Escape Characters/Sequence in Strings
Quotes are not the only characters that can be 
escaped inside a string. 

There are two reasons to use escaping characters in String:

To allow you to use characters you may not otherwise 
be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without 
JavaScript misinterpreting what you mean.


Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/

const escapeStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(escapeStr);



/* 
Concatenating Strings with Plus Operator +
In JavaScript, when the + operator is used with a String

it is called the concatenation operator.
*/

const conCate = 'My name is Alan,' + ' I concatenate.'
console.log(conCate);

const ourStr = "I come first. " + "I come second.";
console.log(ourStr);


/* Concatenating Strings with the Plus Equals Operator +=
We can also use the += operator to concatenate 
a string onto the end of an existing string variable

Example
*/

let plusStr = "I come first. ";
plusStr += "I come second.";

console.log(plusStr);

let plusStrOp = "This is the first sentence. ";
plusStrOp += "This is the second sentence.";
console.log(plusStrOp);

/*Constructing Strings with Variables
Sometimes you will need to build a string. 
By using the concatenation operator (+), 
you can insert one or more variables into a string 
you're building.

*/

const ourName = "freeCodeCamp";
const ourPlusStr = "Hello, our name is " + ourName + ", how are you?";

console.log(ourPlusStr);

const myNamePlus = "Chima";
const myPlus = "My name is " + myNamePlus + ", I am well!";
console.log(myPlus);