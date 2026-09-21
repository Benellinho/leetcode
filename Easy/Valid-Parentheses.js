/**
 * @param {string} s
 * @return {boolean}
 */
// Ideia: usar uma pilha para conferir a compatibilidade entre os valores.
var isValid = function (s) {
  const inverso = { ")": "(", "]": "[", "}": "{" }
  const normal = ["{", "[", "("]
  let order = []
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (normal.includes(element)) {
      order[j] = element
      j++
    }
    else {
      if (order.pop === inverso[element]) {
        j--;
      }
      else {
        return false
      }
    }
  }
  return j == 0 ? true : false
};

function main() {
  console.log(isValid("()"));
}

main()
