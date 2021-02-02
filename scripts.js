//  CARNE = 400gr por pessoa + de 6 horas - 650
// CERVEJA - 1200ml por pessoa + 6hrs 2000 ml
// refrigerante/agua - 1000ml por pessoa + 6horas 1500ml

// crianças valem por 0,5 

let inputAdultos = document.getElementById("adultos");

let inputCriancas = document.getElementById("criancas");

let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;

    let duracao = inputDuracao.value;

    let qntdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

    let qntdTotalCerveja = cervejaPP(duracao) * adultos;

   let qntdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qntdTotalCarne / 1000}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntdTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntdTotalBebidas / 2000)} Pet's 2L de Bebidas</p>`;

}

function carnePP(duracao){
    if (duracao>= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao>= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(){
    if (duracao>= 6){
        return 1500;
    }else{
        return 1000;
    }
}