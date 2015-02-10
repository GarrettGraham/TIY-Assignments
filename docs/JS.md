LITERALS

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

    * description: Removes the first element from an array and returns that element. the shift method removes the element at the zeroeth index and shift the values at consecutive indexes down, then returns the removed value. if the length property is 0, undefined is returned. shift is intentionally generic; this method can be called or applie to objects resembling arrays. Objects which do not contain a length property reflecting the last ina series of consecutiv, zero-baed numerical properties may not behave in any meaningful manner.

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
    
    -->the above examples produces the following output. as the output shows, when a compare function is used, numbers sort correctly whether they are numbers or numberic strings:
    
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
    
    -->for sorting strings with non-ASCII characters such as strings with acccented characters, strings from languges other than English: use String.localCompare:
        var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
        items.sort(function (a, b) {
          return a.localeCompare(b);
        });
        // items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

    -->Sorting Maps:
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
====================
Literal: `Array`
Iterator Methods
====================

Array.prototype.forEach()

    -- The forEach() method executes a provided function once per array element.
    
    Description:
    
    forEach() executes the provided callback once for each element present in the array in ascending order. It is not invoked for indexes that have been deleted or elided. However, it is executed for elements that are present and have the value undefined.
    
    `callback` is invoked with three arguments: 1. the element value, 2. the element index, and 3. the array being traversed
    
    if a thisArg parameter is provided to forEAch(), it will be passed to `callback` when invoked, for use as its `this` value. Otherwise, the value undefined will be passed for use as its `this` value. the `this` value ultimately observable by `callback` is determined according the the usual rules for determining the `this` seen by a function.
    
    the range of elements processed by forEach() is set beore the first invocation of `callback`. if the values of existing elements of the array are changed, the value passted to `callback` will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited.
    
    Note: there is no way to stop or break a forEach() loop. The solution is to use Array.prototype.every() or array.prototype.some()
    
    forEach() executes the `callback` function once for each array element; unlike every() and some() it, always returns the value undefined.
    
    * Parameters: 
    
        : callback - function that produces an element of the new Array, taking three arguments:
            1. current value - the current element being processed in the array
            2. index - the indx of the current element being processed in the array
            3. array - the array forEach() was called once

        : thisArg - optional. Value to use as `this` when executing `callback`
        
    example:
    ```
    --Printing the contents of an array: logs a line for each element in an array:
    
    function logArrayElements(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    }

    // Note ellision, there is no member at 2 so it isn't visited
    [2, 5, , 9].forEach(logArrayElements);
    // logs:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9
    
    --Breaking a loop: using array.prototype.every() to log the content of an array and stop when it reaches a value higher than the given THRESHOLD:

    var THRESHOLD = 12;
    VAR V = [5, 2, 16, 4, 3, 18, 20];
    var res;
    
    res = v.every(function(element, index, array) {
        console.log('element:', element);
        if (element >= THRESHOLD) {
        return false;
    }
        return true;
    });
    console.log('res:', res);
    // logs:
    // element: 5
    // element: 2
    // element: 16
    // res: true
    
    --An object copy function: the following code creates a copy of a given object. There are different ways to create a copy of an object...
    
    function copy(o) {
      var copy = Object.create(Object.getPrototypeOf(o));
      var propNames = Object.getOwnPropertyNames(o);

      propNames.forEach(function(name) {
        var desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
      });

      return copy;
    }

    var o1 = { a: 1, b: 2 };
    var o2 = copy(o1); // o2 looks like o1 now
    ```

Array.prototype.every()

    -- The every() method tests whether all elements in the array pass the test implemented by the provided function.
    
    * Description: 
    
    The every method executes the provided callback function once for each element present in the array until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean). If such an element is found, the every method immediately returns false. Otherwise, if callback returned a true value for all elements, every will return true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

    callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

    If a thisArg parameter is provided to every, it will be passed to callback when invoked, for use as its this value.  Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

    every does not mutate the array on which it is called.

    The range of elements processed by every is set before the first invocation of callback. Elements which are appended to the array after the call to every begins will not be visited by callback. If existing elements of the array are changed, their value as passed to callback will be the value at the time every visits them; elements that are deleted are not visited.

    every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)
    
    * parameters:
        * callback: Function to test each element against
            * params:
                * item: element to process
                * index: index of processed element
                * all: array instance
            * returns: Boolean
        * thisArg: `Object` to which to bind `callback`
        returns: `Boolean` whether `callback` returns true for every element
    
    * example:
        ```
        function every(anArray, callback){
          var hasFailed = false; // it hasn't has it?

          // iterate...
          anArray.foreach(function(item, index, all){
            if ( hasFailed ) return; // one failure ruins everything...

            hasFailed = !callback(item, index, all); // why invert here?
          });

          return !hasFailed; // Another inverse?
          // What if `anArray` is empty?
        }
        ```
