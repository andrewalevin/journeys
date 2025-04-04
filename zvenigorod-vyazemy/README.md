
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

![img-0924.jpg](../0-images/zvenigorod/img-0924.jpg)

![img-0920-1.jpg](../0-images/zvenigorod/img-0920-1.jpg)





## Усадьба Захарово

![img-0621.jpg](../0-images/zvenigorod/img-0621.jpg)

![img-0628.jpg](../0-images/zvenigorod/img-0628.jpg)

![img-0622.jpg](../0-images/zvenigorod/img-0622.jpg)

![img-0624.jpg](../0-images/zvenigorod/img-0624.jpg)

![img-7725.jpg](../0-images/zvenigorod/img-7725.jpg)





## Звенигород

![img-1377.jpg](../0-images/zvenigorod/img-1377.jpg)

![img-1428.jpg](../0-images/zvenigorod/img-1428.jpg)

![img-1430.jpg](../0-images/zvenigorod/img-1430.jpg)

1

![img-1437.jpg](../0-images/zvenigorod/img-1437.jpg)

![img-1439.jpg](../0-images/zvenigorod/img-1439.jpg)

![img-1443.jpg](../0-images/zvenigorod/img-1443.jpg)

2

![img-9894.jpg](../0-images/zvenigorod/img-9894.jpg)



## Городок

![img-1359.jpg](../0-images/zvenigorod/img-1359.jpg)

![photo_2025-03-14 19.50.28.jpeg](imgs/photo_2025-03-14%2019.50.28.jpeg)

![img-1344.jpg](../0-images/zvenigorod/img-1344.jpg)

![img-7791.jpg](../0-images/zvenigorod/img-7791.jpg)





## Саввино-Сторожевский Монастырь

![img-0644.jpg](../0-images/zvenigorod-mon/img-0644.jpg)

![img-1025.jpg](../0-images/zvenigorod-mon/img-1025.jpg)



## К станции Звенигород

![img-1459.jpg](../0-images/zvenigorod/img-1459.jpg)

































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
