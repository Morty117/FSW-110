var heading = ["Anthony Hernandez"];

for(var i = 0; i < 5; i++){
    var newH2 = document.createElement('h2');
    newH2.textContent = heading;
    newH2.style.fontSize = '20px';
    newH2.style.fontWeight = 'lighter';
    newH2.style.fontFamily = 'sans-serif';
    newH2.style.color = 'cornflowerblue';
    newH2.classList.add('border');
    document.body.appendChild(newH2);
}

