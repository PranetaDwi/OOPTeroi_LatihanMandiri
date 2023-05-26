function operasi(char){
    var init = document.getElementById('result').innerHTML;
    var look = "";
    if (init == '0'){
        look = char;
    } else{
        look = init + char;
    }
    document.getElementById('result').innerHTML = look;
}
function delAll(){
    var init = document.getElementById('result').innerHTML;
    init = 0;
    document.getElementById('result').innerHTML = init;
}
function del(){
    var init = document.getElementById('result').innerHTML;
    var panjang = init.length;
    if (panjang==1){
        init = 0;
    } else{
        init = init.substring(0, panjang-1)
    }
    document.getElementById('result').innerHTML = init;
}
function hasil(){
    var goresult = document.getElementById('result').innerHTML;
    var arr = [];
    var now = "";

    for ( var i = 0; i < goresult.length;i++){
        if (goresult[i]=='+' || goresult[i]=='-' || goresult[i]=='÷' || goresult[i]=='x'){
            if (now !== ""){
                arr.push(now);
                now="";
            }
            arr.push(goresult[i]);
        } else{
            now +=goresult[i];
        }

    }
    if (now !== "") {
        arr.push(now);
    }
    var jumtik = 0;
    for ( var i = 0; i < goresult.length; i++){
        if (goresult[i]=="."){
            jumtik += 1;
        }
    }

    if (jumtik=0){
        forint();
    } else{
        forfloat();
    }


    function forint(){
        var final = parseInt(arr[0]);
        for (var i=0; i < arr.length-1 ; i++){
            if (arr[i] == "+") {
                final = final + parseInt(arr[i+1])
            }
            if (arr[i] == "-") {
                final = final - parseInt(arr[i+1])
            }
            if (arr[i] == "÷") {
                final = final / parseInt(arr[i+1])
            }
            if (arr[i] == "x") {
                final = final * parseInt(arr[i+1])
            }
        }
        document.getElementById("result").innerHTML = final;
    }

    function forfloat(){
        var final = parseFloat(arr[0]);
        for (var i=0; i < arr.length-1 ; i++){
            if (arr[i] == "+") {
                final = final + parseFloat(arr[i+1])
            }
            if (arr[i] == "-") {
                final = final - parseFloat(arr[i+1])
            }
            if (arr[i] == "÷") {
                final = final / parseFloat(arr[i+1])
            }
            if (arr[i] == "x") {
                final = final * parseFloat(arr[i+1])
            }
        }
        document.getElementById("result").innerHTML = final;
    }
}


