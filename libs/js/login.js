
var myApp=angular.module("myApp",["commonApp"]);
    myApp.controller("myctr",["$scope","$http",function($scope,$http){
 	//右弹窗
    right_nav();
    //登陆
 	$scope.login=function(){
 	 	$http.post(common.baseUrl+"login.php",{phone:$scope.phone,password:$scope.password}).success(function(_reponse){
 	 	 	if(_reponse.state){
	            window.location.href = "Members.html?="+$scope.phone;                 
 	 	 	    }else{
 	 	 	 	$.alert("登录失败");
 	 	 	    }
 	 	})
 	}
}])