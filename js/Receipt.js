
$(document).ready( function() {

	var width = $(window).width();

	if (width < 480) {
		$("#cart-headings").hide();
		$("form").hide();
		$("#marg").css({"padding-left":"5rem", "padding-right":"5rem"});
		$("#prodimg").css({"width":"100%"});
		$("#cart-contents").css({"position":"relative"});
		$("h4").css({"display":"inline-block"});
		$("#cart-contents-total").css({"display":"block","margin-left":"15rem" });
		$("#cart-contents-price").css({"display":"block","margin-left":"15rem" });


}




});