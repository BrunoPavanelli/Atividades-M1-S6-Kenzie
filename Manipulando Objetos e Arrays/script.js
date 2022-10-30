// Manipulando Objetos e Arrays

const listDepartment = [
    {
      departamentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departamentName: 'expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departamentName: 'capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
  ]
  
// Função para Retornar Quantidade de Departamentos
function howManyDepartaments(lista)  {
    return lista.length
} 
console.log('Número de Departamentos:')
console.log(howManyDepartaments(listDepartment))

//Função para Trocar nome de algum Departamento
function changeDepartamentName(initialName, newName) {
    let auxRes
    for (let i = 0; i < listDepartment.length; i++) {
        if (initialName != listDepartment[i].departamentName) {
            auxRes = 'Departament not found'
        } else if (initialName == listDepartment[i].departamentName) {
            listDepartment[i].departamentName = newName
            return listDepartment[i].departamentName
        }
    }
    return auxRes
}
console.log('Novo nome de Departamento')
console.log(changeDepartamentName('capitation', 'Capitação'))

//Função para dar tirar da folga ou dar folga para um Departamento
function giveTheDepartmenteABreak(departament) {
    let auxObj = listDepartment
    let auxRes
    for (let i = 0; i < auxObj.length; i++) {
        if (auxObj[i].departamentName !== departament) {
            auxRes = 'Department not found'
        } else if (auxObj[i].departamentName == departament) {
            auxObj[i].working = !auxObj[i].working 
            return auxObj[i].working ? 'Fim da Folga!' : 'Entraremos em Folga'
        }
    }
    return auxRes
}

console.log('Folga ou Trabalho?')
console.log(giveTheDepartmenteABreak('expedition'))

//Função para inserir Novo Departamento
function insertNewDepartament(newDepartment) {
    let auxObj = listDepartment
    auxObj.push(newDepartment)
    return newDepartment
}

let marketing = {
    departamentName: 'Marketing',
    employees: [],
    working: true
}

console.log('Novo Departamento')
console.log(insertNewDepartament(marketing))

//Função para adicionar Novos Funcionários para um Departamento
function insertNewEmplooye(departament, funcionario) {  
    let auxObj = listDepartment
    let auxRes
    for (let i = 0; i < auxObj.length; i++) {
        if (auxObj[i].departamentName != departament){
            auxRes = 'Department not found'
        } else {
            auxObj[i].employees.push(funcionario)
            return auxObj[i].employees
        }
    }
    return auxRes
}

let pessoa = {
    name: 'Jorge',
    age: '24',
    responsibility: 'Geral Assistent',
    salary: 2500
}

console.log('Departamento com Novo Funcionário')
console.log(insertNewEmplooye('Financial', pessoa))

//Função para contagem de Funcionários por Departamento
function howManyEmplooyesInDepartament(departament) {
    let auxObj = listDepartment
    let auxRes
    for (let i = 0; i < auxObj.length; i++) {
        if (auxObj[i].departamentName != departament){
            auxRes = 'Department not found'
        } else {
            return auxObj[i].employees.length
        }        
    }
    return auxRes
}

console.log('Número de Funcionários no Departamento')
console.log(howManyEmplooyesInDepartament('expedition'))

//Função para retornar a soma de todos os salários de um Departamento
function departamentPayrollCalc(departament) {
    let auxObj = listDepartment
    let auxRes
    let auxCalc = 0
    for (let i = 0; i < auxObj.length; i++) {
        if (auxObj[i].departamentName != departament){
            auxRes = 'Department not found'
        } else {
            for (let j = 0; j < auxObj[i].employees.length; j++) {
              auxCalc += auxObj[i].employees[j].salary
            }
            return auxCalc
        }
    }
    return auxRes
}
console.log('Soma dos salários de um Departamento')
console.log(departamentPayrollCalc('expedition'))

// Função para Cálculo da média das idades de um Departamento
function isTheDepartamentYoungOrOld(departament) {
  let auxObj = listDepartment
  let auxRes
  let auxCalc = 0
  let ageMedia = 0
  for (let i = 0; i < auxObj.length; i++) {
    if (auxObj[i].departamentName != departament){
      auxRes = 'Department not found'
    } else {
      for (let j = 0; j < auxObj[i].employees.length; j++) {
        auxCalc += auxObj[i].employees[j].age
      }
      ageMedia = auxCalc / auxObj[i].employees.length
      return ageMedia.toFixed(2)
    }    
  }
  return auxRes
}

console.log('Média das Idades de um Departamento')
console.log(isTheDepartamentYoungOrOld('expedition'))

//Função para Média dos Sálarios de um Departamento
function departamentAverageSalary(departament) {
  let auxObj = listDepartment
  let numEmplooye = 0
  let auxRes
  let auxBoo
  function contaLista() {
    for (let i = 0; i < auxObj.length; i++) {
      if (auxObj[i].departamentName != departament){
        auxBoo = false
      } else {
        for (let j = 0; j < auxObj[i].employees.length; j++) {
          numEmplooye++
        }
        return true
      }   
    }
    return auxBoo
  }
  if (contaLista() === false) {
    auxRes = 'Department not found'
  } else {
    let sumSalary = departamentPayrollCalc(departament)
    let salaryAverage = sumSalary/numEmplooye
    auxRes = salaryAverage.toFixed(2)
  }
  return auxRes
}

console.log('Media dos Salários de um Departamento')
console.log(departamentAverageSalary('Capitação'))

//Função para identificar a saúde de um Departamento
function departamentSituation(departament, maxPayRoll, maxEmplooyes) {
  let auxObj = listDepartment
  let auxRes
  let auxBoo
  function confereDepartament() {
    for (let i = 0; i < auxObj.length; i++) {
      if (auxObj[i].departamentName != departament){
        auxBoo = false
      } else {
        return true
      }
    }
    return auxBoo
  }
  if (confereDepartament() === false) {
    return 'Departament not found'
  } else {
    let numEmplooye = howManyEmplooyesInDepartament(departament)
    console.log(numEmplooye)
    let departamentPayRoll = departamentPayrollCalc(departament)
    console.log(departamentPayRoll)
    console.log(numEmplooye > maxEmplooyes)
      if (departamentPayRoll > maxPayRoll || numEmplooye > maxEmplooyes) {
        return 'The department needs attention'
      } else {
        return 'The department is healthy'
      }
  }
}

console.log('Conferir a saúde do Departamento')
console.log(departamentSituation('expedition', 600, 4))
