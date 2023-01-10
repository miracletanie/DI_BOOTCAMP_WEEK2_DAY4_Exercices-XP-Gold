//SwapCase

let input = prompt('Enter a string:');

function swapCase(input) {
    let resultat = '';
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (c === c.toUpperCase()) {
            resultat += c.toLowerCase();
        } else {
            resultat += c.toUpperCase();
        }
    }
    return resultat;
}
console.log(swapCase(input));
  