function multiplication(){
    var number1 = document.getElementById('value1').value;
    var number2 = document.getElementById('value2').value;
    var multiply = + number1 * + number2;
    document.getElementById('h1').innerHTML = multiply;
}

document.getElementById('multiply').addEventListener('click', multiplication);

function addition(){
    var number3 = document.getElementById('value3').value;
    var number4 = document.getElementById('value4').value;
    var add = + number3 + + number4;
    document.getElementById('h2').innerHTML = add;
}

document.getElementById('addition').addEventListener('click', addition);

function subtraction(){
    var number5 = document.getElementById('value5').value;
    var number6 = document.getElementById('value6').value;
    var subtract = number5 - number6;
    document.getElementById('h3').innerHTML = subtract;
}

document.getElementById('subtraction').addEventListener('click', subtraction);

document.body.style.backgroundColor = 'red';

document.getElementById('JS').style.fontSize = '50px';
document.getElementById('JS').style.textAlign = 'center';
document.getElementById('JS').style.fontFamily = 'Franklin Gothic';

document.getElementsByTagName('h2')[0].style.fontSize = '15px';
document.getElementsByTagName('h2')[0].style.textAlign = 'center';
document.getElementsByTagName('h2')[0].style.fontFamily = 'Franklin Gothic';

document.getElementsByTagName('h2')[1].style.fontSize = '15px';
document.getElementsByTagName('h2')[1].style.textAlign = 'center';
document.getElementsByTagName('h2')[1].style.fontFamily = 'Franklin Gothic';

document.getElementsByTagName('h2')[2].style.fontSize = '15px';
document.getElementsByTagName('h2')[2].style.textAlign = 'center';
document.getElementsByTagName('h2')[2].style.fontFamily = 'Franklin Gothic';

document.getElementById("calculator1").style.backgroundColor = 'blue';
document.getElementById("calculator1").style.padding = '100px';

document.getElementById("calculator2").style.backgroundColor = 'yellow';
document.getElementById("calculator2").style.padding = '100px';

document.getElementById("calculator3").style.backgroundColor = 'green';
document.getElementById("calculator3").style.padding = '100px';