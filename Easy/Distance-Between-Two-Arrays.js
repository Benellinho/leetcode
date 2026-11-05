/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
// Problema do dia 05/11/2026
// Ideia: Fazer uma contagem de todos os elementos do array 1 que não violam a regra e quando violam a regra diminuir o contador
var findTheDistanceValue = function(arr1, arr2, d) {
    let contador = arr1.length;
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if(Math.abs(element - arr2[j]) <= d){
                contador--;
                break;
            }
        }
    }
    return contador
};

function main() {
    const casos = [
        {
            arr1: [4, 5, 8],
            arr2: [10, 9, 1, 8],
            d: 2,
            esperado: 2
        },
        {
            arr1: [1, 4, 2, 3],
            arr2: [-4, -3, 6, 10, 20, 30],
            d: 3,
            esperado: 2
        },
        {
            arr1: [2, 1, 100, 3],
            arr2: [-5, -2, 10, -3, 7],
            d: 6,
            esperado: 1
        }
    ];

    casos.forEach(({ arr1, arr2, d, esperado }, indice) => {
        const resultado = findTheDistanceValue(arr1, arr2, d);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { arr1, arr2, d });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
