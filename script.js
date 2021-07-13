// Result id
let result  = document.getElementById("result");

function input(num){
    let number = result.value;
    result.value = number + num;
}
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Erro! Adicione valores válidos.")
    }
}
function reset(){
    result.value = "";
}
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}