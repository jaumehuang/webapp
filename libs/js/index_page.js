//$(function(){
//	// 初始化轮播
//	$("#myCarousel").carousel('cycle');
//	//每个项目的轮播时间
//	$('#myCarousel').carousel({
//	  interval: 100
//	})
//    //footer
//    footer();
//   //搜索框
//   index();
           
           
//		$(".start-slide").click(function(){
//			$("#myCarousel").carousel('cycle');
//		});
//		// 停止轮播
//		$(".pause-slide").click(function(){
//			$("#myCarousel").carousel('pause');
//		});
//		// 循环轮播到上一个项目
//		$(".prev-slide").click(function(){
//			$("#myCarousel").carousel('prev');
//		});
//		// 循环轮播到下一个项目
//		$(".next-slide").click(function(){
//			$("#myCarousel").carousel('next');
//		});
//		// 循环轮播到某个特定的帧 
//		$(".slide-one").click(function(){
//			$("#myCarousel").carousel(0);
//		});
//		$(".slide-two").click(function(){
//			$("#myCarousel").carousel(1);
//		});
//		$(".slide-three").click(function(){
//			$("#myCarousel").carousel(2);
//		});
//})
var myApp=angular.module("myApp",["commonApp"]);
    myApp.controller("myctr",["$scope","$http",function($scope,$http){
	    // 初始化轮播
		$("#myCarousel").carousel('cycle');
		//每个项目的轮播时间
		$('#myCarousel').carousel({
		  interval: 100
		});
	      //footer
	      footer();
	     //搜索框
	     index();
	//检测滚动条
	var $key=4;
	$('.layout_body').scroll(function(){
       Hometop('.layout_body');
       var  viewH=$('.layout_body').height();//可视高度
       var  scrollTo=$('.layout_body').scrollTop();//滚动高度
       var  contentH=$('.layout_body').get(0).scrollHeight;//内容高度
       console.log(scrollTo)
         if(viewH+scrollTo==contentH){
               $key++;
               console.log($key)
              $http.post("libs/php/products_index.php",{keyid:$key}).success(function(_reponse){
	     	  if(_reponse.state){
	     	 	$.alert("搜索不到商品");
	     	  }
	     	  	$scope.index_list=_reponse;
	     	  	$('.layout_body').scrollTop(scrollTo-100);
	     	 
	          })
          }
	});
    }])
