var stdin = process.openStdin();
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var firstInput = [];
var secondInput = [];

stdin.addListener("data", function (a) {


    console.log("Enter the number of lines you'd like to encrypt:\n");
    firstInput.pop();
    firstInput.push(parseInt(a));
    console.log("First: " + firstInput);
    for (i = 0; i <= firstInput; i++) {
        console.log('test');
    }

    console.log("Enter how much you'd like to shift the letters by:\n");
    secondInput.push(a.toString());
    console.log("Second: " + secondInput);
    letters = letters.concat(letters.splice(0, parseInt(secondInput)));
    console.log(letters.toString());

});