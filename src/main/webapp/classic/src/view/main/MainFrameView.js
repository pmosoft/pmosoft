Ext.define('pmosoft.view.main.MainFrameView', {  
    extend : 'Ext.panel.Panel'
   ,xtype  : 'mainFrame'
   //,layout    : { type:'vbox' , pack:'center' , align:'middle'}
   //    ,defaults: {
//        //collapsible: true
//        ,split: false
//        ,bodyPadding: 10
//    }
   ,items :
    [
     {
     //----------------------------- 
     // top 메뉴   
     //----------------------------- 
         xtype : 'topMenu'
     },{
     //----------------------------- 
     // center 메뉴    
     //----------------------------- 
         xtype: 'aboutView'
     }
    ]
});