Array.prototype.some()

    --The some() method tests whether some element in the array passes the test implemented by the provided function.
    * Description: `some` executes the callback function once for each element present in the array until it finds one where `callback` returns a true value. If such an element is found, `some` immediately returns `true`. otherwise, `some` returns `false`. `callback` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.
    `callback` is invoked with three arguments: 1. the value of the element, 2. the index of the element, and 3. the array object being traversed.
    if a `thisArg` parameter is provided to `some`, it will be passed to `callback` when invoked, for use as its `this` value. Otherwise, the value `undefined` will be passed for use as its `this` value. the `this` value ultimately observable by `callback` is determined according to the usual rules for determining the `this` seen by a funtion. 
    `some` does not mutate the array on which it is called
    
    the range of elements processed by `some` is set before the first invocation of `callback`. if an existeing, unvisited element of the array is changed by `callback`, its value passed to the visiting `callback` will be the value at the time that `some` visits that elements index; elements that are deleted are not visited.
    
    * parameters: 
        * callback - function to test for each element, taking three arguments:
            1. currentValue - the current element being processed in the array
            2. index - the index of the current element being processed in the array
            3. array - the array `some` was called upon.
        * thisArg - optional. Value to use as `this` when executing callback.
    * example:
    ```
    Testing value of array elements: the following tests whether any element in the array is bigger than 10:
    
    function isBiggerThan10(element, index, array) {
    return element > 10;
    }
    [2 ,5, 8, 1, 4].some(isBiggerThan10); //false
    [12, 5, 8, 1, 4].some(isBiggerThan10); //true
    
    Testing array elements using arrow functions: Arrow Functions (!!look-up!!) provides a shorter syntax for the same test.
    [2, 5, 8, 1, 4].some(elem => elem > 10); //false
    [12, 5, 8, 1, 4].some(elem => elem > 10); //true
    ```

Array.prototype.filter() 

    --the filter() method creates a new array with all elements that pass the test implemented by the provided function
    
    * description: 
    
        filter() calls a provided `callback` function once for each element in an array, and constructs a new array of all the values for which `callback` returns a true value. `callback` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

        Callback in invoked with three arguments: 
            1. the value of the element 
            2. the index of the element
            3. the array object being traversed

        if a thisArg parameter is provided to filter, it will be passed to callback when invoked, for use as its this value. otherwise, the value undefined will be passed for use as its this value. the this value ultimately  observable by callback is determined according to the usual rules for determining the this seen by a function. 

        filter() does not mutate the array on which it is called.

        the range of elements processed by filter() is set before the first invocation of callback. Elements which are appendd to the array after the call to filter() begins will not be visited by callback. If existing elements of the array are changed, or deleted, their value as passsed to callback will be the value at the time filter() visits them; elemetns that are deleted are not visited.
    
    * parameters: 
    
        callback - function to test each element of the array. 
            Invoke with arguments (element, index, array). 
            Return `true` to keep the element, `false` otherwise
        thisArg - optional. Value to use as `this` when executing `callback`
        
    * exapmle:
    ```
    Filtering out all small values - the following uses filter() to create a filtered array that has all elements with values less than 10 removed:
    
    function isBigEnough(element) {
      return element >= 10;
    }
    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtered is [12, 130, 44]
    
    JSON filtering invalid entries and sorting based on id - the following uses filter() to create a filtered json that all elements with integer id and .txt extension in path. and then sorts the filtered json bason on id.
    
    var arr = [
      { id: 15, path: 'foo.txt' },
      { id: -1, path: 'bar.1.txt' },
      { id: 3, path: 'mine.txt' },
      { id: 12.2, path: 'yours.txt' },
      { id: 12.2, path: 'yours.txt.diff' },
      { path: 'foo.bar.txt' },
      { id: 'null', path: 'mine.txt' },
      { id: 'undefined', path: null },
      { id: undefined, path: null },
      { id: NaN, path: null },
      { id: NaN }
    ];
    var invalidEntries;

    function filterByID(element) {
      if (element.id && typeof(element.id) === 'number') {
        return element;
      }
      else {
        invalidEntries++;
      }
    }

    function filterByExtension(element) {
      if (element.path && typeof(element.path) === 'string') {
        var strToArr = element.path.split('.');
        var extension = strToArr[strToArr.length - 1]; 
        if (extension === 'txt') {
          return element;
        }
        else {
          invalidEntries++;
        }
      }
      else {
        invalidEntries++;
      }
    }

    function sortByID(arr) {
      return arr.sort(function(first, second) {
        return first.id - second.id;
      });
    }

    (function filterSortAndReport(arr) {
      invalidEntries = 0;
      var arrByID = arr.filter(filterByID);
      var filteredArray = arrByID.filter(filterByExtension);
      var sortedArray = sortByID(filteredArray);
      console.log('Filtered And Sorted Array\n', sortedArray);
      console.log('Number of Invalid Entries = ', invalidEntries);
    })(arr);
    ```
