/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
*/
// Ideia própria: Usar um array para carregar o primeiro nó de cada lista e ir comparando os valores dentro od array
var mergeKLists = function (lists) {
    let resposta = null;
    let listas = [];
    let menor = Infinity;
    let indice = 0;
    let fim = null;
    let j = 0;
    for (let i = 0; i < lists.length; i++) {
        const element = lists[i];
        if (element != null) {
            listas[j] = element;
            if (menor > element.val) {
                menor = element.val;
                indice = j;
            }
            j++;
        }
    }
    listas = listas.filter(no => (no != null))
    let continuar = listas.length >= 1
    if (!continuar) {
        return null
    }
    resposta = new ListNode(listas[indice].val)
    fim = resposta
    listas[indice] = listas[indice].next
    listas = listas.filter(no => (no != null))
    continuar = listas.length >= 1
    while (continuar) {
        menor = Infinity;
        for (let i = 0; i < listas.length; i++) {
            const element = listas[i];
            if (menor > element.val) {
                menor = element.val;
                indice = i;
            }
        }
        const novo = new ListNode(menor)
        fim.next = novo
        fim = novo
        listas[indice] = listas[indice].next
        listas = listas.filter(no => no != null);
        continuar = listas.length > 0;
    };
    console.log("[merge] retorno; início da lista:", resposta?.val ?? null);
    return resposta
}

function main() {
    const casos = [
        {
            entrada: [[1, 4, 5], [1, 3, 4], [2, 6]],
            esperado: [1, 1, 2, 3, 4, 4, 5, 6]
        },
        {
            entrada: [],
            esperado: []
        },
        {
            entrada: [[]],
            esperado: []
        },
        {
            entrada: [[1]],
            esperado: [1]
        },
        {
            entrada: [[], [1]],
            esperado: [1]
        }
    ];

    casos.forEach(({ entrada, esperado }, numeroCaso) => {
        console.log(`\n[main] ===== Caso ${numeroCaso + 1} =====`);
        console.log("[main] entrada bruta:", entrada);

        const lists = entrada.map((valores, indice) => {
            const lista = criarLista(valores);

            console.log(`[main] lista encadeada ${indice + 1}:`, listaParaTexto(lista));

            return lista;
        });

        console.log("[main] array lists:", lists.map((lista, indice) => ({
            indice,
            valores: listaParaArray(lista)
        })));
        console.log("[main] saída esperada:", esperado);

        try {
            const retornoAtual = mergeKLists(lists);
            console.log("[main] saída da função:", listaParaArray(retornoAtual));
        } catch (erro) {
            console.log("[main] erro da função:", erro.message);
        }
    });
}

function criarLista(valores) {
    let head = null;

    for (let i = valores.length - 1; i >= 0; i--) {
        head = new ListNode(valores[i], head);
    }

    return head;
}

function listaParaArray(head) {
    const valores = [];

    for (let node = head; node !== null; node = node.next) {
        valores.push(node.val);
    }

    return valores;
}

function listaParaTexto(head) {
    return listaParaArray(head).join(" -> ");
}

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

//Metodo mais eficiente: Usar só a função base de ordenar dois node list e ir trocando a lista {function mergeTwoList(l1, l2) {
var mergeKLists = function (lists) {
    if (lists.length === 0) return null

    while (lists.length > 1) {
        let mergedLists = []

        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedLists.push(mergeTwoList(l1, l2))
        }
        lists = mergedLists
    }

    return lists[0]
};

function mergeTwoList(l1, l2) {
    let primeiro = new ListNode(0);
    let ultimo = primeiro;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            ultimo.next = l1
            l1 = l1.next
        } else {
            ultimo.next = l2
            l2 = l2.next
        }
        ultimo = ultimo.next
    }

    ultimo.next = l1 !== null ? l1 : l2
    return primeiro.next
}

main()
