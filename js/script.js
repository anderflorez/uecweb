$(function() {
	$(".carousel").carousel({
		pause: false
	});

	if ($("html").width() > 750) {
		$("#uec").css("line-height", $("#sec1").css("height"));
		$("#uee").css("line-height", $("#sec2").css("height"));
		$("#isuites").css("line-height", $("#sec3").css("height"));
		$("#uec_name").css("line-height", $("#uec_logo"));
	}
	else {
		$("#brand1").insertBefore("#uec");
		$("#brand3").insertBefore("#isuites");
	}

	function ucMap() {
		var mapOptions = {
			center: new google.maps.LatLng(26.268950, -80.143212),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(26.268950, -80.143212),
		});

		marker.setMap(map);
	}

	ucMap();
});