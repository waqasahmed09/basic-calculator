function add (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 + number2;
    document.getElementById('textArea').value = ` the result of Addition is: ${result} `;
}


function subtract (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 - number2;
    document.getElementById('textArea').value = ` the result of subtract is: ${result} `;
}


function multiply (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 * number2;
    document.getElementById('textArea').value = ` the result of multiplication is: ${result} `;
}  

function divide (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 / number2;

    if(number2 === 0){
        document.getElementById('textArea').value = ` Zero is not dividable number `;
    }
    document.getElementById('textArea').value = ` the result of division is: ${result} `;
}  