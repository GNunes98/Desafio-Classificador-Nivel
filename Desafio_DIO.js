

const readline = require('readline-sync');
var name = readline.question("Digite seu nome de heroi: ");
var escolha = 0;
while(escolha < 1) {



    var experiencia = parseInt(readline.question("quanto de experiencia foi obtida? \n"));
    var total = total + experiencia;

    escolha = readline.question("Deseja adicionar mais experiencia ?\n Sim - 0\n Nao - 1 \n");


}

var classificação;
switch (true){

    case experiencia < 1000:
        classificação = "Ferro";
        break;
    case (experiencia > 1001) && (experiencia <= 2000):
        classificação = "Bronze";
        break;
    case (experiencia >2001) && (experiencia <= 5000):
        classificação = "Prata";
        break;
    case (experiencia >5001) && (experiencia <= 7000):
        classificação = "Ouro";
        break;
    case (experiencia >7001) && (experiencia <= 8000):
        classificação = "Platina";
        break;
    case (experiencia >8001) && (experiencia <= 9000):
        classificação = "Ascendente";
        break;
    case (experiencia >9001) && (experiencia <= 10000):
        classificação = "Imortal";
        break;
    case experiencia >= 10001:
        classificação = "Radiante";
        break;
    default:
        classificação = " sem classificação";
        break;

}

console.log("O Herói de nome: " + name + "\nestá na classificação de nivel " + classificação);