var myApp=angular.module("myApp",["commonApp"])
    myApp.controller("mydetail",["$scope","$http",function($scope,$http){
    //轮播图
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 2000//可选选项，自动滑动
       });
         //右弹窗
         right_nav();
         //切换
         $scope.btn_switch=function($event){
              console.log($event.target)
               $(".body_5 .comment").hide();
               	$($event.target).css({
	    		"background":"#fff",
	    		"color":"#000"
	    	    }).siblings("span").css({
	    		"background":"#c53866",
	    		"color":"#fff"
	    	    });
	    	    if($(".details .search-bar").find("span").eq(0).css("color")=="rgb(0, 0, 0)"){
	    		   $(".body_5 .showdeatil").show();
	    		   $(".body_5 .comment").hide();
	    	    }else if($(".details .search-bar").find("span").eq(1).css("color")=="rgb(0, 0, 0)"){
	    		    $(".body_5 .showdeatil").hide();
	    		    $(".body_5 .comment").show();
	    	    };
         };
         var idstring=window.location.search;
	     $id=idstring.split("=")[1];
	     console.log($id)
	     var i=0;
	     $(".detail .shopcart").on("touchstart",function(){
	    	  i++;
	    	  if(i<10){
	    	  	i="0"+i;
	    	    }
	    	 $(this).siblings().eq(0).find(".num").text(i);	    	 
		});
		$http.post(common.baseUrl+"detail.php",{id:$id}).success(function(_reponse){
   		     $scope.detail=_reponse[0];
   		    $scope.shopcart=function(){
   		       $http.post(common.baseUrl+"savecart.php",{number:1,img:$scope.detail.img,title:$scope.detail.title,price:$scope.detail.price,id:$scope.detail.id,store:$scope.detail.store}).success(function(_reponse){
   		       	   if(!_reponse.state){
   		       	   	  $.alert(_reponse.message);
   		       	       }
   		        })
   	        } 
	    });
	    //评价
	    $http.post(common.baseUrl+"comment.php").success(function(_reponse){
	    	 $scope.commentlist=_reponse;
	    })
	    //回到顶部
	    $('.body_5').scroll(function(){
	    	  Hometop('.body_5');
	    });
	    //支付方式
	    $(".detail .pay").on("touchstart",function(){
  	       $(".cover2").show();
  	       $(".cover .changebuy").show();
        });
       $(".changebuy>div").on("touchstart",function(){
  	       $(".cover2").hide();
  	       $(".cover .changebuy").hide();
  	       $(this).parent().hide();
  	       window.location.href="isOrder.html";
        });
    }])