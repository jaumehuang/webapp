
 new Vue({
 	 el:"#header",
 	 data:{},
 	 ready:function(){
 	 	 this.init();
 	 },
 	 methods:{
 	 	init:function(){
 	 	    right_nav();	     
 	 	},
 	 }
 	 
 });
   new Vue({
   	  el:"#top",
   	  data:{},
   	  ready:function(){
 	 	 this.init();
 	  },
   	  methods:{
   	  	init:function(){
   	  		$('.content').scroll(function(){
             Hometop('.content');
            }) 
   	  	}
   	  }
   })
   new Vue({
   	el:"#content",
   	data:{
   	   payment:'微信支付',
   	   Array:'',
   	},
   	ready:function(){
   		this.Datas();
   	},
   	methods:{
   		pay:function(){
   			    var self=this;
				$(".cover2").show();
		  	    $(".cover .changebuy").show();
		  	    $(".changebuy>div").on("touchstart",function(){
		  	    self.payment=$(this).text();	
		  	    $(".cover2").hide();
		  	    $(".cover .changebuy").hide();
		  	    $(this).parent().hide();
	        });
   		},
   		Datas:function(){
   			var self=this;
   			$.getJSON(common.baseUrl+"huo_order.php").success(function(_reponse){
   				  //对商品进行分类
                    self.Array=_reponse;
   			});
   		},
   		express:function(){
   			$(".express .send>span").on("touchstart",function(){
   				 $(this).siblings(".select").show();
   			});
   			$(".select").find("li").on("touchstart",function(){
   				$(".express .send>span").text($(this).text());
   				$(this).parent().hide();
   			})
   		}
// 		SubmitOrder:
   	}
});
new Vue({
	el:"#order",
	data:{
		Array:'',
	},
	methods:{
	   SubmitOrder:function(){
	   	    var buyer=$(".content .top .account").children("span").eq(0).text();
	   	    var phone=$(".content .top .account").children("span").eq(1).text();
	   	    var address=$(".content .top .address").text();  
	   	    var payment=$(".content .getbuy .pay").text();
	   	    var invoices=$(".content .invoice").find("input").val();
	   	    var buyer_words=$(".content .buyer_words").find("input").val();
	   	    var express="快递免邮";
//	   	    console.log( buyer+phone+address+integral+payment);
	   	    $.getJSON(common.baseUrl+"huo_order.php").success(function(_reponse){
	   	    	var arr=_reponse;
//	   	    	console.log(arr);
	   	    	$.each(arr, function(index,ele) {
	   	    		 var Order_number=Math.ceil(10000000+Math.random()*1000000000);
	   	    		 var integral=Math.ceil(100+Math.random()*100); 
	   	    	     ele.buyer=buyer;
	   	    	     ele.phone=phone;
	   	    	     ele.address=address;
	   	    	     ele.integral=integral;
	   	    	     ele.payment=payment;
	   	    	     ele.Order_number=Order_number;
	   	    	     ele.time=SaveDate();
	   	    	     ele.invoices=invoices;
	   	    	     ele.buyer_words=buyer_words;
	   	    	     ele.express=express;
//	   	    	     console.log(ele);
	   	    	$.post(common.baseUrl+"submitorder.php",{id:ele.id,store:ele.store,img:ele.img,title:ele.title,price:ele.price,
	   	    		number:ele.numbers,time:ele.time,buyer:ele.buyer,phone:ele.phone,address:ele.address,integral:ele.integral,
	   	    		payment:ele.payment,Order_number:ele.Order_number,invoices:ele.invoices,buyer_words:ele.buyer_words,express:ele.express})
	   	    	    .success(function(_reponse){
//	   	    		 if(!_reponse.state){
//	   	    		 	$.alert(_reponse.message);
//	   	    		 }
	   	    	})
	   	    	});
	   	    });
	   	   $.confirm({
			    keyboardEnabled: true,
			    content: '订单提交成功,是否进入我的订单',
			    cancel: function(){
			    },
			    confirm: function(){
			        window.location.href = "MyOrder.html";
			    }
          });
	   }
	}
})