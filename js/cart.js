
$(document).ready( function() {

	var width = $(window).width();

	if (width < 480) {
		$("#cart-headings").hide();
		$("#prodimg").css({"display":"inline-block", "width":"100%"});
		$("h4").css({"position":"relative", "display":"inline-block"});
		$("form").hide();
		$("#cart-contents-total").css({"display":"block","margin-left":"15rem" });
		$("#cart-contents-price").css({"display":"block","margin-left":"15rem" });

		
}




});