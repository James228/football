<?php

namespace app\admin\controller\general;

use app\common\controller\Backend;

/**
 * 代码映射
 *
 * @icon   fa fa-code
 */
class Codemapping extends Backend
{

    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Codemapping');
        $this->view->assign('statusList', \app\admin\model\Codemapping::getStatusList());
    }
}
