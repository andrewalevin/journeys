
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('tutaev-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Рыбинск, Тутаев и Ярославль
        </div>
		<div class="cover-description">
			<div class="packages-location">
                <img loading="lazy" src="../assets-custom/icon-bike.png" alt="" class="cover-icon">
                <div class="h4-default regular">На велосипеде, 106 км.</div>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon-time.png" alt=""  />
                <span>2 дня</span>
            </div>
		</div>
	</div>
</div>

<div id="map"></div>

[📍GPX трек tutaev.gpx](tutaev.gpx)









<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [{path: 'tutaev.gpx'}], 
    points: 'points.yaml',
    zoom: 8.6,
    center: [37.30004, 55.74771],
    fitDuration: 9000
});
</script>