/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
    const symbol = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L",
        "60": "LX",
        "70": "LXX",
        "80": "LXXX",
        "90": "XC",
        "100": "C",
        "200": "CC",
        "300": "CCC",
        "400": "CD",
        "500": "D",
        "600": "DC",
        "700": "DCC",
        "800": "DCCC",
        "900": "CM",
        "1000": "M",
        "2000": "MM",
        "3000": "MMM",
    }
    let string = String(num);
    let resposta = [];
    let j = 0;
    for (let i = (string.length - 1); i > -1; i--) {
        console.log(i)
        const element = String(Number(string[i]) * (10 ** j));
        j++
        console.log(element)
        resposta[i] = symbol[element]
    }
    temp = String(resposta).replaceAll(",", "")
    return temp;
};

function main() {
    console.log(intToRoman(223));
}

main()