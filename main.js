function validateForm() {

  var signupForm = document.forms["signup"];
	var firstName = signupForm["firstName"].value;
	var lastName = signupForm["lastName"].value;
	var zipCode = Number(signupForm["zipCode"].value);

	var displayError = document.getElementById("errorDisplay");
	var errorMessage = "";

	// Checks if first name value is empty, stores error message if true
	if(firstName == "" || firstName == null || firstName == undefined) {
		errorMessage += "<ul><li>First name</li>";
		signupForm["firstName"].style.border = "1px solid #F10D00";
	}

	// Checks if last name value is empty, stores error message if true
	if(lastName == "" || lastName == null || lastName == undefined) {
		errorMessage += "<li>Last name</li>";
		signupForm["lastName"].style.border = "1px solid #F10D00";
	}

	// Checks if zip code value is empty, stores error message if true
	if(zipCode == "" || zipCode == null || zipCode == undefined) {
		errorMessage += "<li>Zip code</li></ul>";
		signupForm["zipCode"].style.border = "1px solid #F10D00";
	}

	// Checks if firstName has value which meets required parameters
	if(firstName != "" && firstName != null && firstName != undefined) {
		if(firstName.length <= 3 || firstName.length >= 50) {
			errorMessage += "<li>First names must be between 3 and 50 characters</li></ul>";
			signupForm["firstName"].style.border = "1px solid #F10D00";
		}
	}

	// Checks if lastName has value which meets required parameters
	if(lastName != "" && lastName != null && lastName != undefined) {
		if(lastName.length <= 3 || lastName.length >= 50) {
			errorMessage += "<li>Last names must be between 3 and 50 characters</li></ul>";
			signupForm["lastName"].style.border = "1px solid #F10D00";
		}
	}

	// Checks if zipCode has value which meets required parameters
	if(zipCode != "" && zipCode != null && zipCode != undefined) {
		if((zipCode <= 9999 || zipCode > 99999) || (isNaN(zipCode) == true)) {
			errorMessage += "<li>Zip codes must be entered as a 5-digit numerical value</li></ul>";
			signupForm["zipCode"].style.border = "1px solid #F10D00";
		}
	}

	// Checks to see if error messages have been stored. Displays messages is true.
	if(errorMessage != "") {
		displayError.style.color = "red";
		displayError.innerHTML = "<p>Please provide the following valid information:</p>" + errorMessage;
		return false;
	}

}
