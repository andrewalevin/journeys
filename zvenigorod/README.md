
<meta property="og:title" content="Звенигород">
<meta property="og:description" content="Пешком по городу">
<meta property="og:image" content="https://andrewalevin.github.io/journeys/zvenigorod/zvenigorod-rozgd.jpg">

<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('zvenigorod-rozgd.jpg');">
	<div class="cover-text">
		<div class="cover-title">Звенигород</div>
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
        {path: 'zvenigorod-bus.gpx', color: 'blue'}, 
        {path: 'zvenigorod-gorod-hike.gpx'}], 
    points: 'points.yaml',
    zoom: 8.6,
    center: [37.30004, 55.74771],
    fitDuration: 9000
});
</script>
