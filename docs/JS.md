Primative: Null

* symbol: null
* description: a.k.a. - a Literal - truthy vs. falsy - " 'intentionally blank' - such as empty brackets/braces etc." 
* pronunciation: "null", "null value", "is null"
* examples:
```
null // 
```


Primative: Boolean

* symbol: new Boolean([value])
* description: a.k.a. - a Literal
* pronunciation: "x = Boolean(expression)";"new Boolean(false)";"new Boolean(true)"
* examples:
```
x = new Boolean(false);
if (x) {
  // this code is executed
}

null == null // true

undefined == null // false
```


Primative: Number

* symbol: Number()
* description: Number is a J.S. object which is an object wrapper that allows manipulation of numeric values.
* pronunciation: "new Number(value);"
* examples:
```
To Assign Values to Numeric Variables:
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;


Integer Range:
var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;


To Convert a Date object:
var d = new Date('December 17, 1995 03:24:00');
print(Number(d));


Convert Numeric Strings to Numbers:
Number("123")     // 123
Number("")        // 0
Number("0x11")    // 17
Number("0b11")    // 3
Number("0o11")    // 9
Number("foo")     // NaN
Number("100a")    // NaN
```


Primative: String

* symbol: String()
* description:	
* pronunciation: 'string(thing)';"String(thing)";"new String(thing)"; 'a'
* examples:
```
var outputStrings = [];
for (var i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```


Primative: Symbol (new in ECMAScript6)

* symbol: Symbol([description])
* description:
* pronunciation:
* examples:
```
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
```



Primative: undefined

* symbol: undefined
* description: "'the default 'empty'. A primitive value automatically assigned to just-declared variables and formal arguments for which there are no actual arguments."
* pronunciation:
* examples:
```
var x;
if (x === undefined) {
   // these statements execute
}
else {
   // these statements do not execute
}

```


Object

* symbol: new Object()
* description: the object constructor creates an object wrapper for the given value
* pronunciation: "Object"
* examples:
```
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])
```

ARRAY: Objects and Literals

* symbol: new Array(); var arr = ['...']
    arrayLength:
    elementN
* description: a global object constructor of arrays: high-level, list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of an array nor the type of its elements are fixed.
* Accessing Array Elements: JS arrays are zero index: the first element of an array is at index 0, and the last element is at the index equal to the value of the arrays length property minus 1
    ```
    var arr = ['this is the first element', 'this is the second element'];
    console.log(arr[0]);              // prints 'this is the first element'
    console.log(arr[1]);              // prints 'this is the second element'
    console.log(arr[arr.length - 1]); // prints 'this is the last element'
    ```
* pronunciation: 
* examples:
```
var msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('The length is 100.');
}
```

Array.length

* symbol: array.length; arr.length

* description: the value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power. you can set the length property to truncate an array at any time. when you extend an array by changing its length property, the number of actual elements does not increase; for ex: if you set length to 3 when it is currently 2, the array still contains only 2 elements. thus the legth property says nothing about the number of defined values in the array.

* result: 

* parameters: no

* pronunciation: array.length; array.prototype.length

* examples:
```
// Iterating over an array. in the following, the array numbers is iterated through by looking at the length property to see how many elements it has. the value in each element is then doubled.

var numbers = [1,2,3,4,5];

for(var i = 0; i < numbers.length; i++) {
numbers[i] *= 2;
}
// number is now [2,4,6,8,10]

shortening an array:

if (statesUS.length > 50) {
statesUS.length = 50;
}
```

Array.prototype.pop()

* symbol: arr.pop()

* result: Removes the last element from an array and returns that value/element to the calleer. pop is intentionally generic; this method can be called or applied to objects resemebling. If you call pop() on an empty array, it returns an undefined value
* parameters: no
* returns: the last element removed from an array
* pronunciation: arr.pop(), var popped = myFish.pop()


* exmples:
```
//removing the last element of an array

var myFish = ['angel','clown', 'mandarin', 'sturgeon'];

console.log(myFish); 

var popped = myFish.pop();

console.log(myFish);

console.log(popped);
```

Array.prototype.push()

* symbol: arr.push(element1, ..., elementN)

* pronunciation: Adds one or more elements to the end of an array and returns the new length of the array. the push method adds values to an array. push is intentioanlly generic. the push method can be used with call() or apply() on objects resembling arrays. The push method relies on a legth property to determine where to start inserting the given values. if the length property cannot be converted into a number, the index used is 0. the only native, array-like objects are strings, although they are not suitable in applications of this method, as strings are immutable.

