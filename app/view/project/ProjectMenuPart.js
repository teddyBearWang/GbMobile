/**
 * Created by kukiss on 2015/3/11 0011.
 */
Ext.define('YzMobile.view.project.ProjectMenuPart', {
    extend: 'Ext.List',
    xtype: 'projectMenuPart',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging'
    ],

    config: {

        title: '水库信息',

        store: 'ProjectMenuPartStore',
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: '加载更多...',
                noMoreRecordsText: '没有更多记录了...',
                autoPaging: true
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: '下拉刷新...',

                releaseText: '松开进行刷新...',

                loadingText: '正在刷新...',

                loadedText: '刷新完成.',

                lastUpdatedText: '刷新时间:&nbsp;'
            }
        ],
        cls: 'tidelist',
        itemTpl: [
            '<div style="width:33%;font-size:14px;line-height:3em;text-align:center;padding:0;margin:0;float:left;overflow: hidden;white-space:nowrap;">{[this.display(values.RSNM)]}</div>',
            '<div style="width:33%;font-size:14px;line-height:3em;text-align:center;padding:0;margin:0;float:left;overflow: hidden;white-space:nowrap;">{[this.display(values.CANM)]}</div>',
            '<div style="width:33%;font-size:14px;line-height:3em;text-align:center;padding:0;margin:0;float:left;overflow: hidden;white-space:nowrap;">{[this.display(values.ADNM)]}</div>',
            {
                display: function (value) {
                    if (value == '') {
                        return '--';
                    } else {
                        return value;
                    }
                }
            }
        ],

        items: [
            {
                docked: 'top',
                xtype: 'panel',
                cls: 'tide-header',
                html: '<div style="width:33%;height:100%;float:left;">名称</div><div style="width:33%;height:100%;float:left;">所属流域</div><div style="width:33%;height:100%;float:left;">所属乡镇</div>'
            }
        ]
    }

});