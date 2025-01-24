function contagem(){
    var comeco = window.document.getElementById('txtini')
    var ate = window.document.getElementById('txtfim')
    var pas = window.document.getElementById('txtpas')
    var res = window.document.getElementById('res')

    if (comeco.value.length == 0 || ate.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
        
    }else {
        res.innerHTML = `Contando: <br>`
        var i = Number(comeco.value)
        var f = Number(ate.value)
        var p = Number(pas.value)

        if(p <=0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        
        if (i < f){
            //Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            } 

        }else{
            //Contagem regressiva
            for(var c = i; c>=f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML+= `\u{1F3C1}`

        
    }
/*

    


    while (comeco <= ate){
       
        comeco = comeco + c
        var res.innertexto = comeco
    }
        */
    
    
}
    

    





