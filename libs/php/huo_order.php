<?php
     include "common.php";
//	 $pwd = $_POST["password"];
//	 $account=$_POST["account"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from orderlist";
	 $array=query($checkspl,"order");
	 if($array){
	 	 echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
	 	 echo '{无订单}';
	 }

 ?>
	