function payment(){
	//支付方式
    $(".layout_footer3 .pay").on("touchstart",function(){
  	    $(".cover2").show();
  	    $(".cover .changebuy").show();
    });
    $(".changebuy>div").on("touchstart",function(){
  	    $(".cover2").hide();
  	    $(".cover .changebuy").hide();
  	    $(this).parent().hide();
    });
}
 
 