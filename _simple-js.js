export default {
    /**
     * Returns sum of all number items in the given array using recursion. 
     * Works with any array nesting. Does not calculates not number types.
     * @param {Array} array Array to sum items 
     * @returns {number} Sum of all items in the given array.
     * 
     * @example
     * 
     * const arr_1 = [1, 2, 3];
     * 
     * console.log(arraySum(arr_1));
     * 
     * // => 6
     * 
     * const arr_2 = ['hello', true, null, [10, [-5, 4]]];
     * 
     * console.log(arraySum(arr_2));
     * 
     * // => 9
     */

    arraySum(array) {
        let sum = 0;

        for (const item of array) {
            if (Array.isArray(item)) {
                sum += arraySum(item);
            }

            if (typeof item === 'number') {
                sum += item;
            }
        }

        return sum;
    },
    /**
     * Sorts the array using bubble sort O(n²).
     * Mutates the original array.
     * Do not recommend use this algorightm in the projects apart from educational ones.
     * @param {Array} array Array to sort. 
     * @returns {Array} Ascending sorted array.
     * 
     * @example
     * 
     * const arr = [5, 3, 1, 9, 0];
     * 
     * console.log(bubbleSort(arr));
     * // => [0, 1, 3, 5, 9]
     * 
     * console.log(arr);
     * // => [0, 1, 3, 5, 9]
     * 
     */

    bubbleSort(array) {
        let stepsCount = array.length - 1;

        let swapped;

        do {
            swapped = false;

            for (let i = 0; i < stepsCount; i += 1) {
                if (array[i] > array[i + 1]) {
                    const temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }

                swapped = true;
            }
            stepsCount -= 1;

        } while (swapped);

        return array;
    },
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the 
     * final chunk will be the remaining elements.
     * @param {Array} array The array to chunk.
     * @param {number} [size = 1]  The length of each chunk. 
     * @returns {Array} Returns the new chunked array.
     * 
     * @example
     * 
     * console.log(chunk(['a', 'b', 'c', 'd'], 2));
     * 
     * // => [ [ 'a', 'b' ], [ 'c', 'd' ] ]
     * 
     * console.log(chunk(['a', 'b', 'c', 'd'], 3));
     * 
     * // => [ [ 'a', 'b', 'c' ], [ 'd' ] ]
     */

    chunk(array, size = 1) {
        const newArr = [];

        for (let i = 0, j = 0; i < array.length; i += size, j += 1) {
            newArr[j] = array.slice(i, i + size);
        }

        return newArr;
    },

    /**
     * Recursively clones the given object and returns a deep copy of the object.
     * @param {Object} object Object to copy
     * @returns {Object} Returns the deep clone of the given object
     * 
     * @example
     * 
     * const object_1 = {
     *   a: 1,
     *   b: 2,
     *   c: {
     *       d: {
     *           e: 4,
     *       },
     *   },
     * };
     *
     * const object_2 = cloneDeep(object_1);
     *
     * console.log(object_1 === object_2)
     * // => false
     *
     * console.log(object_1.c.d === object_2.c.d);
     * // => false
     * 
     */

    cloneDeep(object) {
        const newObject = {};

        for (const [key, value] of Object.entries(object)) {
            newObject[key] = typeof value === 'object' ? cloneDeep(value) : value;
        }

        return newObject;
    },

    /**
     * Makes the new array from others arrays.
     * @param {Array} array The array to concatenate.
     * @param  {any} [items] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * 
     * @example
     * 
     * const array_1 = [1, 2, 3];
     * const array_2 = concat(array_1, 4, 5, 6, [7, 8, [9]])
     * 
     * console.log(array_2);
     * // => [1, 2, 3, 4, 5, 6, 7, 8, [9]]
     * 
     * console.log(array_1);
     * // => [1, 2, 3]
     */

    concat(array, ...items) {
        const newArr = [];

        for (let i = 0; i < array.length; i += 1) {
            newArr[i] = array[i];
        }

        for (let i = 0, j = newArr.length; i < items.length; i += 1, j += 1) {
            if (items[i].constructor === Array) {
                for (let k = 0; k < items[i].length; k += 1) {
                    newArr[j] = items[i][k];
                    if (k !== items[i].length - 1) {
                        j++;
                    }
                }
            } else {
                newArr[j] = items[i];
            }
        }

        return newArr;
    },
    /**
     * Create an object that includes count of all letters in the given string.
     * Does not counts spaces.
     * @param {string} string String to count letters.
     * @returns {Object} Object with values of letters.
     * 
     * @example
     * 
     * const string = 'Hello wonderful world!';
     * 
     * console.log(countLetters(string));
     * // => { H: 1, e: 2, l: 4, o: 3, w: 2, n: 1, d: 2, r: 2, f: 1, u: 1, '!': 1 }
     */

    countLetters(string) {
        const chars = {};

        for (const char of string) {
            if (char === ' ') continue;
            chars[char] = 1 + (chars[char] || 0);
        }

        return chars;
    },
    /**
     * Creates an array of array values not included in the other 
     * given arrays.
     * @param {Array} array_1 First array.
     * @param {Array} array_2 Second array.
     * @returns {Array}  Returns the new array of filtered values.
     * 
     * @example
     * 
     * console.log(diff([1, 2, 3], [3, 4, 5]));
     * // => [1, 2]
     */

    diff(array_1, array_2) {
        return array_1.filter(item => !array_2.includes(item));
    },

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param {Array} array array to filter.
     * @param {Function} callback callback function calling for each item in the array. Syntax: currentValue[, index[, array]]
     * @returns {Array} filtered array.
     * 
     * @example
     * 
     * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
     * 
     * console.log(filter(numbers, item => item % 2 === 0));
     * // => [2, 4, 6, 8, 10]
     */
    filter(array, callback) {
        const newArr = [];

        for (let i = 0; i < array.length; i += 1) {
            if (callback(array[i], i, array)) {
                console.log(i)
                newArr.push(array[i]);
            }
        }

        return newArr;
    },

    /**
     * Recursively flattens the given array and returns one-dimensional array (or single dimension array).
     * @param {Array} array Array to flat.
     * @returns {Array} One-dimensional
     * 
     * @example
     * 
     * const a = [1, 2, [3, 4], 5, [[[[[6]]],],]];
     * 
     * console.log(flatten(a));
     * // => [ 1, 2, 3, 4, 5, 6 ]
     */
    flattenDeep(array) {
        const result = [];

        for (const item of array) {
            if (Array.isArray(item)) {
                const newArr = flatten(item);
                result.push(...newArr);
            } else {
                result.push(item);

            }
        }

        return result;
    },
    /**
     * Create an object using values in the array.
     * @param {Array} pairs Array of arrays, including pairs. 
     * @returns {Object} Object created by the given array.
     * 
     * @example
     * 
     * const person = [['name', 'Steve'], ['age', 32], ['isAdmin', false]];
     * 
     * console.log(fromPairs(person));
     * // => { name: 'Steve', age: 32, isAdmin: false }
     */

    fromPairs(pairs) {
        const object = {};

        for (const [key, value] of pairs) {
            object[key] = value;
        }

        return object;
    },
    /**
     * Returns the distance between two points in 2D (map)
     * @param {Array<number>} point_1 The first point.
     * @param {Array<number>} point_2 The second point.
     * @returns {number} distance
     * 
     * @example
     * 
     * console.log(getDistance2D([6, 5], [6, 6]));
     * // => 1
     * console.log(getDistance2D([0, 0], [10, 0]))
     * // => 10
     */

    getDistance2D([x1, y1], [x2, y2]) {
        const xs = x2 - x1;
        const ys = y2 - y1;

        return Math.sqrt(xs ** 2 + ys ** 2);
    },

    /**
     * Returns the distance between two points in 3D.
     * @param {Array<number>} point_1 The first point.
     * @param {Array<number>} point_2 The second point.
     * @returns {number} Distance.
     *
     * @example
     *
     * console.log(getDistance3D([0, -3, 3], [3, 1, 3]));
     * // => 5
     */
    getDistance3D([x1, y1, z1], [x2, y2, z2]) {
        const xs = x2 - x1;
        const ys = y2 - y1;
        const zs = z2 - z1;

        return Math.sqrt(xs ** 2 + ys ** 2 + zs ** 2);
    },

    /**
     * Check if the array includes the search element and returns
     * boolean value. Correctly works with NaN using Object.is() method.
     * 
     * @param {Array} array Array for searching.
     * @param {any} searchElement Element to search.
     * @param {number} [fromIndex] The index where the search starts from.
     * @returns {boolean} Result of the search.
     * 
     * @example
     * 
     * includes(['apple', 'banana', 'pear'], 'pear')
     * // => true
     */

    includes(array, searchElement, fromIndex = 0) {
        if (fromIndex < 0) {
            fromIndex = array.length + fromIndex;
        }

        if (fromIndex % 1 !== 0) {
            fromIndex = Math.trunc(fromIndex);
        }

        for (let i = fromIndex; i < array.length; i += 1) {
            if (Object.is(array[i], searchElement)) {
                return true;
            }
        }

        return false;
    },
    /**
     * Creates an array of unique values that are includes in two
     * given arrays.
     * @param {Array} array_1 First array.
     * @param {Array} array_2 Second array.
     * @returns {Array} Returns the new array of intersecting values.
     * 
     * @example
     * 
     * console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
     * // => [3, 4]
     */

    intersection(array_1, array_2) {
        return array_1.filter(item => array_2.includes(item));
    },
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param {Array} array Array to call callback function.
     * @param {Function} callback Function that calling for each item in the array and returns true/false. Syntax: currentValue[, index[, array]]
     * @returns {Array} Mapped array.
     * 
     * @example
     * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
     *
     * console.log(map(numbers, item => item * 2));
     * // => [
       2,  4,  6,  8, 10,
      12, 14, 16, 20
    ]
     */

    map(array, callback) {
        const newArr = [];

        for (let i = 0; i < array.length; i += 1) {
            if (i in array) {
                newArr[i] = callback(array[i], i, array);
            }
        }

        return newArr;
    },

    /**
     * Deletes the last element in the array and return deleted element
     * @param {Array} array array
     * @returns {any} deleted element
     * 
     * @example
     * 
     * const arr = [1, 2, 3, 4, 5];
     * 
     * console.log(pop(arr));
     * // => 5;
     * 
     * console.log(arr);
     * // => [1, 2, 3, 4]
     */

    pop(array) {
        const deletedItem = array[array.length - 1];

        array.length--;

        return deletedItem;

    },
    /**
     * Add the elements in the end of given array and returns its new length.
     * @param {Array} array Array to add elements.
     * @param  {any} elements To add in the end of array.
     * @returns {number} New length.
     * 
     * @example
     * 
     * const fruits = ['apple', 'banana', 'pear'];
     * 
     * console.log(push(fruits, 'grape', 'kiwi'));
     * // => 5
     * 
     * console.log(fruits);
     * // => ['apple', 'banana', 'pear', 'grape', 'kiwi']
     */

    push(array, ...elements) {
        const newLength = elements.length + array.length;

        for (let i = array.length, j = 0; i < newLength; i += 1, j += 1) {
            array[i] = elements[j];
        }

        return newLength;
    },/**
 * Deletes the first item to the beginning of the array.
 * @param {Array} array Array to delete the first item.
 * @returns {any} Deleted item to the beginning of the array.
 * 
 * @example
 * 
 * const arr = [true, false, 0, 5];
 * 
 * console.log(shift(arr));
 * // => true
 * 
 * console.log(arr);
 * // => [false, 0, 5]
 */

    shift(array) {
        const deletedItem = array[0];

        for (let i = 1, j = 0; i < array.length; i += 1, j += 1) {
            array[j] = array[i];
        }

        array.length--;

        return deletedItem;
    },
    /**
     * Shuffles the given array and returns it.
     * Uses Fisher-Yates (aka Knuth) Shuffle.
     * Mutates the original array.
     * 
     * For mor details: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     * 
     * @example
     * 
     * const array = [0, 1, 2, 3, 4, 5];
     * 
     * console.log(shuffleArray(array));
     * // => [
      3, 8, 6, 2, 5,
      1, 7, 0, 4, 9
    ]
     * 
     * @param {Array} array Array to shuffle.
     * @returns {Array} Shuffled array
     */

    shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    },
    /**
     * Add elements to the the begginning of the array.
     * @param {Array} array Array to add.
     * @param  {any} elements To add to the begginning of the array.
     * @returns {number} New length of the array.
     */
    unshift(array, ...elements) {
        let newLength = array.length + elements.length;

        for (let i = elements.length, j = 0; i < newLength; i += 1, j += 1) {
            elements[i] = array[j];
        }

        for (let i = 0; i < elements.length; i++) {
            array[i] = elements[i];
        }

        return newLength;
    }

}