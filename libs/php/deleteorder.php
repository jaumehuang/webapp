<?php
    include "common.php";
    $id=$_POST["id"];
    $checkspl="select *from orderlist where id='$id';";
	$result=query($checkspl,"order");
	if(count($result)>0){
		$delete="delete from orderlist where id='$id';";
	    if(excute($delete,'order')){
	    	echo '{"state":true}';
	    }else{
	    	echo '{"state":false,"delete":"删除失败"}';
	    }
}else{
		echo '{"state":false,"delete":"查询不到数据"}';
	}
?>