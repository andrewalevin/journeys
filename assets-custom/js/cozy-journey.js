
/**
 * Fetches and parses a single GPX track file.
 * @param {string} path - URL or relative path to the GPX file.
 * @returns {Promise<Array<[number, number]>>} - Promise resolving to an array of [lon, lat] coordinates.
 */
async function fetchTrack(path) {
    if (!path || typeof path !== 'string') {
        console.warn(`Invalid path provided: ${path}`);
        return [];
    }

    try {
        const response = await fetch(path);

        if (!response.ok) {
            console.error(`Failed to fetch GPX track from ${path}: ${response.status} ${response.statusText}`);
            return [];
        }

        const gpxText = await response.text();
        return parseGpxCoordinates(gpxText, path);
    } catch (error) {
        console.error(`Error fetching GPX track from ${path}:`, error);
        return [];
    }
}

/**
 * Parses GPX XML text and extracts track or route points.
 * @param {string} gpxText - Raw GPX XML string.
 * @param {string} path - The path to help with logging.
 * @returns {Array<[number, number]>} - Array of [lon, lat] coordinates.
 */
function parseGpxCoordinates(gpxText, path = '') {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(gpxText, "application/xml");

        const trkpts = xmlDoc.getElementsByTagName('trkpt');
        const rtepts = xmlDoc.getElementsByTagName('rtept');
        const coordinates = [];

        // Extract track points (trkpt)
        for (const point of trkpts) {
            const lat = parseFloat(point.getAttribute('lat'));
            const lon = parseFloat(point.getAttribute('lon'));
            if (!isNaN(lat) && !isNaN(lon)) {
                coordinates.push([lon, lat]);
            }
        }

        // If no track points found, fallback to route points (rtept)
        if (coordinates.length === 0) {
            for (const point of rtepts) {
                const lat = parseFloat(point.getAttribute('lat'));
                const lon = parseFloat(point.getAttribute('lon'));
                if (!isNaN(lat) && !isNaN(lon)) {
                    coordinates.push([lon, lat]);
                }
            }
        }

        if (coordinates.length === 0) {
            console.warn(`No valid points found in GPX file: ${path}`);
        }

        return coordinates;
    } catch (error) {
        console.error(`Failed to parse GPX file from ${path}:`, error);
        return [];
    }
}

/**
 * Fetches and parses multiple GPX track files.
 * @param {string[]} trackPaths - Array of GPX track file paths.
 * @returns {Promise<Array<Array<[number, number]>>>} - Promise resolving to an array of coordinate arrays.
 */
async function fetchTracks(trackPaths = []) {
    if (!Array.isArray(trackPaths) || trackPaths.length === 0) {
        console.warn('No GPX track paths provided.');
        return [];
    }

    const fetchPromises = trackPaths.map(fetchTrack);
    return Promise.all(fetchPromises);
}

/**
 * Fetches a YAML file and parses its contents.
 * @param {string} yamlPath - URL or path to the YAML file.
 * @returns {Promise<Object|Array>} - Parsed YAML data, or empty object/array on failure.
 */
async function fetchYaml(yamlPath) {
    if (!yamlPath || typeof yamlPath !== 'string') {
        console.warn(`Invalid YAML path provided: ${yamlPath}`);
        return {};
    }

    try {
        const response = await fetch(yamlPath);

        if (!response.ok) {
            console.error(`Failed to fetch YAML from ${yamlPath}: ${response.status} ${response.statusText}`);
            return {};
        }

        const yamlText = await response.text();

        const parsedData = jsyaml.load(yamlText);

        if (!parsedData) {
            console.warn(`No content found in YAML file at ${yamlPath}.`);
            return {};
        }

        return parsedData;
    } catch (error) {
        console.error(`Error fetching or parsing YAML from ${yamlPath}:`, error);
        return {};
    }
}

/**
 * Calculates the bounding box from an array of [longitude, latitude] coordinates.
 *
 * @param {Array<Array<number>>} coordinates - An array of coordinate pairs [lng, lat].
 * @returns {Array<Array<number>>} - Bounding box: [[minLng, minLat], [maxLng, maxLat]].
 * @throws {Error} If the input is invalid.
 */
