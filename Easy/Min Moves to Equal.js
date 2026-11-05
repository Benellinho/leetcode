/**
 * @param {number[]} nums
 * @return {number}
 */
// Problema do dia 03/11/2026
// Ideia: Pegar o maior numero e ver a diferença de todos e somar
var minMoves = function (nums) {
    const maior = Math.max(...nums)
    let movimentos = 0

    for (const numero of nums) {
        movimentos += maior - numero
    }

    return movimentos
};

function main() {
    const casos = [
        { nums: [2, 1, 3], esperado: 3 },
        { nums: [4, 4, 5], esperado: 2 }
    ]

    casos.forEach(({ nums, esperado }, indice) => {
        const resultado = minMoves(nums)
        console.log(`Caso ${indice + 1}:`)
        console.log('Entrada:', { nums })
        console.log('Resultado:', resultado)
        console.log('Esperado:', esperado)
    })
}

main()
