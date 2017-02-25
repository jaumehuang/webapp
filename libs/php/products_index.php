<?php
     include "common.php";
	 $key = $_POST["keyid"];
//   $pwd=$_POST["password"];
//   "SELECT * FROM `message` limit $page $pagesize "
	 $checkspl="select * from index_list limit 0,$key";
	 $array=query($checkspl,"productslist");
	 if($array){
	 	 echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
	 	 echo '{"state":false,"message":"搜索不到商品"}';
	 }

 ?>
	