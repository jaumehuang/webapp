<?php
     include "common.php";
//	 $pwd = $_POST["password"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from classify";
	 $array=query($checkspl,"productslist");
	 if($array){
	 	 echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
	 	 echo '{"state":false,"message":"搜索不到商品"}';
	 }

 ?>
	