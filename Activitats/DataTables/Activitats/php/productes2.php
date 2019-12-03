<?php

$connect = mysqli_connect("localhost","bhuanca14009","1234","producte");
$query = "SELECT * FROM producte";
$result = mysqli_query($connect, $query);
$table_data = array();

while ($row = mysqli_fetch_array($result)){

    $table_data[] = array(

        'ref' => $row["ref"],
        'model' => $row["model"],
        'marca' => $row["marca"],
        'preu' => $row["preu"]
    );
}

echo json_encode($table_data, JSON_UNESCAPED_UNICODE);