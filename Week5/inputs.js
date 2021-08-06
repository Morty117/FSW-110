var form = document.newForm;

form.addEventListener ('submit', function (){
    var firstName = form.first.value;
    var lastName = form.last.value;
    var gender = form.gender.value;
    var hobbies = form.hobbies.value;
    var country = [];
    for (var i = 0; i < form.country.length; i++){
        if (form.country[i].checked){
            country.push(form.country[i].value)
        }
    }
    alert(firstName + '\n' + lastName + '\n' + gender + '\n' + hobbies + '\n' + country);
})

// function myFunc (){
//     var firstName = form.first.value;
//     var lastName = form.last.value;
//     var gender = form.gender.value;
//     var hobbies = form.hobbies.value;
//     var country = [];
//     for (var i = 0; i < form.country.length; i++){
//         if (form.country[i].checked){
//             country.push(form.country[i].value)
//         }
//     }
//     alert(firstName + '\n' + lastName + '\n' + gender + '\n' + hobbies + '\n' + country);
// }