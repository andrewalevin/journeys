
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('tutaev-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Рыбинск, Тутаев и Ярославль
        </div>
		<div class="cover-description">
			<div class="packages-location">
                <img loading="lazy" src="../assets-custom/bike-96.png" alt="" class="cover-icon">
                <div class="h4-default regular">На велосипеде, 106 км.</div>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon_time.png" alt=""  />
                <span>2 дня</span>
            </div>
		</div>
	</div>
</div>

Map

<div id="map"></div>

Text

[rybinsk-tutayev.gpx](rybinsk-tutayev.gpx)

[tutayev-yaroslavl.gpx](tutayev-yaroslavl.gpx)






<script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>

<script src="../assets-custom/js/gpx2mapbox.js"></script>

<script>
	initializeGPXMap({
		gpxFilePath: 'tver-toporok.gpx',
		mapHeight: '300px',
		center: [37.6173, 55.7558],
		zoom: 6, 
		containerId: 'map'
	});
</script>