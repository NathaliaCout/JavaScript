function gerartabuada(){
    var num = window.document.getElementById('txtnum')
    var res = window.document.querySelector('div#res')
    var tab = window.document.getElementById('seltab')
    
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <=10 ; c++){
            var r = n * c 
            //res.innerHTML += (`${n} x ${c} = ${r} <br>`)

            //Exibir usando selct
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${r} `
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}