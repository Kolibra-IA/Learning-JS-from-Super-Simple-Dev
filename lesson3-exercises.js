
/* 3a. Create the text 'My name is:' as a string. */

'My name is:';

/* 3b. Create your name as a string. */

'Kolibra';

/* 3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is: _' (replace _ with your name). */

//Input:

'My name is: ' + 'Kolibra';

//Output:

'My name is: Kolibra';

/* 3d. At a restaurant, you order 1 coffee($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation
    create the text: 'Total cost:$ _' (replace _ with the total you calculated).
*/

//Input:

'Total cost : $' + (5+3);

//Output:

'Total cost : $8';

/* 3e. Do the same thing as 3d, but use a template string and interpolation. */

//Input:

`Total cost : $${5+3}`;

//Output:

'Total cost : $8';

/* 3f. Display the text from 3e in a popup using alert(...) */

alert(`Total cost : $${5+3}`);

/* 3g. You order 1 coffee($5.99) and 1 bagel ($2.95). Using math, calculate the total, and using concatenation, create the text:
    Total cost: $_' (hint: calculate in cents to avoid inaccuracies).
*/

//Input:

'Total cost: $' + (599+295)/100;

//Output:

'Total cost: $8.94';

/* 3h. Do the same thing as 3g, but use a template string and interpolation. */

//Input:

`Total cost: $${(599+295)/100}`

//Output:

'Total cost: $8.94';

/* 3i. Display the text from 3h in a popup. */

alert(`Total cost: $${(599+295)/100}`);

/* 3j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'.
    Display both lines in a popup.
*/

//Input:

alert(`Total cost: $${(599+295)/100}
    Thank you, come again!
`);
