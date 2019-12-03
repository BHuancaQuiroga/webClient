<?php
$conn = new mysqli("localhost", "root", "", "producte");
if(isset($_REQUEST["nom"])){
    $id = $_REQUEST['id'];
    $nom = mysqli_real_escape_string($conn, $_REQUEST["nom"]);
    $query = "UPDATE marcas SET nom='".$nom."' WHERE id='".$id."'";
    if(mysqli_query($conn, $query)){
        echo "<h1>" . "Informació de la marca ctualitzada" . "</h1>";
    }
    else {
        echo 'ERROR '.$query;
    }
}
?>