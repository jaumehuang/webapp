
<?php
     include "common.php";
	 $id = $_POST["id"];
     $sql = "select * from usercart where id ='$id'";
	 // $checkspl="select * from student where account='$account'and password='$pwd';";
	 $result = query($sql,'usercart');
	 // $update = "update student set password = '$pwd' where account = '$account'";
	 // excute($update);
	 	if($result){
			echo json_encode($result, JSON_UNESCAPED_UNICODE);
	   }else{
			echo '{massge:"搜索不到商品"}';
	   }
 ?>