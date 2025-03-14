
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('kostroma.jpg'); background-position-y: 30%;">
	<div class="cover-text">
		<div class="cover-title">
            Кострома
        </div>
		<div class="cover-description">
			<div>
                <img class="cover-icon" src="../assets-custom/icon-footsteps.png" loading="lazy" alt="" />
                <span>Пешком</span>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon-time.png" alt=""  />
                <span>1 день</span>
            </div>
		</div>
	</div>
</div>

<div id="map"></div>









<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [
        {path: 'kostroma-bus.gpx', color: 'blue'},
        {path: 'kostroma-hike.gpx'},
        {path: 'kostroma-sloboda-hike.gpx'}],
    points: 'points.yaml',
    zoom: 5.4,
    center: [39.09734, 56.41638],
    fitDuration: 12000
});
</script>