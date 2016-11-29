$(function() {
	$(".carousel").carousel({
		pause: false
	});

	if ($("html").width() > 750) {
		$("#uec").css("line-height", $("#sec1").css("height"));
		$("#uee").css("line-height", $("#sec2").css("height"));
		$("#isuites").css("line-height", $("#sec3").css("height"));
	}
});