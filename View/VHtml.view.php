<?php
class VHtml
{
  public function __construct(){}
  
  public function __destruct(){}
  
  public function showHtml($_html)
  {
  	//Inclu le fichier s'il existe
    (file_exists($_html)) ? include($_html) : include('./Html/unknown.php');
    
  } // showHtml($_html)
  
} // VHtml