function tabuada(){
    let num = document.getElementById('txtn')
    let seletor = document.getElementById('seletor')

    if(num.value.length == 0){
        alert('Digite um número')
    }else{
        let n = Number(num.value)
        let c = 1
        seletor.innerHTML = ''

        while(c <=10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        seletor.appendChild(item)
        c++
    }
    }
}