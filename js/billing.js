
$(document).ready( function() {

	var width = $(window).width();

	if (width < 480) {
		$("#cart-headings").hide();
		$("form").css({"display":"block","margin-left":"5rem" });
		$("#totals").css({"position":"relative", "margin-left":"10rem"});
		$("#back").hide();

}




});