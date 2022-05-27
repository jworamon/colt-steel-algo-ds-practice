// Write a function that accepts a variable number of arguments
// and check whether there are duplicates

const areThereDuplicates = (...args) => {
    args.sort((a, b) => a - b);

    let i = 0;
    let j = i + 1;
    while (j < args.length) {
        if (args[i] === args[j]) return true;
        i++;
        j++;
    }
    return false;
}