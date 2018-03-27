
Ext.define('pmosoft.view.main.MainFrameView', {
    extend: 'Ext.panel.Panel',
    xtype  : 'mainFrame',

    requires: [
        'Ext.layout.Fit'
    ],

    layout: 'fit',
    items : [
        {
            xtype : 'label',
            //margin : 10 0 0 0,
            html : '<h2>&nbsp;&nbsp;&nbsp;&nbsp;Pmo<span style="color:red">S</span>oft</span></h2>',
            iconCls: 'fa-th-list'
        },
        {
            xtype : 'button',
            text : '메뉴',
            iconCls: 'x-fa fa-th-list',
        }]
})
;