_.every

parameters:
    : Array|Object|String collection to iterate over
    : Function|Object|String predicate considered for each iteration
        * a callback Function:
            :is invoked with: value, index|key, collection
            :should return Boolean whether iteration passes predicate
        * an Object is compared like _.matches
        * a String is compared like _.property
    : thisArg binding for predicate

returns:
    : Boolean whether predicate passes for every value in collection

differences:
    : not just for Array; can be run with Object and String as collection
    : predicate can be Object or String...?
    


_.forEach(collection, [iteratee=_.identity], [thisArg])

    Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg and invoked with three arguments; (value, index|key, collection). Iterator functions may exit iteration early by explicitly returning false. 

    Note: As with other "Collections" methods, objects with a length property are iterated like arrays. To avoid this behavior _.forIn or _.forOwn may be used for object iteration.

    Arguments
    collection (Array|Object|string): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.
    [thisArg] (*): The this binding of iteratee.
    Returns
    (Array|Object|string): Returns collection.

    Example:
    ```
    _([1, 2, 3]).forEach(function(n) { console.log(n); }).value();
    // → logs each value from left to right and returns the array

    _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(n, key) { console.log(n, key); });
    // → logs each value-key pair and returns the object (iteration order is not guaranteed)
    ```

_.map(collection, [iteratee=_.identity], [thisArg])


    Creates an array of values by running each element in collection through iteratee. The iteratee is bound to thisArg and invoked with three arguments; (value, index|key, collection).

    If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 

    If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.

Arguments
    collection (Array|Object|string): The collection to iterate over.
    [iteratee=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
    [thisArg] (*): The this binding of iteratee.
    Returns
    (Array): Returns the new mapped array.

Example
    ```
    _.map([1, 2, 3], function(n) { return n * 3; });
    // → [3, 6, 9]

    _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(n) { return n * 3; });
    // → [3, 6, 9] (iteration order is not guaranteed)

    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    // using the "_.property" callback shorthand
    _.map(users, 'user');
    // → ['barney', 'fred']
    ```


_.reject(collection, [predicate=_.identity], [thisArg])


The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for. 

If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 

If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.

Arguments
collection (Array|Object|string): The collection to iterate over.
[predicate=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
[thisArg] (*): The this binding of predicate.
Returns
(Array): Returns the new filtered array.

Example
var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// → [1, 3]

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// using the "_.property" callback shorthand
_.pluck(_.reject(users, 'active'), 'user');
// → ['barney']

// using the "_.matches" callback shorthand
_.pluck(_.reject(users, { 'age': 36 }), 'user');
// → ['fred']