<?php
     include "common.php";
	 $store=$_POST["store"];
	 $number = $_POST["number"];
	 $img=$_POST["img"];
	 $title=$_POST["title"];
     $price=$_POST["price"];
	 $id=$_POST["id"];
	 $time=$_POST["time"];
	 $buyer=$_POST["buyer"];
	 $phone=$_POST["phone"];
	 $address=$_POST["address"];
	 $integral=$_POST["integral"];
	 $payment=$_POST["payment"];
	 $Order_number=$_POST["Order_number"];
	 $invoices=$_POST["invoices"];
	 $buyer_words=$_POST["buyer_words"];
	 $express=$_POST["express"];
//   查询
	 $sql="insert into completeorder(id,store,img,title,price,numbers,time,buyer,phone,address,integral,payment,Order_number,invoices,buyer_words,express) values('$id','$store','$img','$title','$price','$number',
	 '$time','$buyer','$phone','$address','$integral','$payment','$Order_number','$invoices','$buyer_words','$express');";
	 //sql 脚本 (sql script)
     $checkSql = "select *from completeorder where id='$id';";
	 $array=query($checkSql,"order");
	 if(count($array)>0){
        echo '{"state": false, "message": "已经提交过了!"}'; 
    } else{
    	if(excute($sql,"order")){
    	echo '{"state": true}'; 
    	}else{
    		echo '{"state": false, "message": "提交失败!"}'; 
    	}
//  	$result = excute($sql,"order");   
    }
 ?>
	