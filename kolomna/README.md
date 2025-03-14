<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('kolomna-river.jpg'); background-position-y: 15%;">
	<div class="cover-text">
		<div class="cover-title">
            Коломна
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

![photo_2025-03-14 22.26.40.jpeg](imgs/photo_2025-03-14%2022.26.40.jpeg)

![photo_2025-03-14 22.27.02.jpeg](imgs/photo_2025-03-14%2022.27.02.jpeg)


![photo_2025-03-14 22.26.23.jpeg](imgs/photo_2025-03-14%2022.26.23.jpeg)

![photo_2025-03-14 22.26.26.jpeg](imgs/photo_2025-03-14%2022.26.26.jpeg)

![photo_2025-03-14 22.26.27.jpeg](imgs/photo_2025-03-14%2022.26.27.jpeg)

![photo_2025-03-14 22.26.30.jpeg](imgs/photo_2025-03-14%2022.26.30.jpeg)

![photo_2025-03-14 22.26.24.jpeg](imgs/photo_2025-03-14%2022.26.24.jpeg)

![photo_2025-03-14 22.26.31.jpeg](imgs/photo_2025-03-14%2022.26.31.jpeg)

![photo_2025-03-14 22.26.28.jpeg](imgs/photo_2025-03-14%2022.26.28.jpeg)










<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [
        {path: 'kolomna-hike.gpx'}], 
    points: 'points.yaml',
    zoom: 6.0,
    center: [38.15409, 55.59607],
    fitDuration: 9000,
    fitMaxzoom: 11.5
});
</script>