* parameters: elementN represents the elements to add to the end of the array.

* Returns: the new length property of the object upon which the method was called.

* examples:
```
Adding elements to an array: 

var sports = ['soccer', 'baseball'];
var total = sports.push('footbal','swimming');

console.log(sports); // ['soccer',
'baseball', 'football', 'swimming']

console.log(total);  // 4

Merging two arrays: uses apply() to merge elements from a second array

var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Array.prototype.reverse()
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.

Array.prototype.shift()

* symbol: arr.shift()

* description: Removes the first element from an array and returns that element. the shift method removes the element at the zeroeth index and shift the values at consecutive indexes down, then reutns the removed value. if the length property is 0, undefined is returned. shift is intentionally generic; this method can be called or applie to objects resembling arrays. Objects which do not contain a length property reflecting the last ina series of consecutiv, zero-baed numerical properties may not behave in any meaningful manner.

* examples:
```
var myFish = ['angel', 'clown', 'mandarin', 'sugeon'];

console.log('myFish before: ' + myFish);

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
console.log('Removed this elemetn: ' + shifted);

//This example displays the following:

myFish before: angel.clowm,mandarinn,surgeon

myFish after: clown,mandarin,surgeon
Removed this element: angel

```

Array.prototype.sort()
Sorts the elements of an array in place and returns the array.

Array.prototype.splice()
Adds and/or removes elements from an array.

Array.prototype.unshift()
Adds one or more elements to the front of an array and returns the new length of the array.





RegExp (Regular Expression)

* symbol: 
* description:
* pronunciation:
* examples:
```

```

Assert
* symbol:
* definition: var assert = require('assert');
* pronunciation:
* examples:
```

```

Infinity

* symbol: 
* description:
* pronunciation:
* examples:
```

```

NaN

* symbol: NaN 
* description: 'indescriminate number'. NaN is returned if the argument cannot be converted into a number
* pronunciation:
* examples:
```

```

Operators:

Assignment
Comparison
Arithmetic
Bitwise
Logical 
String
Special

JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. 

A binary operator requires two operands, one before the operator and one after the operator: operand1 operator operand2

A unary operator requires a single operand, either before or after the operator: operator operand or operand operator

Operator: Addition

* symbol: 
* pronunciation:
* examples:
```

```

Operator: Modulus

* symbol: %
* pronunciation:
* examples:
```

```

Operator: Typeof

* symbol: typeof
* pronunciation: 
* examples:
```
// x has not been defined before
if (typeof x === 'undefined') { // evaluates to true without errors
   // these statements execute
}

if(x === undefined){ // throws a ReferenceError

}

typeof 12345 // 'number'

typeof NaN // 'number'

typeof 'a' // 'string'
```

FUNCTIONS

function

function - generator

return

* symbol: return [[expression]]
* usage: ends function execution and specifies a value to be returned to the function caller.  The expression to return. if omitted, undefined is returned instead
* pronunciation: 
* examples:
```
function magic(x) {
  return function calc(x) { return x * 42};
}

var answer = magic();
answer(1337); // 56154

function square(x) {
   return x * x;
}
```



CONTROL-FLOW STATEMENTS


block Statement:

break Statement:

continue Statement:

Conditional Statements:

if...else

* symbol: if () {} else {} 
* description: if (condition) { statement1; } else { statement2 ;}
* usage: 'if' statements execute a statement if a logical condition is true, use the 'else' to execute a statement if the condition is false. else...if clause allows you to combine conditional functions.
* pronunciation: 'if' some condition is true return x, else (if condition is false) return y.
* examples:
```

 if (condition_1) {
     statement_1;
 } else if (condition_2) {
     statement_2;
 } else if (condition_n) {
     statement_n;
 } else {
     statement_last;
 }
 
?? To execute multiple statements, group them within a block statement ({ ... })

if (condition) {
    statement_1_runs_if_condition_is_true;
    statement_2_runs_if_condition_is_true;
} else {
    statement_3_runs_if_condition_is_false;
    statement_4_runs_if_condition_is_false;
}

function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
      document.form1.threeChar.value + " is not valid.");
    return false;
  }
```

switch

Loop Statements:

do...while Statements:

while Statements:

label Statement:



Object Manipulation Statements:



