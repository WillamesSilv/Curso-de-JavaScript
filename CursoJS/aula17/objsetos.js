let amigo = {nome: `José`,
sexo: 'M',
peso:70.3,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(5)

console.log(`Meu amigo chama ${amigo.nome} e pesa ${amigo.peso}kgs.`)