Array.prototype.map()

    --The map() method creates a new array with the results of calling a provided function on every element in this array.
    
    * description: map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes that are undefined, those which have been deleted or which have never been assigned values.

    callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

    If a thisArg parameter is provided to map, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

    map does not mutate the array on which it is called (although callback, if invoked, may do so).

    The range of elements processed by map is set before the first invocation of callback. Elements which are appended to the array after the call to map begins will not be visited by callback. If existing elements of the array are changed, or deleted, their value as passed to callback will be the value at the time map visits them; elements that are deleted are not visited.

    * parameters:
    
        * callback - function that produces an element of the new Array, taking three arguments:
            currentValue - the current element being processed in the array
            index - the indx of the current element being processed in the array
            array - the array map was called upon
            
        * thisArg - optional. Value to use as this when executing callback
        
    * example:
    ```
    --Mapping an array of numbers to an array of square roots: the following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.
    
    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    // roots is now [1, 2, 3], numbers is still [1, 4, 9]
    
    --Mapping an array of numbers using a function containing an argument: The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned to each element of the array as map loops through the original array.
    
    var numbers = [1, 4, 9];
    var doubles = numbers.map(function(num) {
      return num * 2;
    });
    // doubles is now [2, 8, 18]. numbers is still [1, 4, 9]
    
    --using map generically: This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values
    
    var map = Array.prototype.map;
    var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
    // a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    
    --using map generically querySelectorAll: shows how to iterate through a collection of objects collected by querySelectorAll. In this case we get all selected options on the screen and printed on the console:
    
    var elems = document.querySelectorAll('select option:checked');
    var values = [].map.call(elems, function(obj) {
      return obj.value;
    });
    
    --using map to reverse a string
    
    var str = '12345';
    [].map.call(str, function(x) {
      return x;
    }).reverse().join(''); 

    // Output: '54321'
    // Bonus: use '===' to test if original string was a palindrome
    
    ```

Array.prototype.reduce()

    --The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.
    
    * description: 
    
        reduce executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments: the initial value (or value from the previous callback call), the value of the current element, the current index, and the array over which iteration is occurring.

    The first time the callback is called, previousValue and currentValue can be one of two values. If initialValue is provided in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array. If no initialValue was provided, then previousValue will be equal to the first value in the array and currentValue will be equal to the second.

    If the array is empty and no initialValue was provided, TypeError would be thrown. If the array has only one element (regardless of position) and no initialValue was provided, or if initialValue is provided but the array is empty, the solo value would be returned without calling callback.
    
    Suppose the following use of reduce occurred:

        [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
          return previousValue + currentValue;
        });
        The callback would be invoked four times, with the arguments and return values in each call being as follows:

            previousValue	currentValue	index	array	return value
        first call	0	1	1	[0, 1, 2, 3, 4]	1
        second call	1	2	2	[0, 1, 2, 3, 4]	3
        third call	3	3	3	[0, 1, 2, 3, 4]	6
        fourth call	6	4	4	[0, 1, 2, 3, 4]	10
        The value returned by reduce would be that of the last callback invocation (10).

        If you were to provide an initial value as the second argument to reduce, the result would look like this:

        [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
          return previousValue + currentValue;
        }, 10);
            previousValue	currentValue	index	array	return value
        first call	10	0	0	[0, 1, 2, 3, 4]	10
        second call	10	1	1	[0, 1, 2, 3, 4]	11
        third call	11	2	2	[0, 1, 2, 3, 4]	13
        fourth call	13	3	3	[0, 1, 2, 3, 4]	16
        fifth call	16	4	4	[0, 1, 2, 3, 4]	20
        The value returned by reduce this time would be, of course, 20

    * parameters: 
    
        callback - Function to execute on each value in the array, taking four arguments:
            1. previousValue - The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
            2. currentValue - The current element being processed in the array.
            3. index - The index of the current element being processed in the array.
            4. array - The array reduce was called upon.

        initialValue - Optional. Object to use as the first argument to the first call of the callback.
        
    * example:
    ```
    Sum up all values within an array

        var total = [0, 1, 2, 3].reduce(function(a, b) {
          return a + b;
        });
        // total == 6
        
    Flatten an array of arrays

        var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
          return a.concat(b);
        });
        // flattened is [0, 1, 2, 3, 4, 5]

    ```

