const alunos = [
    {
        nome: 'Pablo',
        idade: 25
    },
    {
        nome: 'Jose',
        idade: 19
    },
    {
        nome:"Roberto",
        idade: 16
    }
]

const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.log(alunosFiltrados)

const alunoRoberto = alunos.find(aluno => aluno.nome == 'Roberto');
console.log(alunoRoberto);

const alunoRobertoIndex = alunos.findIndex(aluno => aluno.nome == 'Roberto');
console.log(alunoRobertoIndex);

const idades = alunos.reduce((acc, aluno)=>{
    return acc + aluno.idade
}, 0)
console.log(idades)


const idadeTotal = alunos.some(alunos => alunos.idade < 17);
console.log(idadeTotal)

const alunoMenor = alunos.every(alunos=> alunos.idade<20);
console.log(alunoMenor)
