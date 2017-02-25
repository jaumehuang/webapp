<?php
     include "common.php";
	 $store= $_POST["store"];
	 $id= $_POST["id"];
     $img = $_POST["img"];
	 $title=$_POST["title"];
	 $price=$_POST["price"];
	 $numbers=$_POST["numbers"];
//     查询
	 $sql="insert into productslist(store,id,img,title,price,numbers) values('$store','$id','$img','$title','$price','$numbers');";
	 //sql 脚本 (sql script)
     $checkSql = "select * from productslist where id = '$id'";
	 $array=query($checkSql,"productslist");
	 if(count($array) > 0){
        echo '{"state": false, "message": "该商品已被添加!"}';
    } else{
        $result = excute($sql,"productslist");
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "添加失败!"}';
        }        
    }
 ?>
	