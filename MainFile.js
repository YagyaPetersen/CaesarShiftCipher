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

             
console.log("______________________________________\n\x1b[31mWELCOME TO THE CAESER SHIFT CIPHER APP\x1b[0m\n\x1b[0m______________________________________");
console.log("\n\x1b[31mEnter the number of lines you'd like to encrypt:\x1b[0m");
stdin.addListener("data", function (a) {
    if (getCurrentScreen() == screens.first_input) {
        if (isNaN(a)) {
            setCurrentScreen(screens.first_input);
        }
        var first = function (input) {
            firstInput.pop();
            firstInput.push(parseInt(input));
            console.log("\nFirst: " + firstInput);
        }
        first(parseInt(a));
        setCurrentScreen(screens.second_input);
        console.log("\n\x1b[31mEnter how much you'd like to shift the letters by:\x1b[0m");
    }

    else if (getCurrentScreen() == screens.second_input) {
        if (isNaN(a)) {
            setCurrentScreen(screens.second_input);
        }
        var second = function (input) {
            secondInput.pop();
            secondInput.push(input);
            console.log("\nSecond: " + secondInput);
        }
        second(parseInt(a));
        setCurrentScreen(screens.questions);
        console.log("\x1b[31m\nEnter [\x1b[0m" + firstInput + "\x1b[31m] sentences you would like to encrypt: \x1b[0m")
    }

    else if (getCurrentScreen() == screens.questions) {
        for (i = 0; i < firstInput; i++) {
            var encryption = a.toString();
        }
        sentences.push(encryption);

        if (i == sentences.length) {

            setCurrentScreen(screens.changer);
            console.log("\n\x1b[31mPress Enter to Encrypt message\x1b[0m");
        }
    }
    else if (getCurrentScreen() == screens.changer) {
        if (a == false) {
            function encrypt(sentence, secondInput) {

                var letters = "abcdefghijklmopqrstuvwxyz";
                var newSentences = "";
                
                for (var i = 0; i < sentence.length; i++) {
                    var character = sentence[i]
                    isUpper = character === character.toUpperCase() ? true : false;
                    character = character.toLowerCase();

                    if (letters.indexOf(character) > -1) {
                        var encrypted = letters.indexOf(character) + parseInt(secondInput);
                        if (encrypted < letters.length) {
                            isUpper ? newSentences += letters[encrypted].toUpperCase() : newSentences += letters[encrypted];
                        } else {
                            var shifted = -(letters.length - newSentences);
                            isUpper ? newSentences += letters[shifted].toUpperCase() : newSentences += letters[shifted];
                        }
                    }

                    else {
                        newSentences += character;
                    }
                }
                return newSentences;
            }
            sentences = encrypt(sentences.toString(), secondInput);
            console.log("\n\x1b[31mHere is your encrypted message: \n_______________________\x1b[0m");
            console.log(sentences.toString());
            console.log("\x1b[31m_______________________\nCaesar will be proud of you !!\x1b[0m");
        }
        else {
            console.log("You can only press enter");
            setCurrentScreen(screens.changer);
        }process.exit(0);
    }
    
});

