// alert("Captive Portalda Padaria")
// const PASSWORD = "pao123"
// let attempts = 0

// while (attempts < 3) {
//     let enter_password = prompt("Digite a senha")
//     if (enter_password === PASSWORD) {
//         alert("Conectado, bom café!")
//         break
//     } else {
//         alert("Senha incorreta! ;@")
//     } 
//     attempts++
// }







// let contador = 10;

// while (contador >= 1) {
//     console.log(contador);
//     contador--;
// }

// console.log("Feliz Ano-Novo!");



const prompt = require("prompt-sync")(); // Jeito simples de ler o teclado

let total = 0;
let semanas = 0;

while (total < 300) {
    let resposta = prompt("Quanto Pedro ganhou esta semana? R$ ");
    let ganho = Number(resposta);

    if (ganho > 0) {
        total = total + ganho;
        semanas = semanas + 1;

        console.log("Total guardado: R$ " + total);

        if (total < 300) {
            console.log("Falta: R$ " + (300 - total));
        } else {
            console.log("Pedro já pode comprar a bicicleta!");
        }
    } else {
        console.log("Digite um valor maior que zero!");
    }
}

console.log("Semanas necessárias: " + semanas);