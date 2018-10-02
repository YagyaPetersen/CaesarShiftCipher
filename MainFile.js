function initialize(screen) {
    this.currentScreen = screen;
}
function setCurrentScreen(screen) {
    this.currentScreen = screen;
}
function getCurrentScreen() {
    return this.currentScreen;
}

var screens = {
    first_input: 1,
    second_input: 2,
    questions: 3,
    changer: 4
}

var stdin = process.openStdin();
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var firstInput = [];
var secondInput = [];
var sentences = [];

initialize(screens.first_input);



console.log("\nEnter the number of lines you'd like to encrypt:");
stdin.addListener("data", function (a) {
    if (getCurrentScreen() == screens.first_input) {
        var first = function (input) {
            firstInput.pop();
            firstInput.push(parseInt(input));
            console.log("First: " + firstInput);
        }
        first(parseInt(a));
        setCurrentScreen(screens.second_input);
        console.log("\nEnter how much you'd like to shift the letters by:");
    }

    else if (getCurrentScreen() == screens.second_input) {
        var second = function (input) {
            secondInput.pop();
            secondInput.push(input);
            console.log("Second: " + secondInput);
            letters = letters.concat(letters.splice(0, parseInt(secondInput)));
            console.log(letters.toString());
        }
        second(parseInt(a));
        setCurrentScreen(screens.questions);
        console.log("\nEnter [" + firstInput + "] sentences you would like to encrypt:")
    }

    else if (getCurrentScreen() == screens.questions) {
        for (i = 0; i < firstInput; i++) {
            var encryption = a.toString();
            console.log('\n' + sentences.toString());
            console.log(encryption + "1");
        }
        sentences.push(encryption);
        console.log(sentences.toString());

        if (i == sentences.length) {
            setCurrentScreen(screens.test);
            console.log("Press Enter to Encrypt message");
        }
    }
    else if (getCurrentScreen() == screens.changer) {

    }
});

