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


![photo_2025-03-14 19.00.42.jpeg](imgs/photo_2025-03-14%2019.00.42.jpeg)
![photo_2025-03-14 19.00.29.jpeg](imgs/photo_2025-03-14%2019.00.29.jpeg)
![photo_2025-03-14 19.00.28.jpeg](imgs/photo_2025-03-14%2019.00.28.jpeg)


Я давно мечтаю отправиться на север, в путешествие по старинным русским городам, которые входят в знаменитое туристическое кольцо — Золотое Кольцо России.

Вдоль одной железнодорожной линии расположены сразу два прекрасных города: Ярославль [🐻] и Кострома [🧀].

Это удивительные места с особенной атмосферой старины!

🚂 Поезд до Ярославля идёт около 3,5 часов.
А до Костромы — примерно 4 часа 15 минут, она лежит по тому же пути, но чуть дальше.
Когда-то я уже ездил туда за один день — утром туда, вечером обратно. Очень удобно и вполне реально!

![photo_2025-03-14 19.00.27.jpeg](imgs/photo_2025-03-14%2019.00.27.jpeg)

![photo_2025-03-14 19.00.37.jpeg](imgs/photo_2025-03-14%2019.00.37.jpeg)

![photo_2025-03-14 19.00.38.jpeg](imgs/photo_2025-03-14%2019.00.38.jpeg)


### Ярославль [🐻]

Это один из самых красивых городов Золотого Кольца.
Здесь ждут древние церкви, красивые музейные пространства и набережная, по которой приятно гулять весь день.
Местные кофейни порадуют своим уютом и вкусными напитками.
А ещё Ярославль знаменит своим гербом с медведем с секирой. Говорят, что когда-то медведи здесь ходили по улицам… Сейчас же их можно встретить лишь в виде памятников и на сувенирах.

[🐻]

Подробнее о Ярославле

https://en.wikipedia.org/wiki/Yaroslavl


![photo_2025-03-14 19.00.30.jpeg](imgs/photo_2025-03-14%2019.00.30.jpeg)
![photo_2025-03-14 19.00.34.jpeg](imgs/photo_2025-03-14%2019.00.34.jpeg)

### Кострома [🧀]

Это место больше для неспешных прогулок, чем для велопоездок.
Настоящий уголок провинциальной России с богатой историей.
Кострома как будто сохранила дух старого русского города времён Империи, каким он был до 1917 года.
Здесь есть несколько интересных музеев, старинный монастырь, а также великолепная набережная с видом на Волгу.
Особая гордость Костромы — местные сыры. Здесь можно попробовать множество сортов, сделанных по традиционным рецептам.
[🧀]


Подробнее о Костроме

https://en.wikipedia.org/wiki/Kostroma




34
![photo_2025-03-14 19.00.31.jpeg](imgs/photo_2025-03-14%2019.00.31.jpeg)
![photo_2025-03-14 19.00.32.jpeg](imgs/photo_2025-03-14%2019.00.32.jpeg)
![photo_2025-03-14 19.00.33.jpeg](imgs/photo_2025-03-14%2019.00.33.jpeg)

5
![photo_2025-03-14 19.00.36.jpeg](imgs/photo_2025-03-14%2019.00.36.jpeg)

2
![photo_2025-03-14 19.00.39.jpeg](imgs/photo_2025-03-14%2019.00.39.jpeg)
![photo_2025-03-14 19.00.40.jpeg](imgs/photo_2025-03-14%2019.00.40.jpeg)
3

![photo_2025-03-14 19.00.41.jpeg](imgs/photo_2025-03-14%2019.00.41.jpeg)

![photo_2025-03-14 19.00.35.jpeg](imgs/photo_2025-03-14%2019.00.35.jpeg)
![photo_2025-03-14 19.00.43.jpeg](imgs/photo_2025-03-14%2019.00.43.jpeg)








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
    zoom: 5.25,
    center: [39.34453, 56.25837],
    fitDuration: 9000
});
</script>