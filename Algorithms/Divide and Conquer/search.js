// Given a sorted array, write a function that accept a value
// and return the index where the value is located
// if the value is not found, return -1

const search = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}