
/* Question 2a: 
At a restaurant, you order 1 soup for $10, 3 burgers for $8 each , and 1 ice cream for $5.
Use Javascript to calculate the cost of the order.
*/

10+(3*8)+5;

/* Question 2b: 
You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.
*/

3*(10+(3*8)+5);

/* Question 2c: 
Calculate the total cost of a toaster ($18.50) and 2 shirt ($7.50 each).
*/

18.50+(2*7.5);

/* Question 2d: 
Calculate a 10% tax for the total in 2c(remember that 1% = 1/100).
*/

(18.50+(2*7.5)) * 0.1;

/* Question 2e: 
    Calculate a 10% tax for the total in 2c(remember that 1% = 1/100).
*/

(18.50+(2*7.5)) * 0.2;


/* Setup:

In the Amazon project, go to the home page and add a toaster ($18.99) to yur cart so you have 1 basketball, 1 t-shirt, and 1 toaster.
Choose $4.99 shipping for the toaster.

2f. Calculate the cost of the products(before shipping aand taxes). Hint: calculate in cents to avoid inaccuracies.

*/

(1850+750+2193)/100;

/* 
2g. Calculate the Total before tax. 
*/

(1850+750+2193+499)/100;

/* 2h. Calculate the 10% tax exactly. Hint: use Math.round()*/


((1850+750+2193+499)*0.1)/100;


/* 2i. Calculate Order total at the bottom.
*/

(((1850+750+2193+499)) + (((1850+750+2193+499)*0.1)))/100;


/* 2j. Let's say we want to always round a number down (2.8 => 2). Using Google or an A.I. tool, search for the code to do this.
*/

Math.floor(2.8);

/* 2k. Let's always round a number up (2.2 => 3). Serch how to do this: */

Math.ceil(2.2);

/* Challenge Exercises:

We'll use Javascript to cnvert temperatures from Celsius(C) to Fahrenheit(F). The formula is:

- Fahrenheit = (Celsius *9/5) + 32
- Celsius = (Fahrnheit - 32) *5/9

*/

/* 2l. The temperature is 25C. Calculate the temerature in Fahrenheit. */

(25*9/5) + 32;

/* 2m. The temperature is 86F. Calculate the temperature in Celsius. */

(86-32) *5/9;

/* 2n. The temperature is -5C. Calculate the temperature in Fahrenheit. */

(-5*9/5) + 32;