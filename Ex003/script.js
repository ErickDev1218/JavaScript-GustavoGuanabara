function contar(){
    //Variáveis dos inputs
    let beg = document.getElementById('txtini')
    let end = document.getElementById('txtfim')
    let step = document.getElementById('txtpas')
    
    //Variáveis da div
    let tell = document.getElementById('cont')

    //Inicio da lógica
    if(beg.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        tell.innerHTML = 'Impossivel contar!'

    }else{
        tell.innerHTML = 'Contando: <br> '
        let b = Number(beg.value)
        let e = Number(end.value)
        let s = Number(step.value)

        if(s <=0){
            alert('Consideraremos passo igual a 1')
            s = 1
        }
        if(b < e){//contagem crescente
            for(let count = b; count <= e; count += s){
                tell.innerHTML += ` ${count} \u{1F449}`
            }
        }else{//contagem decrescente
            for(let Count = b; Count >= e; Count-= s){
                tell.innerHTML += `${Count} \u{1F449}`
            }
        }

        
        tell.innerHTML += `\u{1F3C1}`
    } 
    }


