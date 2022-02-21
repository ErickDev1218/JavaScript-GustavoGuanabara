function tabuada(){
    //DOM
    let num = document.getElementById('txtnumero')
    let seletor = document.getElementById('seltab')

    //lógica
    if(num.value.length == 0){
        alert('Digite um numero')
    }else{
        let n = Number(num.value)
        let cont = 1
        seletor.innerHTML = ''
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            seletor.appendChild(item)
            cont = cont+1
        }
    }
}