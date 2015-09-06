<?php

/*
* Ce fichier contient les variables globales qui seront utilisées sur toutes les pages du site ainsi que leur documentation.
* Pour chaque variable ajoutée veuillez indiquer son type, son utilisation, et dans le cas d'un objet ses attributs et méthodes
*/
date_default_timezone_set('Europe/Paris');

/*
* $page
* tableau contenant :
* [title] : le titre de la page
* [class] : la classe utilisée pour la construction de la page
* [method] : la méthode de cette classe appelée pour le traitement de la page
* [args] : les arguments à passer à la méthode
* [css] : chemin vers une feuille de style additionelle (optionnel)
* [script] : chemin vers une feuille de script additionelle (optionnel)
* [xhr] : chemin vers une feuille de script définissant la class XHR pour les cas où l'on veut faire de l'ajax sans jQuery (optionnel)
*/
global $page;
$page = array(); //Titre, class "active";

?>
