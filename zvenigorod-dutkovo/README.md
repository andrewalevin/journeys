
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


## Звенигород. От Станции к городу

![img-1339.jpg](../0-images/zvenigorod/img-1339.jpg)

![img-1423.jpg](../0-images/zvenigorod/img-1423.jpg)

![img-1443.jpg](../0-images/zvenigorod/img-1443.jpg)

![img-1437.jpg](../0-images/zvenigorod/img-1437.jpg)

![img-9894.jpg](../0-images/zvenigorod/img-9894.jpg)


## Городок и Успенский собор

![img-1357.jpg](../0-images/zvenigorod/img-1357.jpg)



## Саввино-Сторожевский Монастырь

![img-1330.jpg](../0-images/zvenigorod-mon/img-1330.jpg)

![img-1307.jpg](../0-images/zvenigorod-mon/img-1307.jpg)

![img-1279.jpg](../0-images/zvenigorod-mon/img-1279.jpg)

![img-1321.jpg](../0-images/zvenigorod-mon/img-1321.jpg)




## Саввинский скит и Дютьково

![img-6594.jpg](../0-images/zvenigorod/img-6594.jpg)

![img-6619.jpg](../0-images/zvenigorod/img-6619.jpg)














<link href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="../assets-custom/js/cozy-journey.js"></script>
<script>architectMap({
    tracks: [{path: 'dutkovo-hike.gpx'}, {path: 'zvenigorod-bus.gpx', color: 'blue'}], 
    points: 'points.yaml',
    zoom: 7.2,
    center: [37.49433, 55.59333],
    fitDuration: 6000
});</script>