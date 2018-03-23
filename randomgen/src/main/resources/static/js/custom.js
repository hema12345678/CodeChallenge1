$(document).ready(function() {
	
	var url = "api/v1/generate_number";
	
	// GET REQUEST
	$("#generateRandomNo").click(function(event){
		event.preventDefault();	
		getGeneratedNumber();		
	});	
	
	function getGeneratedNumber() {
		$("#errorMessage").addClass("display-hidden");
		$("#errorMessage").html("");
		//GET INPUT OBJECT FORM DATA
		var minvalue = $("#minval").val();
		var maxvalue = $("#maxval").val();
		var inputData = "";
		var methodType = "GET";
		
		// Validation STEP 1
		if(minvalue ==="" || maxvalue ==="") {
			$("#errorMessage").removeClass("display-hidden");
			$("#errorMessage").html("Range Values cannot be empty");
			return false;
		}
		var rangeMin = parseInt(minvalue);
		var rangeMax = parseInt(maxvalue);
		
		// Validation DEFAULT RANGE STEP 2
		if(!(rangeMin === 0 && rangeMax === 20)) {			
			// Validation STEP 3
			if(rangeMin > rangeMax){
				$("#errorMessage").removeClass("display-hidden");
				$("#errorMessage").html("Minimum Value cannot be greater then Maximum Value");
				return false;
			}			
			// CONSTRUCT INPUTDATA OBJ
			inputData = {
				minval : minvalue,
	    		maxval : maxvalue
	    	};
			methodType = "POST";
		}
		
		// DO GET or POST
		$.ajax({
			type : methodType,
			contentType : "application/json",
			url : url,
			data : JSON.stringify(inputData),
			dataType: 'json',
			success: function(result, status, xhr){
				if(xhr.status == "200"){ 
					$('div.random-OutputDiv').text("The Generated Random Number : " + result.retval);
					console.log("Success: ", result);
				} else{
					$("#errorMessage").removeClass("display-hidden");
					$("#errorMessage").html("ERROR : " + e.responseJSON.message);		
					console.log("Fail: ", result);
				}
			},
			error : function(e) {
				$("#errorMessage").removeClass("display-hidden");
				$("#errorMessage").html("ERROR : " + e.responseJSON.message);
				console.log("ERROR: ", e);
			}
		});
	}

	
	$("#clearBtn").click(function(event){
		event.preventDefault();
		$("#minval").val("0");
		$("#maxval").val("20");
		$("#errorMessage").addClass("display-hidden");
		$("#errorMessage").html("");
		getGeneratedNumber();
		
	});
	
	  
	// VALIDATE INPUT TO ALLOW ONLY NUMERIC
	$('input.validate-input').bind('keypress', function (e) {
		return ((e.which < 48 || e.which > 57)) ? false : true;
    });
	
 });
