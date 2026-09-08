/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const substring = new Set();
    let maior = 0;
    let inicio = 0;

    for (let fim = 0; fim < s.length; fim++) {
        while (substring.has(s[fim])) {
            substring.delete(s[inicio]);
            inicio++;
        }

        substring.add(s[fim]);
        maior = Math.max(maior, fim - inicio + 1);
    }

    return maior;
};

function main() {
    let string = "pwwkew"
    console.log(lengthOfLongestSubstring(string));
}

main()
