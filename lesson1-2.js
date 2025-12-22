
/*Lesson 1

- Learnt about what Javascript is: a language to give instructions to the computer for execution.

- Wrote basic Javascript code in the console: */

// Input:
alert ('Kolibra');

//Output(A pop-up window displaying whatever goes in the brackets):

Kolibra

/*
 - Write some code to evaluate an expression: */

 10-4


/* Lesson 2*/

/* Number and Math
This was done directly in the console, but here is the code:
*/

// Input:
2*2
// Output
4

//Input:
5+5
//Output:
10

/* Order of Operations and Brackets:
- Brackets are priotized first.
- Multiplication and division have the same priority and come second on the priority scale. 
- Addition and subtraction have the same priority and come third on the scale.
- To boot, when two operations with the same priority are involved in an expression, the expression is executed from left to right.
*/

// Input:
5+6*6

//Output:
41 

//Input
(8-2)*8

//Output:
48


/*
Rounding Numbers
*/

//Input:
Math.round(89.9);

//Output:
89

/*
Finally, I learnt that calculations involving floats can be inaccurate. 
To address this problem when working with money, just convert each amount to its cent equivalent.
Then, convert the result back to dollars.
If you are working with just numbers instead of money, you can just...
... multiply by 10, 100 or anything that convert the number to an integer.
When you are done, you can convert the result back to its original form by dividing by the number(10, 100 or anything) used in the initial multiplication, with some caution!
*/

//Input:
4.7 + 6.9

//Output
11.600000000000001

//Fix

//Input:
(47+69)/10

//Output
11.6
