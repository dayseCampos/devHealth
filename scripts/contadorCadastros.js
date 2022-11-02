let numeros = document.querySelectorAll('.contador');

numeros.forEach((contador) => {
    let numero = contador.textContent.split("");
    contador.textContent = "";
    numero.forEach((numero) => {
        let span = document.createElement("span");
        span.textContent = numero;
        span.className = "numero";
        contador.append(span);
    });
});

let currentNumeroIndex = 0;
let maxNumeroIndex = numeros.length - 1;
numeros[currentNumeroIndex].style.opacity = "1";

let rotacaoNumeros = () => {
    let currentNumero = numeros[currentNumeroIndex];
    let proximoNumero = currentNumeroIndex === maxNumeroIndex ? numeros[0] : numeros[currentNumeroIndex + 1];

    Array.from(currentNumero.children).forEach((numero, i) => {
        setTimeout(() => {
            numero.className = "numero saida";
        }, i * 80);
    });

    proximoNumero.style.opacity = "1";
    Array.from(proximoNumero.children).forEach((numero, i) => {
        numero.className = "numero atras";
        setTimeout(() => {
            numero.className = "numero entrada";
        }, 340 + i * 80);
    })
    currentNumeroIndex = currentNumeroIndex === maxNumeroIndex ? 0 : currentNumeroIndex + 1;
};

rotacaoNumeros();
setInterval(rotacaoNumeros, 9000)