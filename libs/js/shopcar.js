var myApp = angular.module("myApp", ["commonApp"]);
myApp.controller("mycart", ["$scope", "$http", function($scope, $http) {
	//展现商品
	$http.post(common.baseUrl+"shopcart.php").success(function(_reponse){
		$scope.cartgood=_reponse;
	})
	//悬浮窗
	
	$('.body_3').scroll(function(){
       Hometop('.body_3');
    });
function calculation(){
//商品全选
var _total=0;
var num=0;
var _array=[];
var checked=$(".layout_footer3 .shoppingcar-toolbar .col-xs-3")
    checked.on("touchstart",function(e){
    	e.preventDefault();
    	//闲情利空单选商品
    	num=0;
    	_total=0;
    	if($(this).children("i").attr("class")=="fa fa-circle-o ng-scope"){
    		$(this).children("i").attr("class","fa fa-check-circle ng-scope").css({
    		 "color":"red"
    	   });
    		$(".list .option").find("i").attr("class","fa fa-check-circle ng-scope").css({
    		 "color":"red"
    	   });
    	   //遍历数据
    	   $.each($scope.cartgood, function(_index,_obj) {
    	   	      _total+=($scope.cartgood[_index].numbers)*($scope.cartgood[_index].price);
    	   });
    	   $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
    		
    	}else if($(this).children("i").attr("class")=="fa fa-check-circle ng-scope"){
    		$(this).children("i").attr("class","fa fa-circle-o ng-scope").css({
    		 "color":"#000"
    	   });
    		$(".list .option").find("i").attr("class","fa fa-circle-o ng-scope").css({
    		 "color":"#000"
    	   });
    	    _total=0;
    	   $(".layout_footer3 .col-xs-5 a").children("span").text(_total)
    	}
    })
    
    //商品单选
    
    $(".body_3").on("touchstart",".option",function(e){
    	e.preventDefault();
    	var $id=$($(this)[0]).attr("indexid");
    	var _price=$(this).siblings(".content").find(".product-price span").text();
    	if($(this).children("i").attr("class")=="fa fa-circle-o ng-scope"){
    		$(this).children("i").attr("class","fa fa-check-circle ng-scope").css({
    		 "color":"red"
    	    });
    	    $http.post(common.baseUrl+"seletecartChangegood.php",{id:$id}).success(function(_reponse){
    		     var $good=_reponse;
    		         $good[0].time=SaveDate();
    		     //选择商品
    		     changeGood($good);
//  		     console.log(changeGood($good));
    	         }) 
    	     num=$(this).siblings(".content").find(".ng-binding").eq(3).text();
    	     
    	    _total+=parseInt(num)*_price; 
    	 
    	    $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
    	}else if($(this).children("i").attr("class")=="fa fa-check-circle ng-scope"){
    		$(this).children("i").attr("class","fa fa-circle-o ng-scope").css({
    		 "color":"#000"
    	     });
    	        //取消商品
    	        cancel($id);
    	       num=$(this).siblings(".content").find(".ng-binding").eq(3).text(); 
    	     _total-=parseInt(num)*_price;  
    	    $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
    	}
    })
//  //获取数组下标
//  function updateIndex(id){
//  	_Cartobj.data=JSON.parse(localStorage.getItem("cart"));
//  	var i=0;
//  	//先遍历数据
//  	$.each(_Cartobj.data, function(_index,_ele) {
//  		   if(_ele.id==id){
//  		   	 //配对成功，判断进行了哪些操作，首先更新数据
//  		   	 i=_index;//知道了数组的下标；
//  		   }
//  	});
//  	return i; 
//  }
    //刷新数据
    function updateData($id,$number){
    	$http.post(common.baseUrl+"seletecartgood.php",{id:$id,number:$number}).success(function(_reponse){
    		if(!_reponse.state){
    			$.alert(_reponse.message);
    		}
    	})
    }
        //删除商品
    function deletegood($id){
    	$http.post(common.baseUrl+"deletecartgood.php",{id:$id}).success(function(_reponse){
    		if(!_reponse.state){
    			$.alert(_reponse.message);
    		};
    	});
    }
    $scope.deletebtn=function($event){
    	var ID=$($($event.target).parent()[0]).attr("indexid");
         var _price=$($($event.target).parent()[0]).siblings().eq(0).find("span").text();
    	var _num=$($($event.target).parent()[0]).siblings().eq(1).children(".ng-binding").text();
////  	//删除商品结构
    	var parent=$($($event.target).parent()[0]).parentsUntil().eq(2);
    	    parent.remove();
    	    deletegood(ID);
    	var $img=$($($event.target).parent()[0]).parentsUntil("item-content").eq(1).siblings(".product-img").find("img").attr("src");
         //减少金额
          _total-=parseInt(_price)*_num;
         $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
   };
    $scope.addbtn=function($event){
      	   var ID=$($($event.target).parent()[0]).attr("indexid");
           var _price=$($($event.target).parent()[0]).parent().siblings().eq(0).children().text();
    	   var add=parseInt($($($event.target).parent()[0]).siblings(".ng-binding").text());
    	      add++;
	      $($($event.target).parent()[0]).siblings(".ng-binding").text(add);
//	     //更新商品的总数量,只有商品被选中的情况下改变；
	       if($($($event.target).parent()[0]).parentsUntil().eq(2).siblings().eq(0).children("i").attr("class")=="fa fa-check-circle ng-scope"){
    	      _total+=1*_price;
    	      $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
	      }
     	  updateData(ID,add);
    };
    $scope.reducebtn=function($event){
    	   var ID=$($($event.target).parent()[0]).attr("indexid");
           var _price=$($($event.target).parent()[0]).parent().siblings().eq(0).children().text();
    	   var reduce=parseInt($($($event.target).parent()[0]).siblings(".ng-binding").text());
	    	      reduce-=1;
	    	      if(reduce<=0){
	    	      	reduce=0;
	    	      }
	      $($($event.target).parent()[0]).siblings(".ng-binding").text(reduce);
//	     //更新商品的总数量,只有商品被选中的情况下改变；
	       if($($($event.target).parent()[0]).parentsUntil().eq(2).siblings().eq(0).children("i").attr("class")=="fa fa-check-circle ng-scope"){
    	      _total-=1*_price;
    	      if(_total<0){
    	      	  _total=0;
    	      	  $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
    	      }
    	      $(".layout_footer3 .col-xs-5 a").children("span").text(_total);
	      }
     	  updateData(ID,reduce);
    };
      //保存选择商品下单;      
   function changeGood($good){
   	      var _falg=false;
   	       //遍历数组
   	       if(_array.length!=0){
   	       	  for(var i in _array){
   	       	    if(_array[i][0].id==$good[0].id){
   	       	     	_falg=true;
    		 	    return true;
   	       	     };
   	            };
   	       }
   	       if(!_falg){
   	       	  _array.push($good);
   	       }
// 	      
// 	       console.log(_array);
   	       return _array;
      }
    function cancel($id){
    	 //遍历数组
    	if(_array.length!=0){
    		if(_array.length!=0){
   	       	  for(var i in _array){
   	       	    if(_array[i][0].id==$id){
   	       	     	  _array.splice(i,1);
   	       	        };
   	            };
   	       } 
    	}
// 	    console.log(_array);  
    };
    //提交订单
   
    $scope.getOrder=function(){
		if($(".layout_footer3 .shoppingcar-toolbar .col-xs-3").children("i").attr("class")=="fa fa-check-circle ng-scope"){
			AllOrder()
			$.confirm({
			    keyboardEnabled: true,
			    content: '确认订单吗',
			    cancel: function(){
			    },
			    confirm: function(){
			        window.location.href = "isOrder.html";
			    }
          });
		}else{
			angular.forEach(_array,function(data,index){
		  	$http.post(common.baseUrl+"saveorder.php",{id:data[0].id,store:data[0].store,img:data[0].img,title:data[0].title,price:data[0].price,number:data[0].numbers,time:data[0].time}).success(function(_reponse){
		  	 })
		     });
		     $.confirm({
			    keyboardEnabled: true,
			    content: '确认订单吗',
			    cancel: function(){
			    },
			    confirm: function(){
			        window.location.href = "isOrder.html";
			    }
          });
		};
    }
    //全部购买
    function AllOrder(){
     	if($(".layout_footer3 .shoppingcar-toolbar .col-xs-3").children("i").attr("class")=="fa fa-check-circle ng-scope"){
     	   $http.post(common.baseUrl+"cartgood_order.php").success(function(_reponse){
     	    var _arry=_reponse;
//   	    //遍历保存入数据库
     	    angular.forEach(_arry, function(data){
     	    //给每一个商品添加购买时间；
     	    data.time=SaveDate();
     	    $http.post(common.baseUrl+"saveorder.php",{id:data.id,store:data.store,img:data.img,title:data.title,price:data.price,number:data.numbers,time:data.time}).success(function(_reponse){
     	    	        
     	           });
     	        });		
     	    });	
     	};
    };
 };
    calculation();
    //右弹窗
    right_nav();
    //支付方式
     payment();
    //遍历购物车
    //提交订单
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
}]) 