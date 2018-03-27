Ext.define('pmosoft.view.home.AboutView', {
     extend     : 'Ext.form.Panel'
    ,xtype      : 'aboutView'
    ,viewModel  : 'aboutView' 
    ,items :  
     [    
      //-------------------------------------------
      // 개요
      //-------------------------------------------
      {
          xtype     : 'panel'
         ,flex      : 1
         ,margin    : '5 0 0 20'
         ,border    : false
         ,bodyStyle : {"background-color":"silver"} 
         ,height    : 100
         ,layout    : { type:'hbox' , pack:'center' , align:'middle'}   
         ,items:
          [
           { xtype  : 'component'
            ,width  : 600 
            ,html   : '<div style="line-height:1.4em"><span style="color:white">'+
                '프로젝트 진행시 필요한 front-back 프레임웍 메타관리 및 기타  생산성 향상 솔루션을 제공합니다.' +
                '<br>또한 오랜  프로젝트 IT 컨설팅 서비스를 제공해 드립니다. ' + 
                '업무 및 IT부문 모두를 검토하여 실현가능하며 확장성 있는 기획 및 설계를 진행합니다.' +
                '<br>철저한 인력평가 시스템을 바탕으로다년간 풍부한 경험 및 능력 겸비한 인력으로만 구성되어 있습니다. '+
                '</span></div>'
           }
          ]       
      //-------------------------------------------
      // 회사 소개 도표
      //-------------------------------------------
      },{
          xtype     : 'panel'
         ,flex      : 1
         ,margin    : '5 0 0 20'
         ,border    : false
         //,bodyStyle : {"background-color":"silver"} 
         ,height    : 400
         ,layout    : { type:'hbox' , pack:'center' , align:'middle'}   
         ,items:
          [
           { xtype  : 'component'
            ,width  : 400 
            ,html   : '<img src="resources/com_intro01.png" height="300" width="400" />'
           }
          ]       
      }   
     ]
});
