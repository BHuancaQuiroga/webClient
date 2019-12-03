<?php

header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "bhuanca14009", "1234", "producte");
$stmt = $conn->prepare("SELECT * FROM producte WHERE marca=".$_REQUEST['marca']);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
?>