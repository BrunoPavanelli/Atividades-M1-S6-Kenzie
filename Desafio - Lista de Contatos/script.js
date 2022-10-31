let agenda = {
    nome: '',
    contatos: []
}

// Função para Adicionar Contato
let jorge = {
    nome: 'Jorge',
    telefone: '11992939495'
}
let clara = {
    nome: 'Clara',
    telefone: '11955667788'
}
let amanda = {
    nome: 'Amanda',
    telefone: '11998999899'
}
let carlos = {
    nome: 'Carlos',
    telefone: '11992939495'
}
function adicionarContato(obj) {
    listaCont = agenda.contatos
    if (listaCont.length == 0) {
        listaCont.push(obj)
    } else {
        for (let i = 0; i < listaCont.length; i++) {
            if (obj.telefone == listaCont[i].telefone) {
                return "Numero de telefone já existente na lista"
            }
        }
        listaCont.push(obj)
    }
    return listaCont
}

console.log('Adicionando Contatos a lista')
console.log(adicionarContato(jorge))
console.log(adicionarContato(clara))
console.log(adicionarContato(amanda))
console.log(adicionarContato(carlos))

//Função para Listar Contatos
function listarContato(obj) {  
    let listaCont = obj.contatos
    if (listaCont.length == 0) {
        return 'Nenhum contato encontrado'
    } else {
        for (let i = 0; i < listaCont.length - 1; i++) {
            console.log(`${i+1} - Nome:${listaCont[i].nome} Telefone:${listaCont[i].telefone}`)
        }
        return (`${listaCont.length} - Nome:${listaCont[listaCont.length-1].nome} Telefone:${listaCont[listaCont.length-1].telefone}`)
    }

}

console.log('Listando Contatos')
console.log(listarContato(agenda))

//Função para Pesquisar Contato
function pesquisarContato(nome) {
    let listaCont = agenda.contatos
    let auxRes
    for (let i = 0; i < listaCont.length; i++) {
        if (nome == listaCont[i].nome) {
            return listaCont[i]
        } else {
            auxRes = `Nenhum contato com o nome ${nome} encontrado`
        }
    }
    return auxRes
}

console.log('Procurando Contato')
console.log(pesquisarContato('Clara'))

//Função para Editar Contato
function editarContato(index, nome, tel) {
    let listaCont = agenda.contatos
    let auxRes
    for (let i = 0; i < listaCont.length; i++) {
        if (index == i) {
            listaCont[i].nome = nome
            listaCont[i].telefone = tel
            return listaCont[i]
        } else {
            auxRes = 'Nenhum contato encontrado'
        }
    }
    return auxRes
}

console.log('Alterando contato da Lista')
console.log(editarContato(0, 'Carlos', '11933222233'))