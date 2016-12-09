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