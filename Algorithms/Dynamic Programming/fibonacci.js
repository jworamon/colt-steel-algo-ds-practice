// Recursion
// Time: O(2^n) aka exponential   

const fibRec = (n) => {
    if (n <= 2) return 1;
    return fibRec(n - 1) + fibRec(n - 2);
}

// Dynamic Programming
// Time: O(n)
const fibMemo = (n, memo = []) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo[n] = res;
    return res;
}

// Time: O(n)
const fibTabulation = (n) => {
    if (n <= 2) return 1;
    const fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}