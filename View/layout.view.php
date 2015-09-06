<?php
    $vHtml = new VHtml();
    $vnav = new VNav();
    $vpage = new $page['class']();
    //These thirds are not implemented yet
    //$vUserInfo = new VUserInfo();
    //global $connec, $customAlert,$user;
    //$connec = new MDBase();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title><?= $page['title']; ?></title>
    <link rel="stylesheet" href="Lib/bootstrap.min.css" />
    <link rel="stylesheet" href="Lib/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="Lib/bootstrap.icon-large.min.css" />
    <link rel="stylesheet" href="Css/style.css" />

    <!-- Ajout feuille de style spécifique à cette page -->
    <?php
        if (isset($page['css'])) {
            echo '<link rel="stylesheet" type="text/css" href="'.$page['css'].'" />' ;
        }
    ?>
    <link rel="icon" type="image/png" href="Img/favicon.png" />
    
</head>

<body>
    <nav>
        <?php $vnav->showNav() ?>
    </nav>

    <h1 class="page-heading col-md-12">
        <?php echo $page['title'] ?>
    </h1>

    <div class="col-container">

        <div class="left-col col-md-2">
           Left column HERE
        </div>

        <div class="page col-md-8" >
            <?php $vpage->$page['method']($page['arg']) ?>
        </div>

        <div class="right-col col-md-2">
           Right column HERE
        </div>
    </div>

    <div class="footer col-md-12">
        FOOTER
    </div>

    <script src="./Lib/jquery.min.js"></script>
    <script src="./Lib/jquery-ui.js"></script>
    <script src="./Lib/bootstrap.min.js"></script>
    
    <!-- Ajout feuille de script spécifique à cette page -->
    <?php
        if (isset($page['script'])) {
            echo '<script src="'.$page['script'].'"></script>' ;
        }
    ?>

</body>
