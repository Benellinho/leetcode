/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Ideia: Percorre o sudoku e guardar as informações de linha coluna e quadrante para identificar duplicatas;
var isValidSudoku = function (board) {
    let Coluna = []
    let Linha = []
    let Quadrado = []
    let q = 0;
    for (let i = 0; i < board.length; i++) {
        const linha = board[i];
        if (i % 3 == 0 && i != 0) {
            q += 3;
        }
        for (let j = 0; j < linha.length; j++) {
            const element = linha[j];
            if (element != ".") {
                const chaveq = `${q + Math.floor(j / 3) + 1}-${element}`;
                const chavec = `${j}-${element}`;
                const chavel = `${i}-${element}`;
                console.log("Coluna: ", Coluna)
                console.log("Linha: ", Linha)
                console.log("Quadrado: ", Quadrado)
                if (Coluna.includes(chavec)) {
                    console.log("Coluna igual: ", i, j, chavec)
                    return false;
                }
                else if (Linha.includes(chavel)) {
                    console.log("Linha igual: ", i, j, chavel)
                    return false
                }
                else if (Quadrado.includes(chaveq)) {
                    console.log("Quadrado igual: ", i, j, chaveq)
                    return false
                }
                Coluna.push(chavec)
                Linha.push(chavel)
                Quadrado.push(chaveq)
            }
        }
    }
    return true
};

function main() {
    const casos = [
        {
            board: [
                ["5", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"]
            ],
            esperado: true
        },
        {
            board: [
                ["8", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"]
            ],
            esperado: false
        },
        {
            board: [
                [".", ".", ".", ".", "5", ".", ".", "1", "."],
                [".", "4", ".", "3", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", "3", ".", ".", "1"],
                ["8", ".", ".", ".", ".", ".", ".", "2", "."],
                [".", ".", "2", ".", "7", ".", ".", ".", "."],
                [".", "1", "5", ".", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", "2", ".", ".", "."],
                [".", "2", ".", "9", ".", ".", ".", ".", "."],
                [".", ".", "4", ".", ".", ".", ".", ".", "."]
            ],
            esperado: false
        }
    ];

    casos.forEach(({ board, esperado }, indice) => {
        const resultado = isValidSudoku(board);
        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { board });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
