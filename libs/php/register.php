<?php
     include "DBHelperlogin.php";
	 $pwd = $_POST["password"];
	 $account=$_POST["account"];
	 $phone=$_POST["phone"];
     $sex=$_POST["sex"];
	 $Email=$_POST["Email"];
//     查询
	 $sql="insert into members(account,sex, password,phone,Email) values('$account','$sex','$pwd','$phone','$Email');";
	 //sql 脚本 (sql script)
     $checkSql = "select * from members where account = '$account'";
	 $array=query($checkSql);
//	 
	 if(count($array) > 0){
        echo '{"state": false, "message": "该用户已被注册!"}';
    } else{
        $result = excute($sql);
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "注册失败!"}';
        }        
    }
 ?>
	