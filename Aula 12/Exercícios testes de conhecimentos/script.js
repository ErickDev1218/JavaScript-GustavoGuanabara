function km(){
    let vel = document.getElementById('txtvel')

    let velocidade = Number(vel.value)

    let vum = document.getElementById('v1')

    if(velocidade >= 61){
        vum.innerHTML =`Sua velocidade é ${velocidade}km/hr,está ultrapassando o limite.<strong> MULTADO!</strong><br>Dirija sempre com segurança.`
    } else {
        vum.innerHTML = `Sua velocidade é ${velocidade}km/hr.<br> Parabéns, você está dentro do limite permitido.<br>Dirija sempre com segurança.`
    }
}

function age1(){
    let idade = document.getElementById('txtage')

    let idadeNumber = Number(idade.value)

    let ida = document.getElementById('age1')

    if(idadeNumber < 16){
        ida.innerHTML = `Você tem ${idadeNumber} anos. Você não pode votar!`
    }else if(idadeNumber < 18){
        ida.innerHTML = `Você tem ${idadeNumber} anos. Você pode votar de forma <strong>não obrigatória</strong>`
    }else if (idadeNumber > 65){
        ida.innerHTML = `Você tem ${idadeNumber} anos. Você pode votar de forma <strong>não obrigatória</strong>`
    }else{
        ida.innerHTML = `Você tem ${idadeNumber} anos. Você deve votar de forma <strong>obrigatória</strong> ` 
    }
        
}