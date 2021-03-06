// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require bootstrap-sprockets
//= require moment
//= require_tree .


  $(document).ready( function() {
    //Propeller tabs js
    $('.pmd-tabs').pmdTab();
  });

  $('#mapcardAll').on('shown', function (e) {

    google.maps.event.trigger(map, 'resize');

});

// Show/hide specified div
function clickShow(w) {
    var x = document.getElementById(w);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = '';
    }
};

// Adds a search box to a map, using the Google Place Autocomplete feature.
// People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 3.14, lng: 101.6177832},
    zoom: 16,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        draggable: true,
        title: place.name,
        position: place.geometry.location
      }));

    var location_name = document.getElementById('pac-input')
    var lat = document.getElementById('latitude');
    var	lng = document.getElementById('longitude');
    var locname = document.getElementById('locname');

    	locname.value = location_name.value
    	lat.value = place.geometry.location.lat();
    	lng.value = place.geometry.location.lng();

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  $("#form-dialog-location-tag").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
    map.setCenter(latlng);
  });
}

function initAutocomplete2() {
  var map = new google.maps.Map(document.getElementById('mapAll'), {
    center: {lat: 3.14, lng: 101.6177832},
    zoom: 16,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input2');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        draggable: true,
        title: place.name,
        position: place.geometry.location
      }));

    var location_name = document.getElementById('pac-input2')
    var lat = document.getElementById('latitude2');
    var lng = document.getElementById('longitude2');
    var locname = document.getElementById('locname2');

      locname.value = location_name.value
      lat.value = place.geometry.location.lat();
      lng.value = place.geometry.location.lng();

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  $("#form-dialog-accomodation").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
    map.setCenter(latlng);
  });
}


$(document).ready( function() {
  $('#datetimepicker0').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  $('#datetimepicker1').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  $('#timepicker').datetimepicker({
		format: 'LT'
	});

  $('#datetimepicker3').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  $('#datetimepicker4').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  $('#datetimepicker5').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  $('#datetimepicker6').datetimepicker({
    format: 'DD/MM/YYYY'
  });
});

$(document).ready(function() {
<!-- Select Multiple Tags -->
 $(".select-tags").select2({
   tags: false,
   theme: "bootstrap",
  })
 });
