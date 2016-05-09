<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html ng-app="yii2AngApp" lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>

<body ng-controller="index">
<?php $this->beginBody() ?>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#/">My Company</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#/site/index"><i class="glyphicon glyphicon-home"></i> Главная</a></li>
                <li><a href="#/film/index"><i class="glyphicon glyphicon-film"></i> Каталог фильмов</a></li>
                <li><a href="#/site/about"><i class="glyphicon glyphicon-tag"></i> О приложении</a></li>
                <li><a href="#/site/contact"><i class="glyphicon glyphicon-envelope"></i> Обратная связь</a></li>
            </ul>
        </div>
    </nav>
    <div id="main" class="container">
        <!-- Здесь будет динамическое содержимое -->
        <div ng-view></div>
    </div>

    <footer class="text-center">
        <p>Работает на Yii 2.0.8 и AngularJs 1.5.5</p>
    </footer>
<?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>
