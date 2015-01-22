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

Array

* symbol: new Array(); var arr = ['...']
* description: a global object constructor of arrays: high-level, list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of an array nor the type of its elements are fixed.
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