Array.prototype.reduceRight()

    --The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.
    
    * description: 
        
    reduceRight executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments: the initial value (or value from the previous callback call), the value of the current element, the current index, and the array over which iteration is occurring.

    The call to the reduceRight callback would look something like this:
    
    ```
    array.reduceRight(function(previousValue, currentValue, index, array) {
      // ...
    });
    ```
    
    The first time the function is called, the previousValue and currentValue can be one of two values. If an initialValue was provided in the call to reduceRight, then previousValue will be equal to initialValue and currentValue will be equal to the last value in the array. If no initialValue was provided, then previousValue will be equal to the last value in the array and currentValue will be equal to the second-to-last value.

    If the array is empty and no initialValue was provided, TypeError would be thrown. If the array has only one element (regardless of position) and no initialValue was provided, or if initialValue is provided but the array is empty, the solo value would be returned without calling callback.

    Some example run-throughs of the function would look like this:

    [0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    });
    The callback would be invoked four times, with the arguments and return values in each call being as follows:

        previousValue	currentValue	index	array	return value
    first call	4	3	3	[0, 1, 2, 3, 4]	7
    second call	7	2	2	[0, 1, 2, 3, 4]	9
    third call	9	1	1	[0, 1, 2, 3, 4]	10
    fourth call	10	0	0	[0, 1, 2, 3, 4]	10
    The value returned by reduceRight would be that of the last callback invocation (10).

    And if you were to provide an initialValue, the result would look like this:

    [0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    }, 10);
        previousValue	currentValue	index	array	return value
    first call	10	4	4	[0, 1, 2, 3, 4]	14
    second call	14	3	3	[0, 1, 2, 3, 4]	17
    third call	17	2	2	[0, 1, 2, 3, 4]	19
    fourth call	19	1	1	[0, 1, 2, 3, 4]	20
    fifth call	20	0	0	[0, 1, 2, 3, 4]	20
    The value returned by reduceRight this time would be, of course, 20.
    
    * parameters:
    
        : callback - Function to execute on each value in the array, taking four arguments:
            1. previousValue - The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
            2. currentValue - The current element being processed in the array.
            3. index - The index of the current element being processed in the array.
            4. array - The array reduce was called upon.
        : initialValue - Optional. Object to use as the first argument to the first call of the callback.
    
    * example:
    ```
    Sum up all values within an array:

        var total = [0, 1, 2, 3].reduceRight(function(a, b) {
          return a + b;
        });
        // total == 6
        
    Flatten an array of arrays:

        var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
            return a.concat(b);
        }, []);
        // flattened is [4, 5, 2, 3, 0, 1]
    ```




RegExp (Regular Expression)

    --The RegExp constructor creates a regular expression object for matching text with a pattern.

* symbol: 
    Literal and constructor notations are possible:
        /pattern/flags
        newRegExp(pattern[, flags])

