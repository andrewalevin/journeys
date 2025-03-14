
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('yauza-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Мытищи - Останкино вдоль Яузу
        </div>
		<div class="cover-description">
			<div class="packages-location">
                <img loading="lazy" src="../assets-custom/icon-bike.png" alt="" class="cover-icon">
                <div class="h4-default regular">На велосипеде, 23 км.</div>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon-time.png" alt=""  />
                <span>1 день</span>
            </div>
		</div>
	</div>
</div>

<div id="map"></div>

[📍GPX трек mytichu-ostankino.gpx](mytichu-ostankino.gpx)









<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [{path: 'mytichu-ostankino.gpx'}], 
    points: 'points.yaml',
    zoom: 9.2,
    center: [37.67449, 55.77906],
    fitDuration: 9000
});
</script>
