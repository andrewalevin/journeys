
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('zaharovo-1600.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Вяземы, Захарово, Звенигород
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

## Станция Голицыно


## Усадьба Вяземы



## Усадьба Захарово



## Звенигород

![img-1377.jpg](../0-images/zvenigorod/img-1377.jpg)

![img-1428.jpg](../0-images/zvenigorod/img-1428.jpg)

![img-1430.jpg](../0-images/zvenigorod/img-1430.jpg)

![img-1437.jpg](../0-images/zvenigorod/img-1437.jpg)

![img-1439.jpg](../0-images/zvenigorod/img-1439.jpg)

![img-1443.jpg](../0-images/zvenigorod/img-1443.jpg)

![img-9894.jpg](../0-images/zvenigorod/img-9894.jpg)



## Городок

![img-7791.jpg](../0-images/zvenigorod/img-7791.jpg)

![img-1359.jpg](../0-images/zvenigorod/img-1359.jpg)

![img-1344.jpg](../0-images/zvenigorod/img-1344.jpg)





## Саввино-Сторожевский Монастырь


## К станции Звенигород

![img-1459.jpg](../0-images/zvenigorod/img-1459.jpg)























# LAST ---->


![photo_2025-03-14 19.50.23.jpeg](imgs/photo_2025-03-14%2019.50.23.jpeg)

Исторический и живописный веломаршрут недалеко от Москвы (примерно 40 км от города).
Идеально для поездки на выходных — в субботу или воскресенье.


![photo_2025-03-14 19.50.22.jpeg](imgs/photo_2025-03-14%2019.50.22.jpeg)

Общее описание маршрута
•	Старт: Белорусский вокзал → Голицыно (электричка)
•	Веломаршрут: Голицыно → Вязёмы → Захарово → Звенигород
•	Общая протяжённость веломаршрута: 40-50 км (в зависимости от ответвлений)


![photo_2025-03-14 19.50.27.jpeg](imgs/photo_2025-03-14%2019.50.27.jpeg)



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


![photo_2025-03-14 19.50.27-1.jpeg](imgs/photo_2025-03-14%2019.50.27-1.jpeg)


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
    tracks: [
        {path: 'zaharovo-railway.gpx', color: 'grey'},
        {path: 'zvenigorod-bus.gpx', color: 'blue'},
        {path: 'zvenigorod-gorod-hike.gpx'}, 
        {path: 'zaharovo-hike.gpx'},
        {path: 'golotsion-hike.gpx'}
    ],
    points: 'points.yaml',
    zoom: 7.2,
    center: [37.49433, 55.59333],
    fitDuration: 6000
});
</script>
