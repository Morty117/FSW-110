var form = document.myForm;

form.addEventListener ('submit', function (e){
    e.preventDefault();
})

function myFunc (){
    var firstName = form.First.value;
    var lastName = form.Last.value;
    var emailAddress = form.Email.value;
    alert(firstName + '\n' + lastName + '\n' + emailAddress);
}