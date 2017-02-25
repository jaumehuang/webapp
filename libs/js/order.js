var myApp=angular.module("myApp",["commonApp"]);
    myApp.controller("order",["$scope","$http",function($scope,$http){
    	 right_nav();//右弹窗
//	     new Iscroll("#content2");
	     $http.post(common.baseUrl+"huo_order.php").success(function(_reponse){
	     	 $scope.order=_reponse;
	     })
	     $('.body_order').scroll(function(){
	     	Hometop('.body_order');
	     })
	     //删除订单
	    $scope.deleteOrder=function($event){
	    	var $id=$($event.target).attr("indexid");
	     	if(window.confirm("确定删除订单")){
	     	$($event.target).parentsUntil().eq(1).remove();
	     	$http.post(common.baseUrl+"deleteorder.php",{id:$id}).success(function(_reponse){
	     	  if(!_reponse.state){
	     	  	 $.alert(_reponse.delete);
	     	    }
	        })
	     	 return true;
	        }else{
	     	  return false;
	        }
	    } 	
    }])