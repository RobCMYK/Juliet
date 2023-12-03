$(document).ready(function(){
    $("#confirm").click(function(e){
        e.preventDefault();

        console.log('You clicked the button');

        var email = $('#email').val();
        var pwd = $('#pwd').val();
        var termsAndConditions = $('#accept-terms-conditions').val();

        let emailString = "Your email is: " + email;
        let pwdString = "Your password is: " + pwd;
        let TACString = "You have agreed to the Terms and Conditions: " + termsAndConditions;

        // var emailOutPut = document.getElementById("results");
        // emailOutPut.value = emailString;

        // var userEmail = document.getElementById("email");
        // var userEmailVal = userEmail.value;

        // var userEmailOutput = document.getElementById("results");
        // userEmailOutput.value = emailString;

        document.getElementById("results").innerHTML = "Your email is: " + email + "<br>Your password is: " + pwd + "<br>Terms and Conditions box is: " + termsAndConditions;
    });
});

