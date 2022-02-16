function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    
    var res = document.getElementById('res')
    

    if(fano.value.length == 0 || fano.value > ano ){
        alert('[Error] Verifique os dados e tente novamente')
    } else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criancam1.png')
            } else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/adolem1.png')
            } else if( idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem1.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/senhor1.png')
            }
        }else if (sex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'imagens/criancaf1.png')
            } else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','imagens/adolef1.png')
            } else if( idade < 50){
                //adulto
                img.setAttribute('src','imagens/mulher1.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/senhora1.png')
            }
        }
        res.innerHTML = (`Detectamos ${genero} com idade ${idade} anos.`)
        res.appendChild(img)
        
    }
}