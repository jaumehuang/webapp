
<?php
     include "DBHelper.php";
     $oldpwd = $_POST["oldpassword"];
	 $pwd = $_POST["password"];
	 $account=$_POST["account"];
	 $name=$_POST["name"];
	 $mail=$_POST["mail"];
	 $phone=$_POST["phone"];
     $sql = "select * from user where account = '$account'";
	 // $checkspl="select * from student where account='$account'and password='$pwd';";
	 $result = query($sql,'user');
	 // $update = "update student set password = '$pwd' where account = '$account'";
	 // excute($update);
	 	if(count($result) > 0){
		if($result[0]->password ==$oldpwd){
			//执行修改操作
			$update = "update user set password = '$pwd',name='$name',mail='$mail',phone='$phone' where account = '$account'";
			if(excute($update,'user')){
				echo '{"state": true}';
			} else {
				echo '{"state": false, "message": "修改失败！！"}';
			}
		} else {
			echo '{"state": false, "message": "旧密码不正确！"}';
		}
	  } else {
		echo '{"state": false, "message": "当前操作无效！！"}';
	  }	
 ?>