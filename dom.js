let pessoas = [];
let resposta = "S";
let contador = 0;

while (resposta == "S") {
    contador += 1;
    alert("Iniciando resgistro de pessoa N°" + (contador));
    pessoas.push (registrarPessoas());

    resposta = prompt ("Deseja registrar outra pessoa? (S/N)");
}

if (resposta == "N") {
    alert ("Registro finalizado - Ver Console");
}


function registrarPessoas() {
    let nome = prompt ("Digite seu nome");
    let sobrenome = prompt ("Digite seu sobrenome");
    let idade = Number (prompt ("Digite sua idade"));
    let CPF = prompt ("Digite seu CPF");
    let nacionalidade = prompt ("Digite sua nacionalidade");
    let ciudade = prompt ("Digite sua Ciudade de Residência");
    let corfavorita= prompt ('Digite sua Cor Favorita');


    console.log('REGISTRO DE PESSOA');
    console.log('Nome:' + nome + (' ')+ sobrenome );
    console.log('Idade:' + idade + (' ') + 'anos');
    console.log('CPF:'+ CPF);
    console.log('Nacionalidade:' + nacionalidade);
    console.log('Lugar de Residência:' + ciudade);
    console.log('Cor Favorita:' + corfavorita);

    let registro = {
        nome,
        sobrenome,
        idade,
        CPF,
        nacionalidade,
        ciudade,
        corfavorita,

        eMaisVelha: function(pessoa) {
            return this.idade > pessoa.idade;
        }      

    }
    return registro;
}

function ordenarPessoas(pessoas) {
    return pessoas.sort((a, b) => {
        if (a.eMaisVelha(b)) {
            return 1;
        } else if (b.eMaisVelha(a)) {
            return -1;
        } else {
            return 0;
        }
    });
}

console.log("Em ordem de idade, do mais novo ao mais velho:")
for (let pessoa of ordenarPessoas(pessoas)) {
    console.log(`${pessoa.nome} ${pessoa.sobrenome} com ${pessoa.idade} anos`)
}

