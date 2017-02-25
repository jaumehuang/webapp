<?php
     include "common.php";
	 $number = $_POST["number"];
	 $img=$_POST["img"];
	 $title=$_POST["title"];
     $price=$_POST["price"];
	 $id=$_POST["id"];
	 $store=$_POST["store"];
//     查询
	 $sql="insert into usercart(id,store,numbers, img,title,price) values('$id','$store','$number','$img','$title','$price');";
	 //sql 脚本 (sql script)
     $checkSql = "select * from usercart where id = '$id';";
	 $array=query($checkSql,"usercart");
//	 
	 if(count($array) > 0){
        echo '{"state": false, "message": "该商品已添入购物车!"}';
    } else{
        $result = excute($sql,"usercart");
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "添加入购物车失败!"}';
        }        
    }
 ?>
	