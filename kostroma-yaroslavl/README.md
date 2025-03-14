<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('kostroma-ipatevsky.jpg');     background-position-y: 30%;">
	<div class="cover-text">
		<div class="cover-title">
            Кострома и Ярославль
        </div>
		<div class="cover-description">
			<div>
                <img class="cover-icon" src="../assets-custom/icon-footsteps.png" loading="lazy" alt="" />
                <span>Пешком</span>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon-time.png" alt=""  />
                <span>2 дня</span>
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
        {path: 'yaroslavl-bus.gpx', color: 'blue'},
        {path: 'kostroma-hike.gpx'},
        {path: 'kostroma-sloboda-hike.gpx'},
        {path: 'yaroslavl-hike.gpx'}],
    points: 'points.yaml',
    zoom: 6.7,
    center: [37.93633, 55.88710],
    fitDuration: 9000
});
</script>