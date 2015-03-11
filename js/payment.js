
$(document).ready( function() {

	var width = $(window).width();

	if (width < 480) {
		$("#back").hide();
		$("#cart-headings").hide();
		$("form").css({"display":"block","margin-left":"5rem" });
		$("#totals").css({"position":"relative", "margin-left":"10rem"});
		$("#info").css({"position":"relative"});

}




});