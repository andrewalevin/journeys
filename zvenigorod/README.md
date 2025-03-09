
<meta property="og:title" content="Звенигород">
<meta property="og:description" content="Пешком по городу">
<meta property="og:image" content="https://andrewalevin.github.io/journeys/zvenigorod/zvenigorod-rozgd.jpg">

<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('zvenigorod-rozgd.jpg');">
	<div class="cover-text">
		<div class="cover-title">Звенигород</div>
		<div class="cover-description">
			<div>
                <img class="cover-icon" src="../assets-custom/footsteps-96.png" loading="lazy" alt="" />
                <span>Пешком</span>
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


Text 

<script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>

    <!-- GPX2Mapbox Script -->
    <script src="assets-custom/js/gpx2mapbox.js"></script>

    <script>
        initializeGPXMap({
            gpxFilePath: 'tver-konakovo/tver-toporok.gpx',
            mapHeight: '300px', // Height in px or vh
            center: [37.6173, 55.7558], // Moscow coordinates
            zoom: 6,                    // Initial zoom level
            containerId: 'map'          // Optional, if you want to change container
        });
    </script>