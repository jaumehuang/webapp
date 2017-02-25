<?php
     include "common.php";
	 $checkspl="select * from usercart";
	 $array=query($checkspl,"usercart");
	 if($array){
	 	 echo json_encode($array, JSON_UNESCAPED_UNICODE);
	 }else{
	 	 echo '{无人订单}';
	 }

 ?>
	