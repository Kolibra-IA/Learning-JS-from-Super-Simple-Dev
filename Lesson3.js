/* Strings

A string represents a text. It is as simple as that, and it is wrapped in quotation marks.

*/

"Kolibra";

/*
    Also, we can add two strings together - a feature called concatenation.
*/

//Input

"Some" + "Text";

//Output:

("SomeText");

/*
    There is this concept called type coercion(automatic type conversion), which happens when numbers are coerced t a string before concatenation.
*/

//Input:

"$" + 98;
s(
  //Output:

  "$98"
);

/*
Strings follow order of operations:
*/

//Input:

"$" + (90 + 9);

//Output:

$99;

/* Template literal: This present a way to evaluate an expression within backticks while maintaining the essence of a string: */

//Input:

`Mind your ${90 + 9} speech`;

//Output:

("Mind your 99 speech");
