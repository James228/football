define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'general/codemapping/index',
                    add_url: 'general/codemapping/add',
                    edit_url: 'general/codemapping/edit',
                    del_url: 'general/codemapping/del',
                    multi_url: 'general/codemapping/multi',
                    table: 'code_mapping'
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                sortName: 'sort_order',
                sortOrder: 'asc',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {field: 'state', checkbox: true},
                        {field: 'id', title: 'ID', sortable: true},
                        {field: 'category', title: __('Category'), operate: 'LIKE', searchList: {"": '全部'}, placeholder: '请输入分类'},
                        {field: 'code', title: __('Code'), operate: 'LIKE', searchList: {"": '全部'}, placeholder: '请输入代码'},
                        {field: 'name', title: __('Name'), operate: 'LIKE', searchList: {"": '全部'}, placeholder: '请输入名称'},
                        {field: 'description', title: __('Description'), operate: false, visible: false},
                        {field: 'sort_order', title: __('SortOrder'), sortable: true},
                        {field: 'status', title: __('Status'), searchList: {"1": __('Normal'), "2": __('Deleted')}, formatter: Table.api.formatter.status},
                        {field: 'created_at', title: __('CreatedAt'), formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        {field: 'updated_at', title: __('UpdatedAt'), formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
