Ext.define('pmosoft.view.home.ExcerciseModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.aboutView'
   ,data: {
        goalCnt       : '105'
       ,dailyTotalCnt : '49'
       ,curExeCnt     : '10'
    }
   ,stores : {
        exerciseGrid : {
            fields : [
                       'CD_ID_NM'      
                      ,'CD'            
                      ,'CD_PARAM1_DESC'
                     ]
           ,proxy : {
                type : 'ajax'
               ,url : '/dams/code/selectCodeExtList'
               ,reader : {
                    type : 'json'
                   ,rootProperty : 'data'
                   ,totalProperty : 'total'    
                }
            }
        }
    }
});
