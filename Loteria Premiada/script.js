// Loteria Premiada
let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

//ex 1
function comparaDados(nome, cpf) {
    nome = nome[0].toUpperCase() + nome.substring(1, nome.length)
    for (let i = 0; i < ganhador.cpf.length; i++) {
    ganhador.cpf = ganhador.cpf.replace('-', '')
    ganhador.cpf = ganhador.cpf.replace('.', '')
    }
    for (let j = 0; j < cpf.length; j++) {
    cpf = cpf.replace('-', '')
    cpf = cpf.replace('.', '')
    }
    return (nome == ganhador.nome && cpf == ganhador.cpf) ? 'É ganhador!' : 'É alarme falso!'
}

console.log(comparaDados('Adamastor', '123-321-789-98'))

//ex 2
function somaTentativas(pessoa) {
    let listaDeReindivicadores = []
    let data = pessoa
    if (comparaDados(data.nome, data.cpf) == 'É alarme falso!') {
        listaDeReindivicadores.push(data)
    }
    //Caso a lista ficasse com mais de um índice, aqui eu faria um loop for para contar cada posição, criando uma lista com o nome de cada posição, e retornaria essa lista no lugar de data.nome!
    return `${listaDeReindivicadores.length} Pessoa tentou retirar o prêmio: ${data.nome}`
}
let reindivicador = {
    nome: 'Jorge',
    cpf: '423.332.888-76'
}

console.log(somaTentativas(reindivicador))