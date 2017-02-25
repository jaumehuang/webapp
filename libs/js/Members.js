
var myApp=angular.module("myApp",["commonApp"]);
    myApp.controller("myctr",["$scope","$http",function($scope,$http){
//  	//获取login传过来的参数
    	var _phone=window.location.href.split("=")[1];
//  	console.log(_phone);
//  	//有弹窗
	    right_nav();
	    if(_phone){
	    	 $http.post(common.baseUrl+"members.php",{phone:_phone}).success(function(_reponse){
   		     $scope.account=_reponse[0].account;
   	    })
	    }

}])