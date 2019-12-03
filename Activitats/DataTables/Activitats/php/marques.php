<?php

$connect = mysqli_connect("localhost","bhuanca14009","1234","producte");
$query = "SELECT * FROM marcas";
$result = mysqli_query($connect, $query);
$table_data = array();

while ($row = mysqli_fetch_array($result)){

    $table_data[] = array(

        'id' => $row["id"],
        'nom' => $row["nom"]
    );
}

echo json_encode($table_data, JSON_UNESCAPED_UNICODE);


//https://github.com/profeweb/WEBDEV/blob/master/JSON/CLASSE/CONCESIONARI/carroceria.php
