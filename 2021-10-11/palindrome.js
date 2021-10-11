function isPalindrome(string) {
    if (string.toLowerCase() == string.toLowerCase().split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("mom"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("pizza"));
console.log(isPalindrome("ok"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("javascript"));