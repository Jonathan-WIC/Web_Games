<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
header ('Content-Type: text/html; charset=utf-8');

require('Inc/require.inc.php');
require('Inc/globals.inc.php');

$EX = isset($_REQUEST['EX']) ? $_REQUEST['EX'] : 'home';

if(isset($_REQUEST['idPrev'])){
    $idPrev= $_REQUEST['idPrev'];
    $idNext= $_REQUEST['idNext'];
}

switch($EX)
{
	/**************************************************************************************************/
    /******************************************** HOMEPAGE ********************************************/
    /**************************************************************************************************/
    case 'home'        : home();       break;

    /**************************************************************************************************/
    /********************************************** GAME **********************************************/
    /**************************************************************************************************/
    case '2048'         : Access2048();         break;
    case 'matchesGame'  : AccessMatchesGame();  break;
    case 'morpion'      : morpion();            break;
    case 'puissance4'   : puissance4();         break;
    case 'rpg'          : rpg();                break;

    //ERROR PAGE WHEN WRONG URL 
    default : error();
}

//Include the layout of the website
require('./View/layout.view.php');

function home()
{
    global $page;
    $page['title']  = 'Accueil';
    $page['class']  = 'VHome';
    $page['method'] = 'showHome';
    $page['arg']    = 'Html/accueil.html';
    $page['css']    = 'Css/accueil.css';
}
function error()
{
    global $page;
    $page['title']  = 'Erreur 404 !';
    $page['class']  = 'VHtml';
    $page['method'] = 'showHtml';
    $page['arg']    = 'Html/unknown.html';
}

//Games
function Access2048()
{
    global $page;
    $page['title']  = '2048';
    $page['class']  = 'VHtml';
    $page['method'] = 'showHtml';
    $page['arg']    = 'Html/2048.php';
    $page['css']    = 'Css/2048.css';
    $page['script'] = 'Js/2048.js';
}
function AccessMatchesGame()
{
    global $page;
    $page['title']  = 'Jeu des allumettes';
    $page['class']  = 'VHtml';
    $page['method'] = 'showHtml';
    $page['arg']    = 'Html/matchesGame.php';
    $page['css']    = 'Css/matchesGame.css';
    $page['script'] = 'Js/matchesGame.js';
}
function morpion()
{
    global $page;
    $page['title']  = 'Morpion';
    $page['class']  = 'VHtml';
    $page['method'] = 'showHtml';
    $page['arg']    = 'Html/morpion.html';
    $page['css']    = 'Css/morpion.css';
    $page['script']  = 'Js/morpion.js';
}
function puissance4()
{
    global $page;
    $page['title']  = 'Puissance 4';
    $page['class']  = 'VHtml';
    $page['method'] = 'showHtml';
    $page['arg']    = 'Html/puissance4.html';
    $page['css']    = 'Css/puissance4.css';
    $page['script'] = 'Js/puissance4.js';
}
function rpg()
{
    global $page;
    $page['title']  = 'RPG';
    $page['class']  = 'VHtml';
    $page['method'] = 'showHtml';
    $page['arg']    = 'Html/rpg.html';
    $page['css']    = 'Css/rpg.css';
    $page['script'] = 'Js/rpg.js';
    $page['xhr']    = 'Js/oXHR.js';
}
?>
