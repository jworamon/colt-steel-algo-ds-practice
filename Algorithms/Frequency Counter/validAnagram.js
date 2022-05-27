const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let map = {};
    for (const char of str1) {
        map[char] = (map[char] || 0) + 1;
    }
    for (const char of str2) {
        if (!map[char]) return false;
        map[char]--;
    }
    return true;
}