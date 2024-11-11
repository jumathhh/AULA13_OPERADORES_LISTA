/* //MAP
//percorre todo o array e executa a ação que tivermos programadado

let lista = ["Altamiro", "Barnabé", "Cremildo"];

lista.map((nome,posicao)=>{
    console.log(`O nome é ${nome} e ele ocupa a posicão ${posicao}`);
}) */

//REDUCE
//procura reduzir um array, normalmente, através de
//operações matematicas, transformando todo o conteudo
//do array em um unico valor

/* let numeros = [2, 3, 5, 10]
let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total até agora`);
    console.log(`${numero} -  valor atual`);
    console.log(`${indice} - posição até agora`);
    console.log(`${original} - array original`);

    console.log("---------------------------------")
    return acumulador *=numero
});

console.log(`Total do reduce é ${total}`);
 */

//FIND
//faz uma busca dentro do array e devolve o primeiro item que
//ele encontra e corresponde ao criterio de busca

/* let listagem = [2, 3, "Marcelo", 5, "Professor"];
let busca = listagem.find((item2)=>{
    if (item2 === "Marcelo"){
        return console.log("Nome encontrado")
    }else{
        return console.log("Nome não encontrado")
    };
});

console.log(busca); */

//FILTER
//filtra itens dentro do array
let palavras = ["Alface", "Beterraba", "Cenoura", "Dedo", "Espinafre"];

//vamos retronar palavras com menos de 7 letras
let resultado = palavras.filter((item3)=>{
    return item3.length>=7;
});

console.log(resultado)