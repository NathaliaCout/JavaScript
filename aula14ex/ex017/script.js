function gerartabuada(){
    var num = window.document.getElementById('txtnum')
    var res = window.document.querySelector('div#res')

    var n = Number(num.value)

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        for (var c = 1; c <=10 ; c++){
            var r = n * c 
            res.innerHTML += (`${n} x ${c} = ${r} <br>`)
        }

    }  

    

}