/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Ideia: percorrer sequencialmente as listas conforme o menor valor encontrado
var mergeTwoLists = function (list1, list2) {
    console.log("[merge] entrada:", {
        lista1: list1?.val ?? null,
        lista2: list2?.val ?? null
    });
    let resposta = null;
    if (list1 == null) {
        console.log("[merge] lista1 vazia; retornando lista2");
        return list2
    }
    else if (list2 == null) {
        console.log("[merge] lista2 vazia; retornando lista1");
        return list1
    }
    else if (list1.val <= list2.val) {
        resposta = new ListNode(list1.val)
    }
    else {
        resposta = new ListNode(list2.val)
    }
    let lista1 = list1.val <= list2.val ? list1.next : list1;
    let lista2 = list2.val < list1.val ? list2.next : list2;
    let fim = resposta;
    console.log("[merge] estado inicial:", {
        resposta: resposta?.val ?? null,
        lista1: lista1?.val ?? null,
        lista2: lista2?.val ?? null,
        fim: fim?.val ?? null
    });
    while (lista1 != null || lista2 != null) {
        console.log("[merge] comparação:", {
            lista1: lista1?.val ?? null,
            lista2: lista2?.val ?? null,
            fim: fim?.val ?? null
        });
        if (lista1 == null) {
            console.log("[merge] anexando valor da lista2:", lista2.val);
            const novo = new ListNode(lista2.val)
            fim.next = novo
            fim = novo
            lista2 = lista2.next
        }
        else if (lista2 == null) {
            console.log("[merge] anexando valor da lista1:", lista1.val);
            const novo = new ListNode(lista1.val)
            fim.next = novo
            fim = novo
            lista1 = lista1.next
        }
        else {
            if (lista1.val > lista2.val) {
                console.log("[merge] anexando valor da lista2:", lista2.val);
                const novo = new ListNode(lista2.val)
                fim.next = novo
                fim = novo
                lista2 = lista2.next
            }
            else if (lista1.val <= lista2.val) {
                console.log("[merge] anexando valor da lista1:", lista1.val);
                const novo = new ListNode(lista1.val)
                fim.next = novo
                fim = novo
                lista1 = lista1.next
            }
            else {
                console.log("[merge] anexando valores das duas listas:", lista2.val, lista1.val);
                const novo1 = new ListNode(lista2.val)
                fim.next = novo1
                fim = novo1
                lista2 = lista2.next
                const novo = new ListNode(lista1.val)
                fim.next = novo
                fim = novo
                lista1 = lista1.next
            }
        }
    };
    console.log("[merge] retorno; início da lista:", resposta?.val ?? null);
    return resposta
}

function main() {
    const valores1 = [2];
    const valores2 = [1];
    console.log("Lista inicial 1:", valores1.join(" -> "));
    console.log("Lista inicial 2:", valores2.join(" -> "));
    let head1 = null;
    let head2 = null;

    for (let i = valores1.length - 1; i >= 0; i--) {
        head1 = new ListNode(valores1[i], head1);
        head2 = new ListNode(valores2[i], head2);
    }

    const resultado = mergeTwoLists(head1, head2);
    const listaResultado = [];

    for (let node = resultado; node !== null; node = node.next) {
        listaResultado.push(node.val instanceof ListNode ? node.val.val : node.val);
    }

    console.log("Lista final:", listaResultado.join(" -> "));
}

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

main()
