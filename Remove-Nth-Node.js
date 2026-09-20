/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    console.log("Entrada:", { n, lista: JSON.stringify(head) });
    let anterior = head;
    let final = head.next;
    if (final === null) {
        return head.next; // remove o primeiro nó
    }
    if (n === 1) {
        if (final != null) {
            while (final.next != null) {
                final = final.next;
                anterior = anterior.next;
            }
        }
        anterior.next = null
    }
    else {
        for (let i = 0; i < n - 1; i++) {
            final = final.next;
        }
        if (final != null) {
            while (final.next != null) {
                final = final.next;
                anterior = anterior.next;
            }
            anterior.next = anterior.next.next
        } else {
            return head.next;
        }
    }
    return head
};

function main() {
    const valores = [1, 2];
    let head = null;

    for (let i = valores.length - 1; i >= 0; i--) {
        head = new ListNode(valores[i], head);
    }

    const resultado = removeNthFromEnd(head, 2);
    const listaResultado = [];

    for (let node = resultado; node !== null; node = node.next) {
        listaResultado.push(node.val);
    }

    console.log(listaResultado);
}
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

main()
