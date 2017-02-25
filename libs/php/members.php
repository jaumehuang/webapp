<?php
     include "common.php";
//	 $pwd = $_POST["password"];
	 $phone=$_POST["phone"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from members where phone='$phone'";
	 $array=query($checkspl,"members");
	 if($array){
	 	 echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
	 	 echo '{无人注册}';
	 }

 ?>
	