var interface = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
interface.question("Please pick a number from 0-10!\n> ", (reply) => {
    interface.close();
    var fortune = parseInt(reply);
    if (fortune >= 0 && fortune <= 10) {
        var type;
        if (fortune >= 0 && fortune <= 3) {
            type = "low";
        } else if (fortune >= 4 && fortune <= 7) {
            type = "average";
        } else if (fortune >= 8 && fortune <= 10) {
            type = "great";
        };
        console.log(`Your fortune is ${reply}\nYou have a ${type} fortune!`);
    } else {
        console.log(`\nSorry! ${fortune} is not in the 0-10 range! Please try again!`);
    };
});
