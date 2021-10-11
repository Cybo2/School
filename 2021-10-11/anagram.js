function isAnagram(string) {
    if (string.toLowerCase() == string.toLowerCase().split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("mom"));
console.log(isAnagram("dad"));
console.log(isAnagram("pizza"));
console.log(isAnagram("ok"));
console.log(isAnagram("bob"));
console.log(isAnagram("javascript"));