var Form = {
  // Recives user data, returns error if fields empty
	"fieldIsEmpty" : function(userEntry) {
		if(userEntry == "" || userEntry == null || userEntry == undefined) {
			return true;
		}
	},

	// Receives user data and tests for valid length
	"validateLength" : function(userEntry) {
		if(userEntry != "" && userEntry != null && userEntry != undefined) {
			if(userEntry.length <= 3 || userEntry.length >= 50) {
				return true;
			}
		}
	},

	// Receives user data and tests for valid zip code
	"validateZip" : function(userEntry) {
		if(zipCode != "" && zipCode != null && zipCode != undefined) {
			if((zipCode <= 9999 || zipCode > 99999) || (isNaN(userEntry) == true)) {
				return true;
			}
		}
	}
}
