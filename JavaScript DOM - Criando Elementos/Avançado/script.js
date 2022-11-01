const body = document.querySelector('body')

const artigo = document.createElement('article')
body.appendChild(artigo)

const title = document.createElement('h1')
const description = document.createElement('p')
const link = document.createElement('a')

artigo.appendChild(title)
artigo.appendChild(description)
artigo.appendChild(link)

title.innerText = 'Titulo do Post'
description.innerText = 'Descrição do Post'
link.href = ''
link.target = 'blank'
link.innerText = 'Ver post completo'