// Exercitando Funções e Objetos 
let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}

//ex 1
function showAge(obj) {
    return 2022 - obj.anoNascimento
}
console.log('Idade da Pessoa')
console.log(showAge(pessoa))

//ex 2
function showName(obj) {
    return obj.nome[0].toUpperCase() + obj.nome.substring(1, obj.nome.length).toLowerCase()
}
console.log('Nome da Pessoa')
console.log(showName(pessoa))

//ex 3
let listaUsuarios = []
function addToUsuarios(obj) {
    obj.nomeDeUsuario = obj.nomeDeUsuario.toLowerCase()
    listaUsuarios.push(obj)
    return listaUsuarios
}
console.log('Lista de usuários')
console.log(addToUsuarios(pessoa))

//ex 4
function confereVale(obj) {
    function converteString() {
        obj.distanciaDoTrabalho = obj.distanciaDoTrabalho.replace('km', '')
        obj.distanciaDoTrabalho = Number(obj.distanciaDoTrabalho)
    }
    converteString()
    if (obj.temCarro === true) {
        obj.valeCombustivel = ((obj.distanciaDoTrabalho * 6.99) * 0.7).toFixed(2)
        let res = `R$${obj.valeCombustivel}`
        res = res.replace('.', ',')
        return res
    } else {
        return 'A pessoa não tem direito a Vale Combustível'
    }
}
console.log('Confere Vale')
console.log(confereVale(pessoa))

//ex 5
let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
}

function addTipo(obj) {
    obj.tipo.push('Casa')
    return obj
} 

console.log('Completa propriedade Tipo')
console.log(addTipo(endereco))

//ex 6
function addPropriedade(obj1, obj2) {
    obj1.endereco.push(obj2)
    return obj1
}

console.log('Adicionando Obejto Endereço a Pessoa')
console.log(addPropriedade(pessoa, endereco))
