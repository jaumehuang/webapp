<?php
     include "common.php";
	 $key= $_POST["keyid"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from productslist limit 0,$key";
	 $array=query($checkspl,"productslist");
	 if($array){
	 	 echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
	 	 echo '{无商品数据}';
	 }

 ?>
	