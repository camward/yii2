<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
    ];
    public $js = [
        'js/lib/angular.min.js',
        'js/lib/angular-route.min.js',
        'js/lib/angular-animate.min.js',
        'js/app.js',
        'js/controllers/site.js',
        'js/models/film.js',
        'js/controllers/film.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
