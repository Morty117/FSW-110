var header = document.createElement('h1')
header.textContent = "Welcome to My JS Site!"
header.style.textAlign = 'center'
document.body.appendChild(header)

var paragraph = document.createElement('p')
paragraph.textContent = "All of this was created with javascript"
paragraph.style.textAlign = 'center'
document.body.appendChild(paragraph)


    var list = document.createElement('ol');
    document.body.appendChild(list)

    var listItem1 = document.createElement('li');
    var text1 = document.createTextNode('Arnold Schwarzenegger');
    listItem1.appendChild(text1);

    var listItem2 = document.createElement('li');
    var text2 = document.createTextNode('Ronnie Coleman');
    listItem2.appendChild(text2);

    var listItem3 = document.createElement('li');
    var text3 = document.createTextNode('Dallas McCarver');
    listItem3.appendChild(text3);

    document.querySelector('ol').appendChild(listItem1)
    document.querySelector('ol').appendChild(listItem2)
    document.querySelector('ol').appendChild(listItem3)
