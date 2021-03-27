
function validateForm() {

    
    let regForm = document.regForm;

    let firstName = regForm.firstName.value;  
    let lastName = regForm.lastName.value;  
    let password = regForm.password.value;  
    let city = regForm.city.value;  
    let termsCond = regForm.termsCond.checked; 
    

    
    if ( firstName == "" ) {
        regForm.firstName.focus();
        alert( "Please enter a value for first name");
        return false;
    }
    
    if ( lastName == "" ) {
        regForm.lastName.focus();
        alert( "Please enter a value for last name");
        return false;
    }

    if ( password.length <= 7 ) {
        regForm.password.focus();
        alert( "Your password must be more than 7 characters long");
        return false;
    }


    let regularExpression = /[0-9]/;
    
    if ( !regularExpression.test( password ) ) {
    
        regForm.password.focus();
        alert( "Your password must contain a number");
        return false;
    }
    
    if ( city == -1 ) {
        regForm.city.focus();
        alert( "Your select your city");
        return false;
    }

  
    // Check to see if user has clicked terms and conditions
    if ( !termsCond ) {
        alert( "You must select the terms and conditions");
        return false;
    }


    // if I have reached here then everything must be good. Return true so that the form is submitted
    return true;

}


function submitHome() {
    alert("Thanks for sharing your contact, we will get in touch!")
  }