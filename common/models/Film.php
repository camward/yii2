<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "film".
 *
 * @property integer $id
 * @property string $title
 * @property string $storyline
 * @property string $director
 * @property integer $year
 */
class Film extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'film';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'storyline', 'director', 'year'], 'required'],
            [['storyline'], 'string'],
            [['year'], 'integer'],
            [['title'], 'string', 'max' => 255],
            [['director'], 'string', 'max' => 100],
            [['title'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'storyline' => 'Storyline',
            'director' => 'Director',
            'year' => 'Year',
        ];
    }
}
