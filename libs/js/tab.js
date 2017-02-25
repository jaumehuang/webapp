function tab(){
//	$(".content .left ul>li").on("click",function(e){
//		$(this).children("a").css("color","red").parent("li").siblings().children("a").css("color","#1B6D85");
//	})
    $(".container-fluid .accordion-heading").children("a").on("click",function(){
    	if($(this).children("i").attr("class")=="fa fa-chevron-up"){
    		$(this).children("i").attr("class","fa fa-chevron-down");
    	}else{
    		$(this).children("i").attr("class","fa fa-chevron-up");
    	}
    });
    $(".user").on("click","table>tfoot>tr>td>span",function(){
    	 $(this).css({"background":"#FF4747",color:"#fff"}).siblings().css({"background":"#D0E9C6",color:"#000"})
    })
}
