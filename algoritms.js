// Бинарный поиск
function binary_search (array, item) {
    let low = 0;
    let high = array.length -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        if (guess === item) {
            return mid
        }
        if (guess < item) {
            low = mid + 1
        }
        if (guess > item) {
            high = mid - 1
        }
    }
    return "Нет такого числа"
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let item = 9;

console.log(binary_search(list, item))

// Поиск наименьшего числа (Сортировка выбором)
function smallIndex (array) {
    let smallest = array[0];
    let smallestIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectFind (array) {
    let size = array.length;
    let newArr = [];
    for (let i = 0; i < size; i++) {
        let smallest = smallIndex(array);
        newArr.push(array[smallest]);
        array.splice(smallest, 1)
    }
    return newArr
}

let array = [2, 3, 4, 1, 5, 6, 7];
console.log(selectFind(array))