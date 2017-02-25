var myApp=angular.module("myApp",["commonApp"]);
    myApp.controller("productlist",["$scope","$http",function($scope,$http){
    var $key=3;
    $http.post(common.baseUrl+"products.php",{keyid:4}).success(function(_reponse){
	     	  if(!_reponse){
	     	 	$.alert("搜索不到商品");
	     	   }
	     	 $scope.productlist =_reponse;
	    }); 	
	$('.layout_body2').scroll(function(){
       Hometop('.layout_body2');
       var  viewH=$('.layout_body2').height();//可视高度
       var  scrollTo=$('.layout_body2').scrollTop();//滚动高度
       var  contentH=$('.layout_body2').get(0).scrollHeight;//内容高度
//     console.log(viewH+scrollTo+1+'='+contentH);
         if(viewH+scrollTo+1==contentH){
               $key+=3;
              $http.post(common.baseUrl+"products.php",{keyid:$key}).success(function(_reponse){
	     	  if(!_reponse){
	     	 	$.alert("搜索不到商品");
	     	 }
	     	 $scope.productlist =_reponse;
	     	 $('.layout_body2').scrollTop(scrollTo-50);
	          })
          }
	});
	$scope.btn_url=function($event,value){
		var $id=$($($event.target).eq(0)[0]).attr("idexid");
		    $id=parseInt($id);
		    if(typeof $id=='number'){
		       window.location.href="details.html?="+$id;
		    };
	}
    //右弹窗
	right_nav();
	//页面传参
	//footer
	footer();
}]);