/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let string;
    console.log(x)
    if (x < 0) {
        x = x * -1
        string = "-" + x.toString().split('').reverse().join()
    }
    else {
        string = x.toString().split('').reverse().join()
    }
    console.log(string)
    string = Number(string.replaceAll(",", ""))
    console.log(string)
    if (2147483647 < string || -2147483648 > string) {
        string = 0
    }
    return string
};

function main() {
    console.log(reverse(1534236469))
}

main()