var idade = 64

if (idade < 16) {
    console.log(`Sua idade é ${idade} anos, você não pode votar ainda.`)
} else if (idade < 18){
    console.log(`Sua idade é ${idade} anos, você pode votar de forma NÃO OBRIGATÓRIA`)
} else if (idade >= 65){
    console.log(`Sua idade é ${idade}, você pode votar de forma NÃO OBRIGATÓRIA`)
}
else {
    console.log (`Sua idade é ${idade}, você DEVE votar!`)
}