/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[j]) {
            if (j == needle.length - 1) {
                return i - j
            }
            j++;
        }
        else {
            i = i - j;
            j = 0;
        }
    }
    return -1
};

function main() {
    const testCases = [
        {
            haystack: "sadbutsad",
            needle: "sad",
            expected: 0
        },
        {
            haystack: "leetcode",
            needle: "leeto",
            expected: -1
        }
    ];

    testCases.forEach(({ haystack, needle, expected }, index) => {
        const result = strStr(haystack, needle);
        console.log(`Caso ${index + 1}:`, result === expected ? " passou" : ` falhou (esperado: ${expected}, recebido: ${result})`);
    });
}

main();
