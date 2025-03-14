
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('kanal-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Дмитров - Конаково
        </div>
		<div class="cover-description">
			<div class="packages-location">
                <img loading="lazy" src="../assets-custom/icon-bike.png" alt="" class="cover-icon">
                <div class="h4-default regular">На велосипеде, 84 км.</div>
            </div>
            <div>
                <img class="cover-icon" loading="lazy" src="../assets-custom/icon-time.png" alt=""  />
                <span>1 день</span>
            </div>
		</div>
	</div>
</div>

<div id="map"></div>

[📍GPX трек dmitrov-konakovo.gpx](dmitrov-konakovo.gpx)

![photo_2025-03-14 18.56.49.jpeg](imgs/photo_2025-03-14%2018.56.49.jpeg)



Мы поедем 🚴 в эти выходные по знаменитому веломаршруту VELO-1: от Дмитрова до Дубны — 50 километров вдоль живописного канала.

![photo_2025-03-14 18.56.53.jpeg](imgs/photo_2025-03-14%2018.56.53.jpeg)


А потом ещё 30 километров по асфальтовой дороге до Конаково, где нас ждёт купание 🏊‍♂️ в великой реке Волге, на прекрасном берегу, окружённом соснами!

![photo_2025-03-14 18.56.51.jpeg](imgs/photo_2025-03-14%2018.56.51.jpeg)


Начнём наше путешествие на электричке с Белорусского вокзала в 08:00 утра.


![photo_2025-03-14 18.56.55.jpeg](imgs/photo_2025-03-14%2018.56.55.jpeg)

![photo_2025-03-14 18.56.56.jpeg](imgs/photo_2025-03-14%2018.56.56.jpeg)

![photo_2025-03-14 18.56.57.jpeg](imgs/photo_2025-03-14%2018.56.57.jpeg)

![photo_2025-03-14 18.56.58.jpeg](imgs/photo_2025-03-14%2018.56.58.jpeg)

![photo_2025-03-14 18.56.59.jpeg](imgs/photo_2025-03-14%2018.56.59.jpeg)








<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [{path: 'dmitrov-konakovo.gpx'}], 
    points: 'points.yaml',
    zoom: 7.3,
    center: [37.55421, 56.20568],
    fitDuration: 9000
});
</script>