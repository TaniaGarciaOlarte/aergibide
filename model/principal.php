<?php

require "general.php";

$categorias=mostrarCategorias($dbh);

if(isset($_GET["valor"])){

      require "../views/principal-categorias.view.php";
    die();

}
elseif ($_POST["tituloPubli"]!=""){
     require "../views/principal-categorias.view.php";
    die();
}
else{
    $publicacion=generarPublicaciones($dbh);
}

require "../views/principal.view.php";





