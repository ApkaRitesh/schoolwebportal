  // Initialize and add the map
  function initMap() {
    // The location of your college
    var collegeLocation = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    // The map, centered at collegeLocation
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15, // Adjust the zoom level as needed
      center: collegeLocation,
    });
    // The marker, positioned at collegeLocation
    var marker = new google.maps.Marker({
      position: collegeLocation,
      map: map,
      title: "PT. GURU PARASAD GAYAPARASAD INTER COLLEGE", // Tooltip text
    });
  }
