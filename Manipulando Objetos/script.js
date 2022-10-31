//ex 1 e 2
const listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [6, 8, 10, 8]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ],
        calcMedia: function() {
            for (let i = 0; i < this.materias.length; i++) {
                let somaNotas = 0
                let mediaNotas = 0
                let notas = this.materias[i].avaliacoes
                for (let j = 0; j < notas.length; j++) {
                    somaNotas += notas[j]                   
                }
                mediaNotas = somaNotas/notas.length
                this.materias[i].status = mediaNotas >= this.mediaCorte ? true : false
            }
            return this
        },
        quantidadeAprovacoes: function() {
            let somaAprovacoes = 0
            let percentage = this.materias.length*0.7
            for (let i = 0; i < this.materias.length; i++) {
                this.materias[i].status ? somaAprovacoes++ : false
            }
            this.status = somaAprovacoes >= percentage ? true : false
            return this
        }
    },
]

for (let i = 0; i < listaAlunos.length; i++){
    console.log(listaAlunos[i].calcMedia())
}

for (let i = 0; i < listaAlunos.length; i++){
    console.log(listaAlunos[i].quantidadeAprovacoes())
}

//ex 3 e 4
const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
        'São Paulo-SP',
        'Campinas-SP',
        'São José dos Campos-SP',
        'Volta Redonda-RJ'
    ],
    passageiros: [
        {
            nome: 'Luis da Silva',
            rg: '1234567890',
            bilhete: {
                origem: 'Curitiba-PR',
                destino: 'São José dos Campos-SP',
                poltrona: 15,
            }
        },
        {
            nome: 'João da Silva',
            rg: '1234567891',
            bilhete: {
                origem: 'São Paulo-SP',
                destino: 'Rio de Janeiro-RJ',
                poltrona: 16,
            }
        }
    ],
    descerNaParadaAtual: function(paradaAtual) {
        let passageirosHaDescer = []
        for (let i = 0; i < this.passageiros.length; i++) {
            if (paradaAtual === this.passageiros[i].bilhete.destino) {
                passageirosHaDescer.push(this.passageiros[i].nome)
                this.passageiros[i].viagemConcluida= true
            } 
        }
        console.log(this.passageiros)
        return passageirosHaDescer
    }
}

console.log(onibus.descerNaParadaAtual('Rio de Janeiro-RJ'))

