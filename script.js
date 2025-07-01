

function solve(val){
    var v = document.getElementById("calculations");
    v.value += val;
    calculation();
}

function clearInput(){
    var ac = document.getElementById("calculations");
    ac.value ='';

    var res = document.getElementById("res");
    res.value = '';
}

function backspace(){
    var v = document.getElementById("calculations");
    v.value = v.value.slice(0, -1);
    if(v.value.trim() !== ""){
        calculation();
    }else{
        clearInput();
    }
}

function result(){
    var res = document.getElementById("res");
    var calc = document.getElementById("calculations");
    calc.value = res.value;
    res.value = "";
}

function calculation(){
    var calc = document.getElementById("calculations");
    var res = document.getElementById("res");
    var num1 = document.getElementById("calculations").value;
    let operators = "/%*+-";
    try{
        if(num1.trim() != "" && !operators.includes(num1.slice(-1))){
            var num2 = eval(num1.replace('x', '*'));
            res.value = num2;
        }else{
            var num3 = num1.slice(0, -1);
            if(num3.length == 0){
                res.value = "";
                return;
            }
            var num2 = eval(num3.replace('x', '*'));
            res.value = num2;
        }
    }catch{
        res.value = 'Error';
    }
}