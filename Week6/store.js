var form = document.coffeeShop;
var options = document.getElementsByTagName('option');
var quantity = document.getElementsByTagName('input');


form.addEventListener('submit', function (e){
    e.preventDefault();

    var results = 0;

    for(var i = 0; i < options.length; i++) {
        var result = Number(options[i].value) * Number(quantity[i].value)

        results += result
    }

    alert("Total is: $" + results);
})