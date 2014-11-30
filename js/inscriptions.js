function isTheFieldEmpty(fieldName) {
	var x = document.forms["myPayPal"][fieldName].value;
	if (x==null || x=="") { 
		return true;
	}
	return false;
}

function switchToVisit(e) {
      e.preventDefault(); // if desired...
      $("#participant_part").hide();// other methods to call...
	  $("#pVisit").hide();
	  $("#pParti").show();
	  $("#visitor_part").show();
	  $('#os0 :nth-child(2)').prop('selected', true);
	  $('#os6 :nth-child(2)').prop('selected', true);	  
}

function switchToParticipant(e) {
      e.preventDefault(); // if desired...
      $("#participant_part").show();// other methods to call...
	  $("#pVisit").show();
	  $("#pParti").hide();
	  $("#visitor_part").hide();
	  $('#os0 :nth-child(1)').prop('selected', true);
	  $('#os6 :nth-child(1)').prop('selected', true);
}

$(function() {
    $("#switchToVisit").click(switchToVisit);
});
  
  $(function() {
    $("#switchToParticipant").click(switchToParticipant);
});

function validateForm() {
	var formIsNotValid = false;
	
	var index = document.forms["myPayPal"]["os0"].selectedIndex;
	if (index == 0 || index == 1) {
		if (isTheFieldEmpty("os2") || // nom
			isTheFieldEmpty("os3") || // prénom
			isTheFieldEmpty("os4"))  {// email
			formIsNotValid = true;
		}
	} 
	
	if($("input#os4").getVerimailStatus() != "success"){
			if ($('html').attr('lang') == 'fr') {
				alert("L'adresse e-mail est invalide");
				
			} else {
				alert("Invalid e-mail address");
			}
			return false;
	}else{
		if (formIsNotValid) {
			if ($('html').attr('lang') == 'fr') {
				alert("Veuillez indiquer toutes les informations demandées. Merci.");
			} else {
				alert("Please fill in all required information. Thanks.");
			}
			return false;
		}
	}
	return true;
}





$(document).ready(function() {
	if (window.location.search == '?visitor' || window.location.search == '?visiteur') {
		switchToVisit(new Event('plop'));
	}
	$('#myPayPal').submit(validateForm);
	$('input#os4').verimail({messageElement: "span#mailmsg"});

});