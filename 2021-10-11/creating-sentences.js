const words = ["This", "is", "JavaScript", "Bootcamp!"];
var sentence;

function createSentence(array) {
    var temp = "";
    for(var i of array) {
        temp = `${temp}${i} `;
    }
    return temp;
};

sentence = createSentence(words);
console.log(sentence);