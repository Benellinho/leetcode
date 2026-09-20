/**
 * @param {number} x
 * @return {boolean}
 */

// Solução de 10 ms
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    const reverse = Number(x.toString().split('').reverse().join(''))
    return x == reverse ? true : false
    
};

// Solução de 6 ms
var isPalindrome2 = function(x) {
    if (x < 0) {
        return false
    }
    let numero = x.toString()
    let i = 0;
    let j = numero.length - 1
    while(i < j) {
        if (numero[i] != numero[j]) {
            return false
        }
        i++
        j--
    }
    return true
};

function main() {
    console.log(isPalindrome(121))
}

main()