var button = document.getElementById("square");

button.addEventListener("mouseover", buttonFunc1);
button.addEventListener("mousedown", buttonFunc2);
button.addEventListener("mouseup", buttonFunc3);
button.addEventListener("dblclick", buttonFunc4);
window.addEventListener("load", buttonFunc5);
button.addEventListener("wheel", buttonFunc6);
window.addEventListener("keydown", buttonFunc7);

function buttonFunc1(){
    document.getElementById('square').style.backgroundColor = 'green';
}

function buttonFunc2(){
    document.getElementById('square').style.backgroundColor = 'yellow';
}

function buttonFunc3(){
    document.getElementById('square').style.backgroundColor = 'blue';
}

function buttonFunc4(){
    document.getElementById('square').style.backgroundColor = 'red';
}

function buttonFunc5(){
    document.getElementById('square').style.backgroundColor = 'black';
}

function buttonFunc6(){
    document.getElementById('square').style.backgroundColor = 'purple';
}

function buttonFunc7(event){
    var key = event.key

    if(key === 'g'){
        document.getElementById('square').style.backgroundColor = 'green';
    }

    if(key === 'y'){
        document.getElementById('square').style.backgroundColor = 'yellow';
    }

    if(key === 'l'){
        document.getElementById('square').style.backgroundColor = 'blue';
    }

    if(key === 'r'){
        document.getElementById('square').style.backgroundColor = 'red';
    }

    if(key === 'b'){
        document.getElementById('square').style.backgroundColor = 'black';
    }

    if(key === 'p'){
        document.getElementById('square').style.backgroundColor = 'purple';
    }

    if(key === 'w'){
        document.getElementById('square').style.backgroundColor = 'white';
    }
}