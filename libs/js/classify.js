window.onload=function(){
	new Vue({
		el: "#demo_nav",
		data: {
		    classify:''
		    
		},
		ready:function(){
			this.Intit()
	    },
		methods: {
			subimt_Nav: function(event) {
			    $(event.target).css({
			    	"color":"red",
			    	"background":"#F1F5F6",
			    }).siblings().css({
			    	"color":"#000",
			    	"background":"#fff"
			    });
			   var idphp= $(event.target).attr("php");
			    //获取不同的数据表
			    var self=this;
			   $.post(common.baseUrl+"classify.php?="+idphp).success(function(_reponse){
			   	      self.classify=JSON.parse(_reponse);
			   })
			},
			Intit:function(){
				var self=this;
			   $.post("../libs/php/classify.php").success(function(_reponse){
			   	      self.classify=JSON.parse(_reponse);
			   })
			}
			
		}
	});
	 right_nav();
}
	

	
   
