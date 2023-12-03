let nomeHeroi = "Pikachu" 

let xpHeroi = 7000

if (xpHeroi <=1000) {
    console.log("O herói " + nomeHeroi + " é nivel de Ferro")
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    console.log("O herói " + nomeHeroi + " é nivel de Bronze")
}else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    console.log("O herói " + nomeHeroi + " é nivel de Prata")
} else if (xpHeroi > 5000 && xpHeroi <= 7000) {
    console.log("O herói " + nomeHeroi + " é nivel de Ouro")
} else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    console.log("O herói " + nomeHeroi + " é nivel de Platina")
}  else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    console.log("O herói " + nomeHeroi + " é nivel de Ascendente")
}  else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    console.log("O herói " + nomeHeroi + " é nivel de Imortal")
} else {
    console.log("O herói " + nomeHeroi + " é nivel de Radiante")
}

/*

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

*/
