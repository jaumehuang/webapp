function SaveDate(){
       	 var time=new Date();
         var year=time.getFullYear();
         var month=time.getMonth();
         var day=time.getDay();
         var hours=time.getHours();
         var minutes=time.getMinutes();
         var seconds=time.getSeconds();
         var week=time.getUTCDay();
         var weeks=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
            //遍历
            for(var i=0;i<weeks.length;i++){
            	if(i==week){
            		week=weeks[i];
            	}
            }
         return (year+"-"+month+"-"+day+"  "+hours+":"+minutes+":"+seconds+"  "+week);
};