function getBounds(coordinates) {
    if (!Array.isArray(coordinates) || coordinates.length === 0) {
        throw new Error('getBounds expects a non-empty array of coordinates.');
    }

    let minLng = Infinity;
    let minLat = Infinity;
    let maxLng = -Infinity;
    let maxLat = -Infinity;

    for (const coord of coordinates) {
        if (!Array.isArray(coord) || coord.length !== 2) {
            throw new Error('Each coordinate must be an array of two numbers [lng, lat].');
        }

        const [lng, lat] = coord;

        if (typeof lng !== 'number' || typeof lat !== 'number') {
            throw new Error('Longitude and latitude must be numbers.');
        }

        if (lng < minLng) minLng = lng;
        if (lng > maxLng) maxLng = lng;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
    }

    return [
        [minLng, minLat],
        [maxLng, maxLat]
    ];
}










const DEBUG = false;


// === CONFIGURATION ===
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3bGV2aW4iLCJhIjoiY2t5ZXM5c3cyMWJxYjJvcGJycmw0dGlyeSJ9.9QfCmimkyYicpprraBc-XQ'; // Replace with your token

function architectMap(configInit) {
    (async () => {
        let config = {
            tracks: configInit?.tracks ?? [],
            points: configInit?.points ?? '',
            zoom: configInit?.zoom ?? 7.0,
            center: configInit?.center ?? [37.51722, 55.56106],
            fitDuration: configInit?.fitDuration ?? 8000,
            fitPadding: configInit?.fitPadding ?? 50,
            fitMaxzoom: configInit?.fitMaxzoom ?? 22,
        };

        console.log('🟣 config: ', config);


        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/andrewlevin/cm89cyevq00by01s8cqpx5zhh',
            center: config.center, // Moscow
            zoom: config.zoom
        });

        const mapLoadPromise = new Promise((resolve) => {
            map.on('load', resolve);
        });

        const pathTracks = config.tracks.map(track => track.path)
        const [coordinatesTracks, pointsRaw] = await Promise.all([
            Promise.all(pathTracks.map(fetchTrack)), fetchYaml(config.points), mapLoadPromise
        ]);

        console.log('🟢 pointsRaw: ', pointsRaw);
        const points = (pointsRaw && pointsRaw.length > 0)
            ? pointsRaw.filter(item => item.coordinates.length > 0)
            : [];
        console.log('🟢 points: ', points);

        const tracks = config.tracks.map((track, index) => ({
            ...track, coordinates: coordinatesTracks[index],
        }));
        console.log('🟢 tracks: ', tracks);

        tracks.forEach(track => {
            console.log('🟢 track: ', track);
            map.addSource('track' + track.path, {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': track.coordinates,
                    }
                }
            });

            map.addLayer({
                'id': 'track-line' + track.path,
                'type': 'line',
                'source': 'track' + track.path,
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': track?.color || 'red',
                    'line-width': 4
                }
            });
        })

        points.forEach(point => {
            console.log('🟢 point: ', point);

            const title = point?.title || point.coordinates;
            const description = point?.description ? `<p>${point?.description}</p>` : '';
            const link = point.link ? `<a href="${point.link}" target="_blank">${point.link}</a>` : '';
            const popup = new mapboxgl.Popup({ offset: 40 })
                .setHTML(`
                    <h3>${title}</h3>
                    ${description}
                    ${link}
                    <a href="#val">LINK</a>>
                  `);
            new mapboxgl.Marker({color: 'red'})
                .setLngLat(point.coordinates.reverse())
                .setPopup(popup)
                .addTo(map);
        })

        const trackCoordinatesFull = tracks.flatMap(track => track.coordinates);
        const pointCoordinatesFull = points.flatMap(point => [point.coordinates]);

        const bounds = getBounds([...trackCoordinatesFull, ...pointCoordinatesFull]);
        map.fitBounds(bounds, {
            padding: config.fitPadding,
            duration: config.fitDuration,
            maxZoom: config.fitMaxzoom
        });







        if (DEBUG){
            const mapContainer = document.getElementById('map');

            const infoDiv = document.createElement('div');
            infoDiv.id = 'map-info';
            infoDiv.textContent = 'Center: -, - | Zoom: -';

            mapContainer.insertAdjacentElement('afterend', infoDiv);

            const greenCenterMarker = new mapboxgl.Marker({color: 'green'}).setLngLat(config.center).addTo(map);

            function updateInfo() {
                const center = map.getCenter();
                const zoom = map.getZoom().toFixed(2);
                infoDiv.textContent = `${center.lng.toFixed(5)}, ${center.lat.toFixed(5)}\n${zoom}`;

                greenCenterMarker.setLngLat(center);

            }

            map.on('move', updateInfo);
            map.on('zoom', updateInfo);
            map.on('load', updateInfo);
        }

    })();
}
