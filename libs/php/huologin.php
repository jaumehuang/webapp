<?php
     include "DBHelper.php";
	 $pwd = $_POST["password"];
	 $account=$_POST["account"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from user where account='$account'and password='$pwd';";
	 $array=query($checkspl);
	 if(count($array)>0){
	 	  echo '{"state":true}';
	 	  session_start();
          $_SESSION["account"] = $account;
	 }else{
			 echo '{"state":false,"massage":"登录失败"}';
	 }
 ?>
	