<?php

$conn = new mysqli("localhost", "root", "1234", "mapas");
$stmt = $conn->prepare("SELECT * FROM coordenadas");
$stmt->execute();
$result = $stmt->get_result();

# Build GeoJSON feature collection array
$geojson = array(
    'type'      => 'FeatureCollection',
    'features'  => array()
);
# Loop through rows to build feature arrays
while($row = mysqli_fetch_assoc($result)) {
    $feature = array(
        'id' => $row['id'],
        'type' => 'Feature',
        'geometry' => array(
            'type' => 'Point',
            # Pass Longitude and Latitude Columns here
            'coordinates' => array($row['longitud'], $row['latitud'])
        )
    );
    # Add feature arrays to feature collection array
    array_push($geojson['features'], $feature);
}
header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
$conn = NULL;
?>