* Parameters: 
    pattern - the text of the regular expression
    flags - if specified, flags can have any combination of the following values: 
        g - global match
        i - ignore case
        m - multiline, treat beginning and end characters(^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginnin or end othe whole input string
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



===============================================
Standard Built-in Objects
===============================================

============================
 DATE : An Object Container
============================
    SUMMARY:
        Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is
        the number of milliseconds since 1 January, 1970 UTC.

    CONSTRUNTOR:
        
        ```
        new Date();
        new Date(value);
        new Date(datestring);
        new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
        ```
        
            Note: JavaScript Date objects can only be instantiated by calling JavaScript Date as a constructor: calling it as a
            regular function (i.e. without the new operator) will return a string rather than a Date object; unlike other JavaScript
            object types, JavaScript Date objects have no literal syntax.
            
    PARAMETERS:
    
            Note: Where Date is called as a constructor with more than one argument, if values are greater than their logical range
            (e.g. 13 is provided as the month value or 70 for the minute value), the adjacent value will be adjusted. E.g. new
            Date(2013, 13, 1) is equivalent to new Date(2014, 1, 1), both create a date for 2014-02-01 (note that the month is 0
            based). Similarly for other values: new Date(2013, 2, 1, 0, 70) is equivalent to new Date(2013, 2, 1, 1, 10) which both
            create a date for 2013-03-01T01:10:00.
            
        :value - integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).
        
        :dataString - String value representing a date. The string should be in a format recognized by the Date.parse() method 
                        (IETF-compliant RFC 2822 timestamps and also a version of ISO8601  WTF does this mean???).
        
        :year - Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999. (see ex. below)
        
        :month - Integer value representing the month, beginning with 0 for January to 11 for December.
        
        :day - Optional. Integer value representing the day of the month.
        
        :hour - Optional. Integer value representing the hour of the day
        
        :minute - Optional. Integer value representing the minute segment of a time.
        
        :second - Optional. Integer value representing the second segment of a time.
        
        :millisecond - Optional. Integer value representing the millisecond segment of a time.
        
    DESCRIPTION:
        
        :If no arguments are provided, the constructor creates a JavaScript Date object for the current date and time according to
        system settings.
        
        :If at least two arguments are supplied, missing arguments are either set to 1 (if day is missing) or 0 for all others.
        
        :The JavaScript date is based on a time value that is milliseconds since midnight 01 January, 1970 UTC. A day holds
        86,400,000 milliseconds. The JavaScript Date object range is -100,000,000 days to 100,000,000 days relative to 01 January,
        1970 UTC.
        
        :The JavaScript Date object provides uniform behavior across platforms. The time value can be passed between systems to
        represent the same moment in time and if used to create a local date object, will reflect the local equivalent of the time.
        
        :The JavaScript Date object supports a number of UTC (universal) methods, as well as local time methods. UTC, also known as
        Greenwich Mean Time (GMT), refers to the time as set by the World Time Standard. The local time is the time known to the
        computer where JavaScript is executed.
        
        :Invoking JavaScript Date as a function (i.e., without the new operator) will return a string representing the current date
        and time.
        
    PROPERTIES:
        
        Date.prototype - Allows the addition of properties to a JavaScript Date object.
        
        Date.length - The value of Date.length is 7. This is the number of arguments handled by the computer.
        
            ```
            Properties inherited from Function: arity, caller, constructor, length, name
            ```
    
    METHODS
    
        Date.now()  - Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1
        January 1970 00:00:00 UTC.

        Date.parse() - Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970,
        00:00:00, UTC.

        Date.UTC() - Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of
        milliseconds since 1 January, 1970, 00:00:00 UTC.
        
            ```
            Methods inherited from Function: apply, call, toSource, toString
            ```
            
    JAVA SCRIPT DATE INSTANCES - All date instances inherit from Date.prototype. The prototype object of the Date constructor can be
                                modified to affect all Date instances.
                                
        Date.prototype Methods:
            
            Getter:
            
                Date.prototype.getDate() - Returns the day of the month (1-31) for the specified date according to local time
                
                Date.prototype.getDay() - Returns the day of the week (0-6) for the specified date according to local time.

                Date.prototype.getFullYear() - Returns the year (4 digits for 4-digit years) of the specified date according to                                                     local time.

                Date.prototype.getHours() - Returns the hour (0-23) in the specified date according to local time.

                Date.prototype.getMilliseconds() - Returns the milliseconds (0-999) in the specified date according to local time.

                Date.prototype.getMinutes() - Returns the minutes (0-59) in the specified date according to local time.

                Date.prototype.getMonth() - Returns the month (0-11) in the specified date according to local time.

                Date.prototype.getSeconds() - Returns the seconds (0-59) in the specified date according to local time.

                Date.prototype.getTime() - Returns the numeric value of the specified date as the number of milliseconds since
                                            January 1, 1970, 00:00:00 UTC (negative for prior times).

                Date.prototype.getTimezoneOffset() - Returns the time-zone offset in minutes for the current locale.

                Date.prototype.getUTCDate() - Returns the day (date) of the month (1-31) in the specified date according to
                                                universal time.

                Date.prototype.getUTCDay() - Returns the day of the week (0-6) in the specified date according to universal time.

                Date.prototype.getUTCFullYear() - Returns the year (4 digits for 4-digit years) in the specified date according to
                                                    universal time.
                                                    
                Date.prototype.getUTCHours() - Returns the hours (0-23) in the specified date according to universal time.

                Date.prototype.getUTCMilliseconds() - Returns the milliseconds (0-999) in the specified date according to universal
                                                        time.
                                                        
                Date.prototype.getUTCMinutes() - Returns the minutes (0-59) in the specified date according to universal time.

                Date.prototype.getUTCMonth() - Returns the month (0-11) in the specified date according to universal time.

                Date.prototype.getUTCSeconds() - Returns the seconds (0-59) in the specified date according to universal
                                                    time.

                Date.prototype.getYear() - ::Deprecated:: Returns the year (usually 2-3 digits) in the specified date
                                                according to local time. Use getFullYear() instead.
                
            Setter:
            
                Date.prototype.setDate() - Sets the day of the month for a specified date according to local time.

                Date.prototype.setFullYear() - Sets the full year (e.g. 4 digits for 4-digit years) for a specified date
                                                according to local time.
                                                
                Date.prototype.setHours() - Sets the hours for a specified date according to local time.

                Date.prototype.setMilliseconds() - Sets the milliseconds for a specified date according to local time.

                Date.prototype.setMinutes() - Sets the minutes for a specified date according to local time.

                Date.prototype.setMonth() - Sets the month for a specified date according to local time.

                Date.prototype.setSeconds() - Sets the seconds for a specified date according to local time.

                Date.prototype.setTime() - Sets the Date object to the time represented by a number of milliseconds since
                                            January 1, 1970, 00:00:00 UTC, allowing for negative numbers for times prior.

                Date.prototype.setUTCDate() - Sets the day of the month for a specified date according to universal time.

                Date.prototype.setUTCFullYear() - Sets the full year (e.g. 4 digits for 4-digit years) for a specified
                                                    date according to universal time.

                Date.prototype.setUTCHours() - Sets the hour for a specified date according to universal time.

                Date.prototype.setUTCMilliseconds() - Sets the milliseconds for a specified date according to universal
                                                        time.

                Date.prototype.setUTCMinutes() - Sets the minutes for a specified date according to universal time.

                Date.prototype.setUTCMonth() - Sets the month for a specified date according to universal time.

                Date.prototype.setUTCSeconds() - Sets the seconds for a specified date according to universal time.

                Date.prototype.setYear() - ::Deprecated:: Sets the year (usually 2-3 digits) for a specified date
                                                according to local time. Use setFullYear() instead.
                                            
            Conversion Getter: 
            
                Date.prototype.toDateString() - Returns the "date" portion of the Date as a human-readable string.

                Date.prototype.toISOString() - Converts a date to a string following the ISO 8601 Extended Format.

                Date.prototype.toJSON() - Returns a string representing the Date using toISOString(). Intended for use by
                                            JSON.stringify().

                Date.prototype.toGMTString() - Returns a string representing the Date based on the GMT (UT) time zone. Use
                                                toUTCString() instead.

                Date.prototype.toLocaleDateString() - Returns a string with a locality sensitive representation of the
                                                        date portion of this date based on system settings.

                Date.prototype.toLocaleFormat() - Converts a date to a string, using a format string.

                Date.prototype.toLocaleString() - Returns a string with a locality sensitive representation of this date.
                                                    Overrides the Object.prototype.toLocaleString() method.

                Date.prototype.toLocaleTimeString() - Returns a string with a locality sensitive representation of the
                                                        time portion of this date based on system settings.

                Date.prototype.toSource() - Returns a string representing the source for an equivalent Date object; you
                                                can use this value to create a new object. Overrides the
                                                Object.prototype.toSource() method.

                Date.prototype.toString() - Returns a string representing the specified Date object. Overrides the
                                                Object.prototype.toString() method.
                                                
                Date.prototype.toTimeString() - Returns the "time" portion of the Date as a human-readable string.

                Date.prototype.toUTCString() - Converts a date to a string using the UTC timezone.

                Date.prototype.valueOf() - Returns the primitive value of a Date object. Overrides the
                                            Object.prototype.valueOf() method.
                                            
                                        
                    ```                        
                    Methods inherited from Object: __defineGetter__, __defineSetter__, hasOwnProperty,
                                                    isPrototypeOf, __lookupGetter__, __lookupSetter__,
                                                    __noSuchMethod__, propertyIsEnumerable, unwatch, watch
                    ```
    EXAMPLES:
        * several ways to create JavaScript dates
    ```
    var today = new Date ();
    var birthday = new Date('December 17, 1995 03:24:00');
    var birthday = new Date('1995-12-17T03:24:00');
    var birthday = new Date(1995, 11, 17);
    var birthday = new Date(1995, 11, 17, 3, 24, 0);
    ```
    
    Two digit years map to 1900 - 1999
        * In order to create and get dates between the years 0 and 99 the Date.prototype.setFullYear() 
            and Date.prototype.getFullYear() methods should be used
    ```
    var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

    // Deprecated method, 98 maps to 1998 here as well
        date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

        date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
    ```
    
    Calculating elapsed time
        * show how to determine the elapsed time between two JavaScript dates:
    ```
    // using Date objects
        var start = Date.now();

    // the event to time goes here:
        doSomethingForALongTime();
        var end = Date.now();
        var elapsed = end - start; // elapsed time in milliseconds
    ```
    
    ```
    // using built-in methods
        var start = new Date();

    // the event to time goes here:
        doSomethingForALongTime();
        var end = new Date();
        var elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds    
    ```
    
    ```
    // to test a function and get back its return
        function printElapsedTime(fTest) {
          var nStartTime = Date.now(),
              vReturn = fTest(),
              nEndTime = Date.now();

          console.log('Elapsed time: ' + String(nEndTime - nStartTime) + ' milliseconds');
          return vReturn;
        }

    yourFunctionReturn = printElapsedTime(yourFunction);
    ```
    
    Note: In browsers that support the Web Performance API's high-resolution time feature, 
    Performance.now() can provide more reliable and precise measurements of elapsed time than Date.now().
    
    Browser compatability: all
    

