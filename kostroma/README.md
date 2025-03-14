
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


![photo_2025-03-14 19.00.42.jpeg](photo_2025-03-14%2019.00.42.jpeg)
![photo_2025-03-14 19.00.36.jpeg](photo_2025-03-14%2019.00.36.jpeg)

Я давно мечтаю отправиться на север, в путешествие по старинным русским городам, которые входят в знаменитое туристическое кольцо — Золотое Кольцо России.

Вдоль одной железнодорожной линии расположены сразу два прекрасных города: Ярославль [🐻] и Кострома [🧀].

Это удивительные места с особенной атмосферой старины!

🚂 Поезд до Ярославля идёт около 3,5 часов.
А до Костромы — примерно 4 часа 15 минут, она лежит по тому же пути, но чуть дальше.
Когда-то я уже ездил туда за один день — утром туда, вечером обратно. Очень удобно и вполне реально!


![photo_2025-03-14 19.00.35.jpeg](photo_2025-03-14%2019.00.35.jpeg)
![photo_2025-03-14 19.00.38.jpeg](photo_2025-03-14%2019.00.38.jpeg)




Кострома [🧀]

Это место больше для неспешных прогулок, чем для велопоездок.
Настоящий уголок провинциальной России с богатой историей.
Кострома как будто сохранила дух старого русского города времён Империи, каким он был до 1917 года.
Здесь есть несколько интересных музеев, старинный монастырь, а также великолепная набережная с видом на Волгу.
Особая гордость Костромы — местные сыры. Здесь можно попробовать множество сортов, сделанных по традиционным рецептам.
[🧀]

Подробнее о Костроме



![photo_2025-03-14 19.00.37.jpeg](photo_2025-03-14%2019.00.37.jpeg)
![photo_2025-03-14 19.00.39.jpeg](photo_2025-03-14%2019.00.39.jpeg)
![photo_2025-03-14 19.00.40.jpeg](photo_2025-03-14%2019.00.40.jpeg)
32
![photo_2025-03-14 19.00.41.jpeg](photo_2025-03-14%2019.00.41.jpeg)



![photo_2025-03-14 19.00.43.jpeg](photo_2025-03-14%2019.00.43.jpeg)


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
    fitDuration: 12000,
    fitMaxzoom: 12.1
});
</script>