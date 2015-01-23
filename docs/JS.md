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

    * symbol: arr.reverse()

    * description: Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. the reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

    *parameters: none

    *examples: 
    ```
    //the following creates an array myArray, containing three elements, then reverses the array.

    var myArray = ['one', 'two', 'three'];
    myArray.reverse();

    console.log(myArray) // ['three', 'two', 'one'] 
    ```

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

    * symbol: arr.sort([compareFunction])

    * description: Sorts the elements of an array in place and returns the array. the sort is not necessarily stable (When sorting some kinds of data, only part of the data is examined when determining the sort order i.e. sorting by color). the default sort order is according to string Unicode code points. if compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For exmple, "Cherry" comes before "banana". In a numberic sort, 9 comes before 80, but bcause numbers are converted to strings, "80" comes before "9" in unicode order.

    * parameters: 
        compareFunction: optional. Specifies a function that defines the sort order. if omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
        if comparFunction is supplied, the array elements are sorted according to the return value of the compare function. if a and b are two elements being compared, then:
        
    --If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
    --If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
    --If compareFunction(a, b) is greater than 0, sort b to a lower index than a. 
    --compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined

    * example: 
    ```
    the compare funtion has the following form:
    
    function compare(a, b) {
        if (a is less than b by some ordering  criterion) {
    return -1;
      }
      if (a is greater than b by the ordering criterion) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
    
    to compare numbers instead of strings, the compare function can simply subract b from a. the following function will sort the array ascending:
    
    function compareNumbers(a, b) {
        return a - b;
    }
    
    the sort method can be conveniently used with function expression (and closures):
    
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
        return a - b;
        });
        print(numbers);
        
    Objects can be sorted givn the value of one of their properties:
    
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic' },
      { name: 'Zeros', value: 37 }
    ];
    items.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
        
        var stringArray = ['Blue', 'Humpback', 'Beluga'];
    var numericStringArray = ['80', '9', '700'];
    var numberArray = [40, 1, 5, 200];
    var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

    function compareNumbers(a, b) {
      return a - b;
    }

    // again, assumes a print function is defined
    console.log('stringArray:', stringArray.join());
    console.log('Sorted:', stringArray.sort());

    console.log('numberArray:', numberArray.join());
    console.log('Sorted without a compare function:', numberArray.sort());
    console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

    console.log('numericStringArray:', numericStringArray.join());
    console.log('Sorted without a compare function:', numericStringArray.sort());
    console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

    console.log('mixedNumericArray:', mixedNumericArray.join());
    console.log('Sorted without a compare function:', mixedNumericArray.sort());
    console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
    
    the above examples produces the following output. as the output shows, when a compare function is used, numbers sort correctly whether they are numbers or numberic strings:
    
    stringArray: Blue,Humpback,Beluga
    Sorted: Beluga,Blue,Humpback

    numberArray: 40,1,5,200
    Sorted without a compare function: 1,200,40,5
    Sorted with compareNumbers: 1,5,40,200

    numericStringArray: 80,9,700
    Sorted without a compare function: 700,80,9
    Sorted with compareNumbers: 9,80,700

    mixedNumericArray: 80,9,700,40,1,5,200
    Sorted without a compare function: 1,200,40,5,700,80,9
    Sorted with compareNumbers: 1,5,9,40,80,200,700
    
    for sorting strings with non-ASCII characters such as strings with acccented characters, strings from languges other than English: use String.localCompare:
        var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
        items.sort(function (a, b) {
          return a.localeCompare(b);
        });
        // items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

    Sorting Maps:
        The compareFunction can be invoked multiple times per element within the array. Depending on the compareFunction's nature, this may yield a high overhead. the more work a compareFunction does and the more elements there are to sort, the wiser it may be to consider using a map for sorting. the idea is to walk the aray once to extract the actual values used for sorting into a temporary array, sort the temporary array and then walk the temporary array to bring the original array into the right order
    // the array to be sorted
        var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

    // temporary holder of position and sort-value
        var map = list.map(function(e, i) {
          return { index: i, value: e.toLowerCase() };
        })

    // sorting the map containing the reduced values
        map.sort(function(a, b) {
          return +(a.value > b.value) || +(a.value === b.value) - 1;
        });

    // container for the resulting order
        var result = map.map(function(e){
          return list[e.index];
        });
    
    ```


Array.prototype.splice()

    * symbol: array.splice(start, deleteCount[, item1[, item2[, ...]]])

    * description: if you specify a different number of elements to insert than the number you're removing, the array will have a different length at the end of the call.

    * result: the splice method changed the conteent of an array by adding and/or removing elements from an array.

    * parameters: 

    start: index at which to start changing the array. if greater than the length of the array. if greater than the length of the array, actual starting index will be set to the length of the array. if negative, will begin that many elements from the end

    deleteCount: an integer indicating the number of old array elements to remove. if deleteCount is 0, no elements are removed. in this case, you should specify at least one new element. if deleteCount is greater than the number of elements left in the array starting at index, then all of the elements through the end of the array will be deleted.

    itemN: the element to add to the array. if you dont specify any elements, splice will only remove elements from the array.

    * returns: the splice method returns an array containing the deleted elements. if only one element is removed, an array ofone element is returned. if no elements are removed, an empty array is returned.

    * examples:
    ```
    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    // removes 0 elements from index 2, and inserts 'drum'
    var removed = myFish.splice(2, 0, 'drum');
    // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
    // removed is [], no elements removed

    // removes 1 element from index 3
    removed = myFish.splice(3, 1);
    // myFish is ['angel', 'clown', 'drum', 'surgeon']
    // removed is ['mandarin']

    // removes 1 element from index 2, and inserts 'trumpet'
    removed = myFish.splice(2, 1, 'trumpet');
    // myFish is ['angel', 'clown', 'trumpet', 'surgeon']
    // removed is ['drum']

    // removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
    removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
    // myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
    // removed is ['angel', 'clown']

    // removes 2 elements from index 3
    removed = myFish.splice(3, Number.MAX_VALUE);
    // myFish is ['parrot', 'anemone', 'blue']
    // removed is ['trumpet', 'surgeon']
    ```

Array.prototype.unshift()

    * symbol: arr.unshift([element1[, ...[, elementN]]])

    * description: Adds one or more elements to the front of an array and returns the new length of the array. the unshift method inserts the given values to the beginning of an array-like object. unshift is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numberical properties may not behave in any meaningful manner

    * parameters: 
    elementN: elements to add to the front of the array

    * returns: the new length property of the object upon which the method was called

    * examples:
    ```
    var arr = [1, 2];

    arr.unshift(0); //result of call is 3, the new array length
    //arr is [0, 1, 2]

    arr.unshift(-2, -1); // = 5
    // arr is [-2, -1, 0, 1, 2]

    arr.unshift([-3])
    // arr is [[-3], -2, -1, 0, 1, 2]
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
* definition: 
* pronunciation: var assert = require('assert');
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



