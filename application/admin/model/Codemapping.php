<?php

namespace app\admin\model;

use think\Model;

class Codemapping extends Model
{
    // 表名
    protected $name = 'code_mapping';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;
    // 定义时间戳字段名
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
    // 日期字段写入格式
    protected $dateFormat = 'Y-m-d H:i:s';

    // 追加属性
    protected $append = [
        'status_text'
    ];

    // 状态列表
    public static function getStatusList()
    {
        return [
            'normal' => __('Normal'),
            'hidden' => __('Hidden'),
        ];
    }

    public function getStatusTextAttr($value, $data)
    {
        $list = self::getStatusList();
        $value = $value ?? $data['status'];
        return $value && isset($list[$value]) ? $list[$value] : $value;
    }
}
