
<link rel="stylesheet" href="../assets-custom/css/style-markdown.css">
<div class="cover-container" style="background-image: url('aleksandrov.jpg');">
	<div class="cover-text">
		<div class="cover-title">
            Александров
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



**Прогулка по Александрову** — историческому городу, который был резиденцией русских императоров и важным культурным центром.

Мы начнем прогулку от железнодорожного вокзала города Александров, который находится всего в 2 часах на поезде от Москвы.

Наш маршрут будет включать в себя осмотр нескольких исторических объектов, включая дворцы, церкви и памятники. Мы прогуляемся по старинным улицам города и посетим Александровский дворец — летнюю резиденцию российских царей, которая в свое время была важным местом для отдыха и принятия важных решений.

Также мы посетим церковь Иоанна Предтечи — один из старейших храмов города, а также прогуляемся по живописному берегу реки и старым паркам.

Прогулка по Александрову погружает в атмосферу российской империи, где каждый уголок города хранит историю прошлого. Мы сможем увидеть, как сохранились здания XVIII-XIX веков, и узнать больше о культурной жизни того времени.

Не забудем зайти в музей, посвященный истории города и его роли в жизни страны, а также насладиться местной архитектурой и живописными видами.

Ссылки на достопримечательности:
1.	Александровский дворец:
https://www.google.com/maps?cid=13012919545526797489
2.	Церковь Иоанна Предтечи:
https://www.google.com/maps?cid=12160794821089640165
3.	Музей города Александров:
https://www.google.com/maps?cid=4844350132349272538

Эта прогулка станет отличным способом узнать больше о русской истории и культуре, насладиться свежим воздухом и атмосферой старинного города.






<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [{path: 'posad-hike.gpx'}, {path: 'aleksandrov-hike.gpx'}], 
    points: 'points.yaml',
    zoom: 6.5,
    center: [37.68589, 55.55567],
    fitDuration: 9000
});
</script>
