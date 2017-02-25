<?php
    include "common.php";
    $id=$_POST["id"];
    $checkspl="select *from productslist where id='$id';";
	$result=query($checkspl,"productslist");
	if(count($result)>0){
		$delete="delete from productslist where id='$id';";
	    if(excute($delete,'productslist')){
	    	echo '{"state":true}';
	    }else{
	    	echo '{"state":false,"delete":"删除失败"}';
	    }
}else{
		echo '{"state":false,"delete":"查询不到数据"}';
	}
?>