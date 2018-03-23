$(document).ready(function() {
	
	var url = "/api/v1/generate_number";
	
	// GET REQUEST
	$("#generateRandomNo").click(function(event){
		event.preventDefault();		
		
		//GET INPUT OBJECT FORM DATA
		var minvalue = $("#minval").val();
		var maxvalue = $("#maxval").val();
		var inputData = "";
		var methodType = "GET";
		
		// Validation STEP 1
		if(minvalue ==="" || maxvalue ==="") {
			$("#errorMessage").removeClass("hidden");
			$("#errorMessage").html("Range Values cannot be empty");
			return false;
		}
		var rangeMin = parseInt(minvalue);
		var rangeMax = parseInt(maxvalue);
		
		// Validation DEFAULT RANGE STEP 2
		if(!(rangeMin === 0 && rangeMax === 20)) {			
			// Validation STEP 3
			if(rangeMin > rangeMax){
				$("#errorMessage").removeClass("hidden");
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
		
		// DO GET
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
					$("#errorMessage").removeClass("hidden");
					$("#errorMessage").html("ERROR : " + e.responseJSON.message);			
					console.log("Fail: ", result);
				}
			},
			error : function(e) {
				$("#errorMessage").removeClass("hidden");
				$("#errorMessage").html("ERROR : " + e.responseJSON.message);
				console.log("ERROR: ", e);
			}
		});
	});	

	
	$("#clearBtn").click(function(event){
		event.preventDefault();
		$("#minval").val("0");
		$("#maxval").val("20");
		$("#errorMessage").addClass("hidden");
		$("#errorMessage").html("");
		
	});
	
	  
	// VALIDATE INPUT TO ALLOW ONLY NUMERIC
	$('input.validate-input').bind('keypress', function (e) {
		 //return (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 46) ? false : true;
		return ((e.which < 48 || e.which > 57)) ? false : true;
		/*var minval = $("#minval").val();
 		var maxval = $("#maxval").val();
 		if((minval ==="" || $.isNumeric(minval)) && (maxval ==="" || $.isNumeric(maxval))) {
 			$("#minval").val("0");
 			$("#maxval").val("20");
 			return false;
 		}*/
    });
	
 });
