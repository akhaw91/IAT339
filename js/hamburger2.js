
$(document).ready( function() {

	var width = $(window).width();

	if (width < 480) {
		$("#logoWord").css({"padding-left":"8rem", "padding-top":"2rem" });
		$("#navToggle").css("display","block"); 
		$("nav").hide();		
		$("#logo").hide();
		$("#message").hide();
		$("#hide").hide();



	}

	$("#navToggle").click( function() { 
		$("nav").slideToggle(500);
	});




});