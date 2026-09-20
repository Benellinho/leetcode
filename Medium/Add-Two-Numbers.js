/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const inicio = new ListNode(0);
    let atual = inicio;
    let sobra = 0;

    while (l1 !== null || l2 !== null || sobra !== 0) {
        const valor1 = l1 !== null ? l1.val : 0;
        const valor2 = l2 !== null ? l2.val : 0;

        const soma = valor1 + valor2 + sobra;
        sobra = Math.floor(soma / 10);

        atual.next = new ListNode(soma % 10);
        atual = atual.next;

        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }

    return inicio.next;
};

function main() {
    let l1 = [9, 9, 9, 9, 9, 9, 9]
    let l2 = [9, 9, 9, 9]
    console.log(addTwoNumbers(l1, l2))
}

main()