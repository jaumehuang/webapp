<?php
     include "common.php";
	 $pwd = $_POST["password"];
	 $phone=$_POST["phone"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from members where phone='$phone'and password='$pwd';";
	 $array=query($checkspl,"members");
	 if(count($array)>0){
	 	  echo '{"state":true}';
//	 	  session_start();
//        $_SESSION["phone"] = $account;
	 }else{
			 echo '{"state":false,"massage":"登录失败"}';
	 }
 ?>
	