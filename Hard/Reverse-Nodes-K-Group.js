/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Ideia: separar em grupos de tamanho k para colocar em uma array para facilitar a manipulação
// depois prosseguir conectando o inicio do grupo e o fim do grupo corretamente nos grupos adjacentes 
var reverseKGroup = function (head, k) {
    if (k == 1) {
        return head
    }
    let cursor = head;
    let primeiro = true;
    let grupos = [];
    let atual = null;
    while (cursor != null) {
        atual = atual ?? cursor;
        for (let i = 0; i < k; i++) {
            if (cursor != null) {
                grupos[i] = cursor;
                cursor = cursor.next;
            }
            else {
                console.log("[reverseKGroup] grupo incompleto; retornando a lista atual");
                return head
            }
        }
        console.log("[reverseKGroup] estado dos ponteiros:", {
            cursor: cursor?.val ?? null,
            atual: atual?.val ?? null
        });



        console.log("[reverseKGroup] grupo encontrado:", grupos.map(node => node.val));

        for (let i = k - 1; i >= 0; i--) {
            const element = grupos[i];
            element.next = grupos[i - 1]
        }

        console.log("[reverseKGroup] grupo após inversão:", grupos.slice().reverse().map(node => node.val));
        if (primeiro) {
            head = grupos[k - 1];
            primeiro = !primeiro
        }
        else {
            atual.next = grupos[k - 1]
            atual = grupos[0]
        }
        grupos[0].next = cursor
        console.log("[reverseKGroup] lista atual:", listaParaArray(head));
    }
    return head
};

function main() {
    const casos = [
        {
            entrada: { lista: [1, 2, 3, 4, 5], k: 1, },
            esperado: [1, 2, 3, 4, 5]
        },
        {
            entrada: { lista: [1, 2, 3, 4, 5], k: 2, },
            esperado: [2, 1, 4, 3, 5]
        },
        {
            entrada: { lista: [1, 2, 3, 4, 5], k: 3, },
            esperado: [3, 2, 1, 4, 5]
        },
        {
            entrada: { lista: [1, 2, 3, 4, 5, 6], k: 2, },
            esperado: [2, 1, 4, 3, 6, 5]
        }
        ,
        {
            entrada: { lista: [8,9,8,8,5,7,7,0,3,5], k: 3, },
            esperado: [8,9,8,7,5,8,3,0,7,5]
        }
    ];

    casos.forEach(({ entrada, esperado }, numeroCaso) => {
        console.log(`\n[main] ===== Caso ${numeroCaso + 1} =====`);
        console.log("[main] entrada bruta:", entrada);

        const lista = criarLista(entrada.lista);

        console.log("[main] lista encadeada:", listaParaTexto(lista));
        console.log("[main] valores da lista:", listaParaArray(lista));
        console.log("[main] saída esperada:", esperado);

        try {
            const retornoAtual = reverseKGroup(lista, entrada.k);
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

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

main()
