/**
 * @param {number[]} height
 * @return {number}
 */

// solução própria
var maxArea = function (height) {
    console.log('Entrada:', height);
    let maior = 0;
    let anterior1 = 0;
    let anterior2 = 0;
    for (let i = 0; i < height.length; i++) {
        const element1 = height[i];
        console.log('Lado esquerdo:', { i, element1, anterior1, anterior2, maior });
        if (element1 > anterior1) {
            anterior1 = element1
            for (let j = height.length - 1; j > i; j--) {
                const element2 = height[j];
                console.log('Lado direito:', { j, element2, anterior2 });
                if (element2 > anterior2) {
                    anterior2 = element2
                    const result = (j - i) * Math.min(element1, element2)
                    console.log('Área calculada:', { i, j, largura: j - i, altura: Math.min(element1, element2), result, maior });
                    if (maior < result) {
                        maior = result
                        console.log('Nova maior área:', maior);
                    }
                } else {
                    console.log('Lado direito ignorado:', { j, element2, anterior2 });
                }
            }
            anterior2 = 0
        } else {
            console.log('Lado esquerdo ignorado:', { i, element1, anterior1 });
        }
    }
    console.log('Resultado final:', maior);
    return maior;
};

// solução ideal
var maxArea = function (height) {
    let lp = 0;
    let rp = height.length - 1;
    
    let maxArea = 0;
    
    while (lp < rp) {
        let area = (rp - lp) * Math.min(height[rp], height[lp]);
        if (maxArea < area) maxArea = area;
        if (height[lp] < height[rp]) {
            lp++
        }
        else {
            rp--
        }
    }
    return maxArea

};

function main() {
    console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
}

main()
