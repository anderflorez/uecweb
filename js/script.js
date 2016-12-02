$(function() {
	$(".carousel").carousel({
		pause: false
	});

	if ($("html").width() > 750) {
		$("#uec").css("line-height", $("#sec1").css("height"));
		$("#uee").css("line-height", $("#sec2").css("height"));
		$("#isuites").css("line-height", $("#sec3").css("height"));
	}
	else {
		$("#brand1").insertBefore("#uec");
		$("#brand3").insertBefore("#isuites");
	}

	var project=new google.maps.LatLng(25.935078,-80.121629);
	var center=new google.maps.LatLng(26.256238,-80.323836);

	function initialize(){
		var mapProp = {
			center:project,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};

		var map=new google.maps.Map(document.getElementById("map"),mapProp);

		var marker=new google.maps.Marker({
			position:project,
			icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
		});
		
		var marker1=new google.maps.Marker({
			position:hCenter1,
			icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
		});

		marker.setMap(map);
		marker1.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});