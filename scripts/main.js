function main() {	
	
	$("#htmlPanel").focus();

	$("#topBar").width($(window).width());

	tabHovering();
	activeTab();
	panelHeight();
	updateOutput();
	loadChanges();




}

$(document).ready(main);

function tabHovering() {
	$(".tabs").hover(function(){

		$(this).addClass("tabHover");

	},	function (){
		$(this).removeClass("tabHover");
	});
}

function activeTab() {
	$(".tabs").click( function (){

		$(this).toggleClass("active");
		var panelId = "#" + $(this).attr("id") + "Panel";

		$(panelId).toggle();
	});
}

function panelHeight() {
	$(".panel").height( $(window).height() - 46);
}

function updateOutput() {
	$("iframe").contents().find("html").html(
		"<html><head><style type = 'text/css'>" +			
			$("#cssPanel").val() +
				"</style></head><body>" +			
			$("#htmlPanel").val() +
			"</body></html>");

	document.getElementById('outputPanel').contentWindow.eval($("#javascriptPanel").val());

}

function loadChanges() {
	$("textarea").on('change keyup paste ', function (){
		updateOutput();		

	});
}

