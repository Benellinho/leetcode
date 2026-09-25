/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    console.log("[swap] entrada:", listaParaArray(head));

    let primeiro = head;
    let segundo = head != null ? head.next : null;
    let segundo_passado = null;
    console.log("[swap] primeiro par:", primeiro?.val ?? null, segundo?.val ?? null);
    if (primeiro != null && segundo != null) {
        head = head.next;
    }
    while (primeiro != null && segundo != null) {
        console.log("[swap] --- início da iteração ---");
        console.log("[swap] nós atuais:", {
            primeiro: primeiro.val,
            segundo: segundo.val
        });
        console.log("[swap] próximos antes da troca:", {
            primeiro: primeiro.next?.val ?? null,
            segundo: segundo.next?.val ?? null
        });

        primeiro.next = segundo.next;
        console.log("[swap] primeiro.next agora aponta para:", primeiro.next?.val ?? null);

        segundo.next = primeiro;
        console.log("[swap] segundo.next agora aponta para:", segundo.next?.val ?? null);

        console.log("[swap] par após a troca:", {
            inicio: segundo.val,
            próximo: segundo.next?.val ?? null
        });
        segundo_passado = primeiro;
        primeiro = primeiro.next ?? null
        segundo = primeiro != null ? primeiro.next : null;
        segundo_passado.next = segundo != null ? segundo : primeiro

        console.log("[swap] nós da próxima iteração:", {
            primeiro: primeiro?.val ?? null,
            segundo: segundo?.val ?? null
        });
    }
    return head
};

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

function main() {
    const casos = [
        {
            entrada: [1, 2, 3, 4],
            esperado: [2, 1, 4, 3]
        },
        {
            entrada: [1],
            esperado: [1]
        },
        {
            entrada: [1, 2, 3],
            esperado: [2, 1, 3]
        },
        {
            entrada: [1, 2],
            esperado: [2, 1]
        },
    ];

    casos.forEach(({ entrada, esperado }, numeroCaso) => {
        console.log(`\n[main] ===== Caso ${numeroCaso + 1} =====`);
        console.log("[main] entrada bruta:", entrada);

        const lista = criarLista(entrada);

        console.log("[main] lista encadeada:", listaParaTexto(lista));
        console.log("[main] valores da lista:", listaParaArray(lista));
        console.log("[main] saída esperada:", esperado);

        try {
            const retornoAtual = swapPairs(lista);
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

    for (let node = head; node != null; node = node.next) {
        valores.push(node.val);
    }

    return valores;
}

function listaParaTexto(head) {
    return listaParaArray(head).join(" -> ");
}

main()
