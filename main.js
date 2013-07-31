function validateForm() {

	var signupForm = document.forms["signup"];

	var firstName = signupForm["firstName"].value;
	var lastName = signupForm["lastName"].value;
	var zipCode = Number(signupForm["zipCode"].value);

	var displayError = document.getElementById("errorDisplay");
	var errorMessage = "";

	// Checks if first name value is empty, stores error message if true
	if(Form.fieldIsEmpty(firstName) == true) {
		errorMessage += "<ul><li>First name</li>";
		signupForm["firstName"].style.border = "1px solid #F10D00";
	}
	// Checks if firstName has value which meets required parameters
	if(Form.validateLength(firstName) == true) {
		errorMessage += "<li>First names must be between 3 and 50 characters</li></ul>";
		signupForm["firstName"].style.border = "1px solid #F10D00";
	}

	// Checks if last name value is empty, stores error message if true
	if(Form.fieldIsEmpty(lastName) == true) {
		errorMessage += "<li>Last name</li>";
		signupForm["lastName"].style.border = "1px solid #F10D00";
	}
	// Checks if lastName has value which meets required parameters
	if(Form.validateLength(lastName) == true) {
		errorMessage += "<li>Last names must be between 3 and 50 characters</li></ul>";
		signupForm["lastName"].style.border = "1px solid #F10D00";
	}

	// Checks if zip code value is empty, stores error message if true
	if(Form.fieldIsEmpty(zipCode) == true) {
		errorMessage += "<li>Zip code</li></ul>";
		signupForm["zipCode"].style.border = "1px solid #F10D00";
	}
	// Checks if zipCode has value which meets required parameters
	if(Form.validateZip(zipCode) == true) {
		errorMessage += "<li>Zip codes must be entered as a 5-digit numerical value</li></ul>";
		signupForm["zipCode"].style.border = "1px solid #F10D00";
	}

	// Checks to see if error messages have been stored. Displays messages is true.
	if(errorMessage != "") {
		displayError.style.color = "red";
		displayError.innerHTML = "<p>Please provide the following valid information:</p>" + errorMessage;
		return false;
	}
}
