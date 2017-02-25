<?php
    session_start();
    if(isset($_SESSION['account'])){
        echo '{"state": true, "account": "' . $_SESSION["account"] . '"}';
    } else {
        echo '{"state":false}';
    }
?>