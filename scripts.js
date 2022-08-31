
/* Scripts for User Form with Validation and Show/Hide Options */
/* By Julian Nyte */

//Event listenser for user form submission attempt
let userForm = document.querySelector("form");
userForm.addEventListener('submit', event => {
    //Prevent default page submit action (For form validation)
    event.preventDefault();
    //Validate user form before submission
    validateUserForm();
});

//Submit user form after passed validation
function submitUserForm() {
    let inputElements = userForm.querySelectorAll("input");
    let selectElements = userForm.querySelectorAll("select");
    inputElements.forEach(function (input) {
        if (input.type != "submit" && input.type != "button") {
            console.log(input.id + ": " + input.value);
        }
    });
    selectElements.forEach(function (select) {
        console.log(select.id + ": " + select.value);
    });
    document.getElementById("userForm").style.display = "none";
    document.getElementById("userFormSubmitted").style.display = "block";
}

//Set Show Service Options Boolean (if user selects option 2 or 3 from services).
var showServicesOptions = 0;

//Validate user form on submission
function validateUserForm() {
    document.getElementById("fname-Error").innerHTML = document.getElementById("services-Error").innerHTML = document.getElementById("servicesAddtionalOption-Error").innerHTML = document.getElementById("province-Error").innerHTML = "";
    if (document.userForm.fname.value == null || document.userForm.fname.value == "") {
        document.getElementById("fname-Error").innerHTML = "Please enter your first (or single) name.";
        return false;
    } else if (document.userForm.services.value == null || document.userForm.services.value == "0" || document.userForm.services.value == "1") {
        document.getElementById("services-Error").innerHTML = "Please select the services you are looking for.";
        return false;
    }
    if (showServicesOptions == 1) {
        if (document.userForm.servicesAddtionalOption.value == "0" || document.userForm.servicesAddtionalOption.value == "1") {
            document.getElementById("servicesAddtionalOption-Error").innerHTML = "Please select the service region you are looking for.";
            return false;
        }
    }
    if (document.userForm.province.value == "0" || document.userForm.province.value == "1") {
        document.getElementById("province-Error").innerHTML = "Please select your province or Territory.";
        return false;
    } else if (document.userForm.province.value !== "3") {
        document.getElementById("province-Error").innerHTML = "This form is only for citizens of Ontario. Please check with you province or Territory.";
        return false;
    } else {
        submitUserForm();
    }
}

//Validate user form for additional service options on submission
function showOptionsUserForm(SelectValue) {
    if (SelectValue == "2" || SelectValue == "3") {
        document.getElementById("servicesAddtionalOptions").style.display = "block";
        showServicesOptions = 1;
    } else {
        document.getElementById("servicesAddtionalOptions").style.display = "none";
        showServicesOptions = 0;
    }
}

//Reset user all user form feilds
function resetUserForm() {
    document.getElementById("userForm").reset();
}
