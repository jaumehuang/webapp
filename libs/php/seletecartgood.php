
<?php
     include "common.php";
	 $id = $_POST["id"];
	 $number=$_POST["number"];
     $sql = "select * from usercart where id ='$id'";
	 // $checkspl="select * from student where account='$account'and password='$pwd';";
	 $result = query($sql,'usercart');
	 // $update = "update student set password = '$pwd' where account = '$account'";
	 // excute($update);
	 	if(count($result) > 0){
			//执行修改操作
		if($result[0]->id==$id){	
			$update = "update usercart set numbers ='$number' where id='$id'";
			if(excute($update,'usercart')){
				echo '{"state": true}';
			} else {
				echo '{"state": false, "message": "修改失败！！"}';
			}
		}else {
			echo '{"state": false, "message": "img不正确！"}';
		}	
	  } else {
		echo '{"state": false, "message": "当前操作无效！！"}';
	  }	
 ?>