<?php

namespace app\admin\model;

use think\Model;

class Codemapping extends Model
{
    // 表名
    protected $name = 'code_mapping';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
    // 日期字段写入格式
    protected $dateFormat = 'Y-m-d H:i:s';

    // 追加属性
    protected $append = [
        'created_at',
        'updated_at',
        'status_text'
    ];

    // 格式化时间戳
    public function getCreatedAtAttr($value)
    {
        return $value ? date('Y-m-d H:i:s', $value) : '';
    }

    public function getUpdatedAtAttr($value)
    {
        return $value ? date('Y-m-d H:i:s', $value) : '';
    }

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
