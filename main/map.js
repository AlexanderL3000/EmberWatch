
document.addEventListener("DOMContentLoaded", function(){
  var text = ""
  var x = ""
  // document.getElementById("test").addEventListener('click', onclick, false)

  let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    text = JSON.stringify(data, null, 2);
    const myObj = JSON.parse(text);
    x = myObj["city"];
    document.getElementById("test").innerHTML = "You live in " + x;
  });
  
  
    

  
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGVycGNoZWVzZTY5IiwiYSI6ImNrc2F4ZWlzdTAxYmYycHAzejVpeXFyNTEifQ.-_xZXfN2jAGYcOKfxTOOGA';
  const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [-74.5, 40], 
  zoom: 9 
  
  })

  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    },
    {
      type: 'Feature',
      geometry: {
      type: 'Point',
      coordinates: [45.4215, 75.6972]
    },
    properties: {
      title: 'Mapbox',
      description: 'San Francisco, California'
    }
  }]
  };

    geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
    });
  },false)