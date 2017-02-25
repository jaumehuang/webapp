var register=angular.module("register",["commonApp"]);
	register.controller("myctr",["$scope","$http",function($scope,$http){
  		//右弹窗
		right_nav();
		var flag=true;
		var flag1=0;
		var flag2=0;
		var flag3=0;
		var flag4=0;//成功的标志
		var flag5=0;
		var _p=$(".register_body>p");
		var $sex=null;
		//用户名验证
		$(".register_body .user").find("input").eq(0).on("blur",function(){
			 var str= $(this).val();
			 //判段是否输入框为空
			 if(str.length==0){
			 	_p.text("输入框为空");
			 	flag=false;
			 	return;
			 }
			 var reg_1 = /\s/ig;
			     str=str.replace(reg_1,"");//清除空字符
			 var reg= /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;
			 if(!reg.test(str)){
			 	_p.text("只能中英文，数字，下划线，减号");
			 	flag1=0;
			 }else{
			 	_p.text("马上注册，会员享有大礼包");
			 	flag1=1;
			 }
		})
		//手机号码验证
		$(".register_body .phone").find("input").eq(1).on("blur",function(){
			 var str= $(this).val();
			 if(str.length==0){
			 	_p.text("输入框为空");
			 	flag=false;
			 	return;
			 }
			 var reg_1 = /\s/ig;
			     str=str.replace(reg_1,"");//清除空字符
			 var reg= /^1(3|4|5|7|8)\d{9}$/;
			 if(!reg.test(str)){
			 	_p.text("号码只能13、15、18、14开头，且只能是11位数");
			 	flag2=0;
			 }else{
			  _p.text("马上注册，会员享有大礼包");
			  flag2=1;
			 }
		});
		//推荐手机号码验证
		$(".register_body .phone_2").find("input").eq(1).on("blur",function(){
			 var str= $(this).val();
			 //判段是否输入框为空
			 if(str.length==0){
			 	_p.text("输入框为空");
			 	flag=false;
			 	return;
			 }
			 var reg_1 = /\s/ig;
			     str=str.replace(reg_1,"");//清除空字符
			 var reg= /^1(3|4|5|7|8)\d{9}$/;
			 if(!reg.test(str)){
			 	_p.text("号码只能13、15、18、14开头，且只能是11位数");
			 	flag3=0;
			 }else{
			 	_p.text("马上注册，会员享有大礼包");
			 	flag3=1;
			 }
		});
		//用户名密码
		$(".register_body .password").find("input").eq(0).on("blur",function(){
			 var str= $(this).val();
			 //判段是否输入框为空
			 if(str.length==0){
			 	_p.text("输入框为空");
			 	flag=false;
			 	return;
			 }
			 var reg_1 = /\s/ig;
			     str=str.replace(reg_1,"");//清除空字符
			 var reg= /^[a-zA-Z]\w{5,17}$/;
			 if(!reg.test(str)){
			 	_p.text("以字母开头，长度在6-18之间，只能包含字符、数字和下划线");
			    flag4=0;
			 }else{
			 	_p.text("马上注册，会员享有大礼包");
			 	flag4=1;
			 }
		});
		//check_password
		//重新写入用户名密码
		$(".register_body .check_password").find("input").eq(0).on("blur",function(){
			 var str= $(".register_body .password").find("input").eq(0).val();
			 if(!($(this).val()==str)){
			 	_p.text("两次输入的密码不对");
			 	flag5=0;
			 }else{
			 	_p.text("马上注册，会员享有大礼包");
			 	flag5=1;
			 }
		});
		//
		$(".register_body .sex").find("input").eq(0).on("touchstart",function(){
			$sex=$(this).siblings("span").text();
		})
		//注册按钮验证
	$scope.btn=function(){
		if(flag){
			if(flag1==flag2==flag3==flag4==flag5==1){
				$http.post(common.baseUrl+"register.php",{account:$scope.account,sex:$sex,password:$scope.password,phone:$scope.phone,Email:$scope.Email}).success(function(_reponse){
			    if(!_reponse.state){
				  $.alert(_reponse.message);
			    }
		   })
		        }
		}
	}
}]);
