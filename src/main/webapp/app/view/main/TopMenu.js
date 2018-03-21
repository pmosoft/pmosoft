Ext.define('pmosoft.view.main.TopMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.topMenu',
    region : 'north',
    title : 'Pmosoft',
    //split: true,
    //collapsible: true,        
    bodyBorder: false,
    //height : 80,
    header : false,
    items : [{
        xtype : 'toolbar',
        //style:'border-color:#99BBE8;background-color:#D3E1F1 !important;',
        items : [
        {
            xtype : 'label',
            //margin : 10 0 0 0,
            html : '<h2>&nbsp;&nbsp;&nbsp;&nbsp;Pmo<span style="color:red">S</span>oft</span></h2>',
            iconCls: 'fa-th-list'
        },'->',
        {
            xtype : 'button',
            text : '메뉴',
            iconCls: 'x-fa fa-th-list',
            menu : [{
                text : '솔루션'
            },{
                text : '연락처'
            }]
        }]
    }]
});