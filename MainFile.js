var readlineSync = require('readline-sync');

var sentences = [];

console.log("______________________________________\n\x1b[31mWELCOME TO THE CAESER SHIFT CIPHER APP\x1b[0m\n\x1b[0m______________________________________");

var firstInput = readlineSync.question("\n\x1b[31mEnter the number of sentences you'd like to encrypt:\x1b[0m\n");
if (isNaN(firstInput) || firstInput == false) {
    readlineSync.question("\n\x1b[31mEnter the number of sentences you'd like to encrypt:\x1b[0m\n");
}
else {
    var first = function (input) {
        console.log("\nFirst: " + firstInput);
    }
    first(parseInt(firstInput));
}

var secondInput = readlineSync.question("\n\x1b[31mEnter how much you'd like to shift the letters by:\x1b[0m\n");
if (isNaN(secondInput) || secondInput == false) {
    readlineSync.question("\n\x1b[31mEnter how much you'd like to shift the letters by:\x1b[0m\n");
}
else {
    var second = function (input) {
        console.log("\nSecond: " + input);
    }
    second(parseInt(secondInput));
}

for (i = 0; i < parseInt(firstInput); i++) {
var thirdInput = readlineSync.question("\x1b[31m\nEnter [\x1b[0m" + firstInput + "\x1b[31m] sentences you would like to encrypt: \x1b[0m\n");
    sentences.push(thirdInput);
}

if (sentences.length == firstInput) {
    console.log(sentences);
    var fourthInput = readlineSync.question("\n\x1b[31mPress Enter to Encrypt message\x1b[0m\n");
    if (fourthInput == false) {
        function encrypt(sentence, secondInput) {

            var letters = "abcdefghijklmnopqrstuvwxyz";
            var newSentences = "";

            for (var i = 0; i < sentence.length; i++) {
                var char = sentence[i];
                isUpper = char === char.toUpperCase() ? true : false;
                char = char.toLowerCase();

                if (letters.indexOf(char) > -1) {
                    var encrypted = letters.indexOf(char) + secondInput;
                    if (encrypted < letters.length) {
                        isUpper ? newSentences += letters[encrypted].toUpperCase() : newSentences += letters[encrypted];
                    } else {
                        var shifted = -(letters.length - encrypted);
                        isUpper ? newSentences += letters[shifted].toUpperCase() : newSentences += letters[shifted];
                    }
                }
                else {
                    newSentences += char;
                }
            }
            return newSentences;
        }
        sentences = encrypt(sentences.toString(), parseInt(secondInput));
        console.log("\x1b[31mHere is your encrypted message: \n_______________________\x1b[0m");
        console.log(sentences.replace(",", "\n"));
        console.log("\x1b[31m_______________________\n\nCaesar will be proud of you !!\x1b[0m\n");
    }
    else {
        console.log("You can only press enter");
    } process.exit(0);

}

