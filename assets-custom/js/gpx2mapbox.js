// gpx2mapbox.js

// === CONFIGURATION ===
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3bGV2aW4iLCJhIjoiY2t5ZXM5c3cyMWJxYjJvcGJycmw0dGlyeSJ9.9QfCmimkyYicpprraBc-XQ'; // Replace with your token

/**
 * Initializes a Mapbox map with a GPX route using a configuration object.
 * @param {Object} config - Configuration object.
 * @param {string} config.gpxFilePath - Path to the GPX file.
 * @param {string} [config.mapHeight='100vh'] - Height of the map container (e.g., '600px').
 * @param {Array} [config.center=[37.6173, 55.7558]] - Initial center [lon, lat], default Moscow.
 * @param {number} [config.zoom=4] - Initial zoom level.
 * @param {string} [config.containerId='map'] - ID of the HTML container.
 */

function initializeGPXMap(config) {
    const {
        containerId,
        accessToken,
        gpxFilePath,
        center = [37.618423, 55.751244], // Moscow
        zoom = 4
    } = config;

    // Set the map container height (optional)
    document.getElementById(containerId).style.height = "70vh";


    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/andrewlevin/clthwxvvg002h01qo40y1e99g',
        center: center,
        zoom: zoom
    });

    map.on('load', () => {
        fetch(gpxFilePath)
            .then(response => {
                if (!response.ok) throw new Error(`GPX fetch failed: ${response.statusText}`);
                return response.text();
            })
            .then(gpxText => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(gpxText, "application/xml");

                const trkpts = xmlDoc.getElementsByTagName('trkpt');
                const rtepts = xmlDoc.getElementsByTagName('rtept');
                const coordinates = [];

                for (let i = 0; i < trkpts.length; i++) {
                    const lat = parseFloat(trkpts[i].getAttribute('lat'));
                    const lon = parseFloat(trkpts[i].getAttribute('lon'));
                    coordinates.push([lon, lat]);
                }

                if (coordinates.length === 0) {
                    for (let i = 0; i < rtepts.length; i++) {
                        const lat = parseFloat(rtepts[i].getAttribute('lat'));
                        const lon = parseFloat(rtepts[i].getAttribute('lon'));
                        coordinates.push([lon, lat]);
                    }
                }

                if (coordinates.length === 0) {
                    alert('No points found in GPX file.');
                    return;
                }

                // Add route source and layer
                map.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': coordinates
                        }
                    }
                });

                map.addLayer({
                    'id': 'route-line',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                        'line-color': '#ff0000',
                        'line-width': 4
                    }
                });

                // Calculate bounds
                const lngs = coordinates.map(coord => coord[0]);
                const lats = coordinates.map(coord => coord[1]);
                const minLng = Math.min(...lngs);
                const maxLng = Math.max(...lngs);
                const minLat = Math.min(...lats);
                const maxLat = Math.max(...lats);

                const bounds = [
                    [minLng, minLat],
                    [maxLng, maxLat]
                ];

                // First fit bounds (just width padding)
                map.fitBounds(bounds, {
                    padding: { left: 100, right: 100, top: 0, bottom: 0 },
                    duration: 5000
                });

            })
            .catch(error => {
                console.error('Error loading GPX:', error);
            });
    });
}
