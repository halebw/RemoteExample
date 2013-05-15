$(document).ready(function() {

	$("nav p").click(function(e) {
		var linkName = $(this).html().toLowerCase();
		var url = "scripts/php/func.php";
		var posting = $.post(url, {func: "nav", navName: linkName});
		
		posting.done(function(data) {
		$('#content').html(data);
});

	});
});
