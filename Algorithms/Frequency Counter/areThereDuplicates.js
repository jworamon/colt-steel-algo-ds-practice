// Write a function that accepts a variable number of arguments
// and check whether there are duplicates

const areThereDuplicates = (...args) => {
    let set = new Set();
    for (const arg of args) {
        if (set.has(arg)) return true;
        set.add(arg);
    }
    return false;
}