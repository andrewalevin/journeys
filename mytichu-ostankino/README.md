
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('rostokino-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Мытищи - Останкино вдоль Яузу
        </div>
		<div class="cover-description">
			<div class="packages-location">
                <img loading="lazy" src="../assets-custom/bike-96.png" alt="" class="cover-icon">
                <div class="h4-default regular">На велосипеде, 23 км.</div>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon_time.png" alt=""  />
                <span>1 день</span>
            </div>
		</div>
	</div>
</div>

Map

<div id="map"></div>

Text






<script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>

<script src="../assets-custom/js/gpx2mapbox.js"></script>

<script>
	initializeGPXMap({
		gpxFilePath: 'mytichu-ostankino.gpx',
		center: [37.6173, 55.7558],
		zoom: 6, 
		containerId: 'map'
	});
</script>