function add(text){
    var input = document.getElementById('inputOfCalc');    
    input.value = input.value + text;
}
function result(){
    var result = document.getElementById('inputOfCalc').value;
    // console.log(result);
    let firstNum = '',
        secondNum = '',
        operation = '';
    for(let i = 0; i < result.length; i++){
        let char = result[i];
        if (char === '-' || char === '+' || char === '*' || char === '/'){
            operation = char;
        }else if(operation == ''){
            firstNum += char;
        }else {
            secondNum += char;
        }
    }
    let itogo;
    switch(operation){
        case '+' : itogo = Number(firstNum) + Number(secondNum);
        break;
        case '-' : itogo = firstNum - secondNum;
        break;
        case '*' : itogo = firstNum * secondNum;
        break;
        case '/' : itogo = firstNum / secondNum;
        break;
        default: console.log('NaN');
    }
console.log(itogo);

document.getElementById('inputOfCalc').value = result + ` = ${itogo}`;
}
