<?php 
$destino= "Contacto.Trabajo.002@gmail.com"; 
$nombre=$ _POST["nombre"];
$apellidos=$ _POST[ "apellidos"]; 
$correo=$ _POST["correo"];  
$apellidos=$ _POST[ "phone"];
$mensaje=$ _POST[ "mensaje"];
$contenido = "nombre: " . $nombre . "\ncorreo: " . $correo . "\nphone: " . $phone . "\nmensaje: " . $mensaje;
mail($detino,"contacto", $contenido)
header("location:respuesta.html")
?>