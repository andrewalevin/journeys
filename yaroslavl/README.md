<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('yaroslavl.jpg'); background-position-y: 80%;">
	<div class="cover-text">
		<div class="cover-title">
            Ярославль
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

![photo_2025-03-14 19.00.27.jpeg](imgs/photo_2025-03-14%2019.00.27.jpeg)

Я давно мечтаю отправиться на север, в путешествие по старинным русским городам, которые входят в знаменитое туристическое кольцо — Золотое Кольцо России.

Вдоль одной железнодорожной линии расположены сразу два прекрасных города: Ярославль [🐻] и Кострома [🧀].

Это удивительные места с особенной атмосферой старины!

![photo_2025-03-14 19.00.28.jpeg](imgs/photo_2025-03-14%2019.00.28.jpeg)
![photo_2025-03-14 19.00.29.jpeg](imgs/photo_2025-03-14%2019.00.29.jpeg)

🚂 Поезд до Ярославля идёт около 3,5 часов.

А до Костромы — примерно 4 часа 15 минут, она лежит по тому же пути, но чуть дальше.

Когда-то я уже ездил туда за один день — утром туда, вечером обратно. Очень удобно и вполне реально!


![photo_2025-03-14 19.00.34.jpeg](imgs/photo_2025-03-14%2019.00.34.jpeg)


Ярославль [🐻]

Это один из самых красивых городов Золотого Кольца.

Здесь ждут древние церкви, красивые музейные пространства и набережная, по которой приятно гулять весь день.

Местные кофейни порадуют своим уютом и вкусными напитками.

А ещё Ярославль знаменит своим гербом с медведем с секирой. Говорят, что когда-то медведи здесь ходили по улицам… Сейчас же их можно встретить лишь в виде памятников и на сувенирах.
[🐻]

Подробнее о Ярославле



Эти города находятся на северо-востоке, в 250–300 километрах от Москвы.
В каждом из них можно почувствовать настоящую русскую душу и прикоснуться к истории.



![photo_2025-03-14 19.00.30.jpeg](imgs/photo_2025-03-14%2019.00.30.jpeg)
![photo_2025-03-14 19.00.31.jpeg](imgs/photo_2025-03-14%2019.00.31.jpeg)
![photo_2025-03-14 19.00.32.jpeg](imgs/photo_2025-03-14%2019.00.32.jpeg)
![photo_2025-03-14 19.00.33.jpeg](imgs/photo_2025-03-14%2019.00.33.jpeg)






<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [
        {path: 'yaroslavl-bus.gpx', color: 'blue'},
        {path: 'yaroslavl-hike.gpx'}], 
    points: 'points.yaml',
    zoom: 5.7,
    center: [38.69379, 56.05797],
    fitDuration: 9000,
    fitMaxzoom: 12
});
</script>