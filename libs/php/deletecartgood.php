<?php
    include "common.php";
    $id=$_POST["id"];
    $checkspl="select *from usercart where id='$id';";
	$result=query($checkspl,"usercart");
	if(count($result)>0){
		$delete="delete from usercart where id='$id';";
	    if(excute($delete,'usercart')){
	    	echo '{"state":true}';
	    }else{
	    	echo '{"state":false,"delete":"删除失败"}';
	    }
}else{
		echo '{"state":false,"delete":"查询不到数据"}';
	}
?>