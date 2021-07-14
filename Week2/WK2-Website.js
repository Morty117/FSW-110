var navBar = document.createElement('nav');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var header1 = document.createElement('h1');
var paragraph = document.createElement('p');
var listItems = document.createElement('ol');
var page1 = document.createElement('li');
var page2 = document.createElement('li');
var a = document.createElement('a');
var linkText = document.createTextNode('Basic Website');
var footer = document.createElement('footer');



div1.appendChild(a);
a.appendChild(linkText);
a.title = 'Basic Website';


div2.appendChild(listItems);
listItems.appendChild(page1);
listItems.appendChild(page2);
page1Text = document.createTextNode('Page 1');
page2Text = document.createTextNode('Page 2');
page1.appendChild(page1Text);
page2.appendChild(page2Text);


var header1Text = document.createTextNode('Welcome to the Basic Website!');
var paragraphText = document.createTextNode('This is the beginning of the first website created. There will be more additions in the future, but for now, enjoy these basic features. Thank you!')
header1.appendChild(header1Text);
paragraph.appendChild(paragraphText);

var footerText = document.createTextNode('Created by Anthony Hernandez <br>Any further details, email example@mail.com');
footer.appendChild(footerText);


navBar.appendChild(div1);
navBar.appendChild(div2);

document.body.appendChild(navBar);
document.body.appendChild(header1);
document.body.appendChild(paragraph);
document.body.appendChild(footer);