var newH1 = document.createElement("h1");
var newH1Text = document.createTextNode("Hello World");
newH1.appendChild(newH1Text);
document.body.appendChild(newH1);


var headings = ["Hello World"];

for (var x = 0; x < 10; x++){
    var nextH1 = document.createElement('h1');
    nextH1.textContent = headings;
    nextH1.style.color = 'red';
    nextH1.style.backgroundColor = 'black';
    nextH1.style.fontFamily = 'arial';
    document.body.appendChild(nextH1);
}

var names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

var nameList = document.createElement('ul');
document.body.appendChild(nameList);

for (var i = 0; i < names.length; i++){
    var list = document.createElement('li');
    list.textContent = names[i];
    nameList.appendChild(list);
}