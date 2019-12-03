<?php
header("Content-type: application/json, charset=UTF-8");
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "producte"
);

mysqli_set_charset($conn, "utf8");
$result = $conn->query('SELECT producte.ref, producte.model, producte.preu, marcas.nom FROM producte, marcas where producte.marca = marcas.id');
$productes = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($productes, JSON_UNESCAPED_UNICODE);