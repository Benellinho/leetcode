/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const palindromomos = new Set();
    let temp = new Array();
    let i, j;
    for (let fim = 0; fim < s.length; fim++) {
        i = fim;
        j = fim + 1;
        while (s[i] == s[j] && (s[i] != undefined && s[j] != undefined)) {
            i--, j++;
        }
        i++, j--;
        palindromomos.add({ maior: i - j, i: i, j: j });
        i = fim;
        j = fim;
        while (s[i] == s[j] && (s[i] != undefined && s[j] != undefined)) {
            i--, j++;
        }
        i++, j--;
        palindromomos.add({ maior: i - j, i: i, j: j });
    }
    let maiorpalindormo = [...palindromomos].sort((a, b) => a.maior - b.maior)
    temp = s.slice(maiorpalindormo[0].i, maiorpalindormo[0].j + 1)
    temp = String(temp).replaceAll(",", "")
    return temp;
};

function main() {
    let string = "cbbd"
    console.log(longestPalindrome(string));
}

main()
