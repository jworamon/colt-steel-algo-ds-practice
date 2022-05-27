// Given two positive integers, write a function that finds out
// if the two numbers have the same frequency of digits

const sameFrequency = (num1, num2) => {
    let map = {};
    num1 = String(num1);
    num2 = String(num2);

    for (const digit of num1) {
        map[digit] = (map[digit] || 0) + 1;
    }
    for (const digit of num2) {
        if (!map[digit]) return false;
        map[digit]--;
    }
    return true;
}