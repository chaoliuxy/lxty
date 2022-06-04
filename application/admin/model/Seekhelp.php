<?php

namespace app\admin\model;

use think\Model;


class Seekhelp extends Model
{





    // 表名
    protected $name = 'seekhelp';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];


    public function user()
    {
        return $this->belongsTo('User', 'user_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }

    public function helptype()
    {
        return $this->belongsTo('Helptype', 'helptype_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }

    public function venue()
    {
        return $this->belongsTo('app\admin\model\Venue', 'venue_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }



}
