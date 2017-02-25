<?php
     include "common.php";
	 $oldid=$_POST["oldid"];
     $img = $_POST["img"];
	 $title=$_POST["title"];
	 $price=$_POST["price"];
	 $numbers=$_POST["numbers"];
//     查询"update usercart set numbers ='$number' where img='$img'";
	 $sql="update productslist set img='$img',title='$title',price='$price',numbers='$numbers' where id='$oldid';";
	 //sql 脚本 (sql script)
     $checkSql = "select * from productslist where id = '$oldid';";
	 $array=query($checkSql,"productslist");
	 if(count($array) > 0){
		 $result = excute($sql,"productslist");
		if($result){
			echo '{"state":true,"message":"商品修改成功"}';
		 }else{
		 	echo '{"state":false,"message":"商品修改失败"}';
		 }
    } else{
         echo '{"state": false, "message": "搜索不到该商品!"}';
    }
 ?>
	