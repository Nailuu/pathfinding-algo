// Add new element at the end of a list
function push(array, value) {
    return array[taille(array)] = value;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// const test = push(groceryList, "hamburger");
// afficher(test);


// Duplicate and create a NEW (not just a reference of the original array copy) array
function dupArray(array) {
    tempArray = [];
    
    for(element in array) {
        push(tempArray, array[element])
    }
    return tempArray;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// const test = dupArray(groceryList);
// test[1] = "pizza";
// afficher(test);
// afficher(groceryList);


// Remove an element at the position given in an array
// CONS : create new array need to find a way to edit original array without leaving empty element
function splice(array, index) {
    tempArray = [];
    elementToRemove = array[index];

    for(i = 0; i < taille(array); i++) {
        if(array[i] !== elementToRemove) {
            push(tempArray, array[i]);
        }
    }
    return tempArray;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// const test = splice(groceryList, 3);
// afficher(test);


// Merge two arrays into a new one
function concat(firstArray, secondArray) {
    tempArray = [];

    for(i = 0; i < taille(firstArray); i++) {
        push(tempArray, firstArray[i])
    }

    for(i = 0; i < taille(secondArray); i++) {
        push(tempArray, secondArray[i])
    }
    return tempArray;
}
// TEST :
// const groceryList1 = ["tomato", "apple", "onion"];
// const groceryList2 = ["meatballs", "pasta", "rice"];
// const test = concat(groceryList1, groceryList2);
// afficher(test);


// Split an array and take the first part in a new array before the given index
function splitBeginningArray(array, index) {
    tempArray = [];

    for(i = 0; i < index; i++) {
        push(tempArray, array[i])
    }
    return tempArray;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// const test = splitBeginningArray(groceryList, 2);
// afficher(test);


// Split an array and take the last part in a new array after the given index
function splitEndArray(array, index) {
    tempArray = [];

    for(i = (index); i < taille(array); i++) {
        push(tempArray, array[i])
    }
    return tempArray;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// const test = splitEndArray(groceryList, 3);
// afficher(test);


// Return index of given value if present in array else return -1
function indexOf(array, value) {
    for(i = 0; i < taille(array); i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// afficher(indexOf(groceryList, "pasta"))
// afficher(indexOf(groceryList, "pizza"))

const bubbleSort = (array) => {
    for(i = taille(array); i > 0; i--) {
        for(j = (i - 1); j >= 0; j--) {
            if(array[i] < array[j]) {
                [array[j], array[i]] = [array[i], array[j]];
            }
        }
    }
}
// TEST :
// const test = [6, 12, 10560, 3789, 35, 98, 13, 58, 36, 9, 2];
// bubbleSort(test);
// afficher(test);

const getLowestValue = (array) => {
    let tmp = array[0];
    for(let i = 0; i < taille(array); i++) {
        if(tmp > array[i]) {
            tmp = array[i];
        }
    }
    return tmp;
}
// TEST :
// const test = [6, 12, 10560, 3789, 35, 98, 13, 58, 36, 9, 2];
// afficher(getLowestValue(test));

const minimumSort = (array) => {
    const tmp = [];
    let tmp2 = array;

    for(let i = 0; i < taille(array); i++) {
        push(tmp, getLowestValue(tmp2));
        tmp2 = splice(tmp2, indexOf(tmp2, getLowestValue(tmp2)));
    }
    
    return tmp;
}
// TEST :
// const test = [6, 12, 10560, 3789, 35, 98, 13, 58, 36, 9, 2];
// afficher(minimumSort(test));

// Swap 2 values based on their index in an array
function swap(array, indexvalue1, indexvalue2) {
    temp = array[indexvalue1];
    array[indexvalue1] = array[indexvalue2];
    array[indexvalue2] = temp;
}
// TEST :
// const groceryList = ["tomato", "apple", "onion", "meatballs", "pasta", "rice"];
// swap(groceryList, 2, 4);
// afficher(groceryList);

function array3D(col, row) {
    const tempArray = [];
    for(i = 0; i < row; i++) {
        push(tempArray, [])
    }

    let count = col*row;
    for(i = 0; i < row; i++) {
        for(j = 0; j < col; j++) {
            count--;
            tempArray[i][j] = count;
        }
    }
    return tempArray;
}

// const test = array3D(1000, 100);
// afficher(test);
 