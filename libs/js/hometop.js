function Hometop(ele){
//	var key=0;
//	$(ele).scroll(function(){
//    if($(ele).scrollTop()>800){
//        $(".scroll_top").css({
//          "display":"block"
//        });
//        $(".scroll_top").on("touchstart",function(e){
//        	  e.preventDefault();
//        	 $(ele).scrollTop(0);  
//        })
//	   }else{
//         	 $(".scroll_top").hide();
//     };
//     var  viewH=$(ele).height();//可视高度
//     var  scrollTo=$(ele).scrollTop();//滚动高度
//     var   contentH=$(ele).get(0).scrollHeight;//内容高度
//
//       if(viewH+scrollTo==contentH){
//             key++;
//             return key;
//         }
////	    console.log($(ele).scrollTop()+"--"+$(ele).height()+'='+$(ele).get(0).scrollHeight);
////	    console.log($(ele).scrollTop()+$(ele).height())
//	});
//	
//	return  $(ele).scroll()
        if($(ele).scrollTop()>800){
		      $(".scroll_top").css({
		        "display":"block"
		      });
		      $(".scroll_top").on("touchstart",function(e){
		      	  e.preventDefault();
		      	   $(ele).scrollTop(0);  
		      })
        }else{
       	 $(".scroll_top").hide();
        };
}
