/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/ 

// get the result element
let result  = document.getElementById("result");

// Input numbers by key pressed
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Calculator logic
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Erro! Adicione valores válidos.")
    }
}

// Reset button
function reset(){
    result.value = "";
}

// Del button
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

/*
    ====================================================
    =================== TOGGLE THEME ===================
    ====================================================
*/

// Get the root element
var root = document.querySelector(':root');

// Create a function for setting a variable value
function myFunction_set(val) {
    document.getElementById('btnTheme').value = val; 
    
    if(val == 1){
        root.style.setProperty('--background'          , 'hsl(222, 26%, 31%)');
        root.style.setProperty('--background-dark'     , 'hsl(223, 31%, 20%)');
        root.style.setProperty('--background-very-dark', 'hsl(224, 36%, 15%)');
        
        root.style.setProperty('--key-color-top'       , '#FFF');
        root.style.setProperty('--key-color-bottom'    , 'hsl(222, 26%, 31%)');
        root.style.setProperty('--key-background'      , 'hsl(30, 25%, 89%)');

        root.style.setProperty('--key-blue-background' , 'hsl(225, 21%, 49%)');
        root.style.setProperty('--key-blue-shadow'     , 'hsl(224, 28%, 35%)');
    } 
    
    else if(val == 2){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');
    }
    
    else{

    } 
  
}


/*          THEME 2

    --background:#e6e6e6;
    --background-dark: #d3cdcd;
    --background-very-dark: #eeeeee;

    --key-color-top: #3d3d33;
    --key-color-bottom: #3d3d33;
    --key-background: #e5e4e0;

    --key-blue-background: #388187;
    --key-blue-shadow: #1c6166;

*/