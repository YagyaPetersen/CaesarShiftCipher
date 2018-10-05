var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout)
var sentences = [];

console.log("______________________________________\n\x1b[31mWELCOME TO THE CAESER SHIFT CIPHER APP\x1b[0m\n\x1b[0m______________________________________");

rl.question("\n\x1b[31mEnter the number of lines you'd like to encrypt:\x1b[0m\n", function (answer1) {
    if (isNaN(answer1) || answer1 == false) {
        console.log("\n\x1b[31mEnter the number of lines you'd like to encrypt:\x1b[0m");
    }
    else {
        var first = function (input) {
            console.log("\nFirst: " + input);
        }
        first(parseInt(answer1));
    }
    rl.question("\n\x1b[31mEnter how much you'd like to shift the letters by:\x1b[0m\n", function (answer2) {
        if (isNaN(answer2) || answer2 == false) {

        }
        else {
            var second = function (input) {
                console.log("\nSecond: " + input);
            }
            second(parseInt(answer2));
        }

        rl.question("\x1b[31m\nEnter [\x1b[0m" + answer1 + "\x1b[31m] sentences you would like to encrypt: \x1b[0m\n", function (answer3) {
            for (i = 0; i < parseInt(answer1); i++) {
                var encryption = answer3
                sentences.push(encryption);
            };
            console.log(sentences);
            if (sentences.length = answer1) {
                // console.log(sentences);
                rl.question("\n\x1b[31mPress Enter to Encrypt message\x1b[0m\n", function (answer4) {
                    if (answer4 == false) {
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
                        sentences = encrypt(sentences.toString(), parseInt(answer2));
                        console.log("\x1b[31mHere is your encrypted message: \n_______________________\x1b[0m");
                        console.log(sentences.replace(",", ""));
                        console.log("\x1b[31m_______________________\n\nCaesar will be proud of you !!\x1b[0m\n");
                    }
                    else {
                        console.log("You can only press enter");
                    } process.exit(0);

                })
            }
        })
    })
})
