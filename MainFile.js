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

var firstInput = [];
var secondInput = [];
var sentences = [];

initialize(screens.first_input);



console.log("\nEnter the number of lines you'd like to encrypt:");
stdin.addListener("data", function (a) {
    if (getCurrentScreen() == screens.first_input) {
        if (isNaN(a)) {
            setCurrentScreen(screens.first_input);
        }
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
        if (isNaN(a)) {
            setCurrentScreen(screens.second_input);
        }
        var second = function (input) {
            secondInput.pop();
            secondInput.push(input);
            console.log("Second: " + secondInput);
            //letters = letters.concat(letters.splice(0, parseInt(secondInput)));
            //console.log(letters.toString());
        }
        second(parseInt(a));
        setCurrentScreen(screens.questions);
        console.log("\nEnter [" + firstInput + "] sentences you would like to encrypt:")
    }

    else if (getCurrentScreen() == screens.questions) {
        for (i = 0; i < firstInput; i++) {
            var encryption = a.toString();
        }
        sentences.push(encryption);

        if (i == sentences.length) {

            setCurrentScreen(screens.changer);
            console.log("Press Enter to Encrypt message");
        }
    }
    else if (getCurrentScreen() == screens.changer) {
        if (a == false) {
            function encrypt(sentence, secondInput) {
                var letters = "abcdefghijklmopqrstuvwxyz";
                var newSentences = "";
                for (var i = 0; i < sentence.length; i++) {
                    var char = sentence[i]
                        isUpper = char === char.toUpperCase() ? true : false;
                    char = char.toLowerCase();

                    if (letters.indexOf(char) > -1) {
                        var encrypted = letters.indexOf(char) + parseInt(secondInput);
                        if (encrypted < letters.length) {
                            isUpper ? newSentences + letters[encrypted].toUpperCase() : newSentences + letters[encrypted];
                        } else {
                            var shifted = -(letters.length - newSentences);
                            isUpper ? newSentences + letters[shifted].toUpperCase() : newSentences + letters[shifted];
                        }
                    }
                    else {
                        newSentences += char;
                    }
                }
                return newSentences;
            }

            sentences = encrypt(sentences.toString(), secondInput);
            console.log(sentences);
        }
        else {
            console.log("You can only press enter");
            setCurrentScreen(screens.changer);
        }
    }
});

