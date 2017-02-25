<?php
    include "common.php";
    $id=$_POST["id"];
    $checkspl="select *from members where indexid='$id';";
	$result=query($checkspl,"members");
	if(count($result)>0){
		$delete="delete from members where indexid='$id';";
	    if(excute($delete,'members')){
	    	echo '{"state":true}';
	    }else{
	    	echo '{"state":false,"delete":"删除失败"}';
	    }
}else{
		echo '{"state":false,"delete":"查询不到数据"}';
	}
?>