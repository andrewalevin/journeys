
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('gorodok-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Дютково в окрестностях Звенигорода
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


![photo_2025-03-14 19.50.27-1.jpeg](imgs/photo_2025-03-14%2019.50.27-1.jpeg)


Исторический и живописный веломаршрут недалеко от Москвы (примерно 40 км от города).
Идеально для поездки на выходных — в субботу или воскресенье.


![photo_2025-03-14 19.50.22.jpeg](imgs/photo_2025-03-14%2019.50.22.jpeg)

Общее описание маршрута
•	Старт: Белорусский вокзал → Голицыно (электричка)
•	Веломаршрут: Голицыно → Вязёмы → Захарово → Звенигород
•	Общая протяжённость веломаршрута: 40-50 км (в зависимости от ответвлений)


![photo_2025-03-14 19.50.27.jpeg](imgs/photo_2025-03-14%2019.50.27.jpeg)


![photo_2025-03-14 19.50.23.jpeg](imgs/photo_2025-03-14%2019.50.23.jpeg)

**1. Усадьба Вязёмы**

Старинная усадьба, принадлежавшая князьям Голицыным.
Что посмотреть:
•	Церковь Преображения конца XVI века
•	Исторические здания усадьбы
•	Парк и пруды
Ссылка на Google Maps:
https://goo.gl/maps/7HpRVPSPdD52


![photo_2025-03-14 19.50.24.jpeg](imgs/photo_2025-03-14%2019.50.24.jpeg)

**2. Усадьба Захарово**

Усадьба бабушки Александра Сергеевича Пушкина, где он проводил детские летние каникулы.
Что посмотреть:
•	Дом-музей Пушкина
•	Парковая зона и прогулочные тропы
Ссылка на Google Maps:
https://goo.gl/maps/ZTNT13RDaKt


![photo_2025-03-14 19.50.28.jpeg](imgs/photo_2025-03-14%2019.50.28.jpeg)


**3. Город Звенигород**

Один из древнейших городов Подмосковья, основан в XII веке.
Что посмотреть:
•	Саввино-Сторожевский монастырь, основанный в 1398 году
•	Успенский собор с фресками Андрея Рублёва
Ссылка на монастырь в Google Maps:
https://goo.gl/maps/h3yBR6EFSVt


Природа и пейзажи
•	Лесные дорожки, поля и виды на реку
•	Возможность купания в Москве-реке
•	Сосновые леса и свежий воздух в районе Звенигорода


![photo_2025-03-14 19.50.24-1.jpeg](imgs/photo_2025-03-14%2019.50.24-1.jpeg)


Еда и отдых
•	В Звенигороде есть кафе и рестораны с традиционной русской кухней
•	Или можно взять еду с собой и устроить пикник в парке или на берегу реки


Возвращение
•	Станция Звенигород → Белорусский вокзал (примерно 1 час в пути)
•	Электрички ходят каждые 30-60 минут

![photo_2025-03-14 19.50.25.jpeg](imgs/photo_2025-03-14%2019.50.25.jpeg)











<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [{path: 'dutkovo-hike.gpx'}, {path: 'zvenigorod-bus.gpx', color: 'blue'}], 
    points: 'points.yaml',
    zoom: 8.6,
    center: [37.30004, 55.74771],
    fitDuration: 9000
});</script>