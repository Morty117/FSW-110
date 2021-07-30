var number1 = document.getElementById('value1');
var number2 = document.getElementById('value2');
var multi = document.getElementById('multiply');

function multiplication(num1, num2, total){
    num1 = number1;
    num2 = number2;
    total = num1 * num2;
}

document.getElementById('multiply').addEventListener('click', multiplication);