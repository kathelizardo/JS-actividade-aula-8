let pessoas = []

for (let i=0; i<2; i++) {
    alert("Iniciando registro da pessoa / Registro N°" + (i+1))

    let nome=prompt('Digite seu nome');
    let sobrenome= prompt('Digite seu sobrenome'); 
    let idade= Number(prompt('Digite sua idade'));
    let nacionalidade=prompt( 'Nacionalidade');
    let ciudade= prompt('Ciudade de Residência');
    let corfavorita= prompt ('Cor Favorita');
   
    console.log('REGISTROS');
    console.log('Nome:' + nome + (' ')+ sobrenome );
    console.log('Idade:' + idade + (' ') + 'anos');
    console.log('Nacionalidade:' + nacionalidade);
    console.log('Lugar de Residência:' + ciudade);
    console.log('Cor Favorita:' + corfavorita);
    

   
    let registro = {

        nome,
        sobrenome,
        idade,
        nacionalidade,
        ciudade,
        corfavorita
    }

    pessoas.push(registro)

 }

 console.log('--------------------------------')
 console.log('informação de interesse');

 if (pessoas [0].idade > pessoas [1].idade) {
     console.log(`${pessoas[0].nome} ${pessoas[0].sobrenome} é mais velho/a`) }

else if (pessoas [1].idade > pessoas [0].idade) {
    console.log(`${pessoas[1].nome} ${pessoas[1].sobrenome} é mais velho/a`) }

else { console.log (`${pessoas[0].nome} e ${pessoas[1].nome} tem a mesma idade`) }


if (pessoas [0].ciudade == pessoas [1].cuidade) {
    console.log(`${pessoas[0].nome} e ${pessoas[0].sobrenome} Moram no mesmo lugar`) }

else { console.log (`${pessoas[0].nome} e ${pessoas[1].nome} Não moram no mesmo lugar`) }


if (pessoas [0].nacionalidade == pessoas [1].nacionalidade) {
    console.log(`${pessoas[0].nome} e ${pessoas[0].sobrenome} têm a mesma nacionalidade`) }

else { console.log (`${pessoas[0].nome} e ${pessoas[1].nome} têm nacionalidades diferentes`) }