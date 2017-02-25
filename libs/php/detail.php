<?php
     include "common.php";
	 $id=$_POST["id"];
//   $pwd=$_POST["password"];
	 $checkspl="select * from productslist where id='$id';";
	 $array=query($checkspl,"productslist");
	 if(count($array)>0){
          echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
			 echo '{"state":false,"massage":"查询失败"}';
	 }
 ?>
	