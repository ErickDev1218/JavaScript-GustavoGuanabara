/* 
    Objetos

Os objetos em JS se parecem muito com Array, mas eles podem sofrer alterações em seus indices. Nos Arrays, um valor dispoto no indice 1, sempre será o indice 1, já no objeto não, segue exemplos.

Assim seria um Array:

let a = [1, 6, 7, 5]
console.log(a[1])

Já nos objetos, eu declaro como quero chamar o indice:

let a = {nome: 'Erick', idade: 22, peso: 100.0}
console.log(a.nome)

Uma outra curiosidade de objetos, é que posso instalar funções dentro dele:

let a = {nome: 'Erick', 
idade: 22, 
peso: 100.0, 
engordou(k=0){
    console.log('Engordou')
    this.peso += k
}}
a.engordou(2)
console.log(`Seu nome é ${a.nome}, com idade ${a.idade} anos e pesa ${a.peso}Kg`)

*/

let a = {nome: 'Erick', 
idade: 22, 
peso: 100.0, 
engordou(k){
    console.log('Engordou')
    this.peso += k
}}
a.engordou(2)
console.log(`Seu nome é ${a.nome}, com idade ${a.idade} anos e pesa ${a.peso}Kg`)