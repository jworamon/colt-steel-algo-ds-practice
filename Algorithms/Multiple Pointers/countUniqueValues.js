const countUniqueValues_1 = (arr) => {
    if (arr.length === 0) return 0;

    let count = 1;
    let i = 0;
    let j = i + 1;
    while (j <= arr.length - 1) {
        if (arr[i] === arr[j]) j++;
        else {
            count++;
            i = j;
            j++;
        }
    }
    return count;
}

// mutate the argument arr
const countUniqueValues_2 = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}