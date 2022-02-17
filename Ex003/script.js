function contar(){
    //Variáveis dos inputs
    let beg = document.getElementById('txtini')
    let end = document.getElementById('txtfim')
    let step = document.getElementById('txtpas')
    
    //Variáveis da div
    let tell = document.getElementById('cont')

    //Inicio da lógica
    if(beg.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        alert('[ERROR] Faltam valores.')
    }else{
        tell.innerHTML = 'Contando: '
        let b = Number(beg.value)
        let e = Number(end.value)
        let s = Number(step.value)

        for(let count = b; count <= e; count += s){
            tell.innerHTML += ` ${count} \u{1F449}`
        }
        tell.innerHTML += `\u{1F3C1}`
    }
    }


