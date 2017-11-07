var statusVerified="Employee Info verified";
var statusNotVerified="Employee Info not verified";
function verifyEmployeeResponse() {
				$.getJSON("employee_verification_response.json", function(
						result) {
					//alert(JSON.stringify(result));
//					$("#respHtml").appendTo('body').load("employee.html");
							$.each(result, function(i, field) {								
								$("#scac").text(field.scac);
								
								if(field.status == "2") {
									$("#empDtlFlds").hide();
									$("#empDtlVal").hide();
									$("#status").text(statusNotVerified);
								}
								else{
								$("#status").text(statusVerified);		
								}
								$("#reasonText").text(field.reasonTxt);
								$("#empId").text(field.empid);
								$("#firstName").text(field.firstName);
								$("#midName").text(field.midName);
								$("#lastName").text(field.lastName);
							});
		
				});
			}