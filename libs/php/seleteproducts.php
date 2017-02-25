<?php
     include "common.php";
     $id = $_POST["id"];
//     查询
	 $sql="insert into productslist(id) values('$id');";
	 //sql 脚本 (sql script)
     $checkSql = "select * from productslist where id = '$id';";
	 $array=query($checkSql,"productslist");
	if($array){
			echo json_encode($array, JSON_UNESCAPED_UNICODE);
	}else{
			echo '{massge:"搜索不到商品"}';
	}
 ?>
	