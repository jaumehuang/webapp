<?php
     include "common.php";
	 $store=$_POST["store"];
	 $number = $_POST["number"];
	 $img=$_POST["img"];
	 $title=$_POST["title"];
     $price=$_POST["price"];
	 $id=$_POST["id"];
	 $time=$_POST["time"];
//   查询
	 $sql="insert into orderlist(id,store,img,title,price,numbers,time) values('$id','$store','$img','$title','$price','$number','$time');";
	 //sql 脚本 (sql script)
     $checkSql = "select *from orderlist where store='$id';";
	 $array=query($checkSql,"order");
	 if(count($array) > 0){
        echo '{"state": false, "message": "已经购买了!"}';
    } else{
        $result = excute($sql,"order");
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "购买失败!"}';
        }        
    }
 ?>
	