function calcular(){
    let num = document.getElementById("txtNum");
    let tab = document.getElementById("selTab");
    let res = document.getElementById("res");

    if (num.value.length == 0){
        alert("[ERRO] Faltam Dados");
    }else{
        let n = Number(num.value);

        
        tab.innerHTML = '';
        for(let c = 1 ; c <= 10 ; c++){
            let item = document.createElement("option");

            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;

            tab.appendChild(item);
        }
    }

    
}