==========================
WindowTimers.setInterval()
==========================

    SUMMARY:
        calls a function or executes a code snippet repeatedly, with a fixed time
        delay between each call to that function. Returns an intervalID.
        
    SYNTAX:
        ```
        var intervalID = window.setInterval(func, delay[, param1,
        var intervalID = window.setInterval(code, delay);
        ```
        * intervalID is a unique interval ID you can pass to clearInterval().
        * func is the function you want to be called repeatedly
        * code in the alternate syntax, is a string of code you want to be executed repeatedly
            (using this syntax is not recommended for the same reasons as using eval() )
        * delay is the number of milliseconds (thousandths of a second) that the setInterval() 
            function should wait before each call to func. As with setTimeout, there is a minimum delay
            enforced
        
        Note that passing additional parameters to the function in the first syntax does not
        work in IE 9 and betow. If you want to enable this functionality on that browser you must use a 
        a compatibility code (see the Callback arguments paragraph).
        
        Note: Prior to Gecko 13 (Firefox 13.0 / Thunderbird 13.0 / SeaMonkey 2.10), Gecko passed an 
                extra parameter to the callback routine, indicating the "actual lateness" of the timeout 
                in milliseconds. This non-standard parameter is no longer provided.
        
        Note: Within scope of extension development you should use this method with care, because 
                window object could be updated during such events as checking for extensions' updates 
                and hence timers that attached to it could be lost (as shown in Addons developer forum example). 
                In such case nsITimer interface can provide more reliable results.
                
    EXAMPLES: 
    
        Generic
        ```
        var intervalID = window.setInterval(animate, 500);
        ```
        
        Example 2: Alternating two colors
            * the following will continue to call the flashtext() function once a second, until you 
                clear the intervalID by blicking the Stop Button
    