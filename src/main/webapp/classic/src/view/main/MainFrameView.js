Ext.define('pmosoft.view.main.MainFrameView', {  
    extend : 'Ext.container.Viewport'
   ,xtype  : 'mainFrame'
   ,layout : 'border'
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
        ,region: 'center'
        ,itemId: 'maintab'
        ,margin: '5 5 0 0'        
        ,split : false
        ,bodyBorder: false                
        ,height: Ext.Element.getViewportHeight()-80
        ,defaults: {
           scrollable: true
         }      
        ,flex : 1
     }
    ]
});
