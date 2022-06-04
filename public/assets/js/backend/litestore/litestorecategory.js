define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
  if ($('input[name="session"]').val()==0) {
    $("#c-business_id").data("params", function (obj) {
        return {custom: {venue_id: $('input[name="row[venue_id]"]').val()}};
      });
  }else{
    $("#c-business_id").data("params", function (obj) {
        return {custom: {venue_id: $('input[name="session"]').val()}};
      });
  }
  var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'litestore/litestorecategory/index',
                    add_url: 'litestore/litestorecategory/add',
                    edit_url: 'litestore/litestorecategory/edit',
                    del_url: 'litestore/litestorecategory/del',
                    multi_url: 'litestore/litestorecategory/multi',
                    table: 'litestore_category',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                escape: false,
                sortName: 'weigh',
                pagination: false,
                search:false,
				searchFormVisible: true,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'venue.name', title: __('Venue_id'), operate: 'LIKE'},
                        {field: 'business.name', title: __('Business_id'), operate: 'LIKE'},
                        //{field: 'name', title: __('Name')},
                        {field: 'name', title: __('Name')},
                        // {field: 'image', title: __('Image'), formatter: Table.api.formatter.image},
                        // {field: 'weigh', title: __('Weigh')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:false, addclass:'datetimerange', formatter: Table.api.formatter.datetime},
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