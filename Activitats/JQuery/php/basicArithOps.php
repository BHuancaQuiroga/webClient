<?php

$symbol = $_REQUEST['symbol'];


switch ($symbol) {
	case '1':
		$sum = $_REQUEST['op1']+$_REQUEST['op2'];
		echo $sum;
		break;
	case '2':
		$rest = $_REQUEST['op3']-$_REQUEST['op4'];
		echo $rest;
		break;
	case '3':
		$mul = $_REQUEST['op5']*$_REQUEST['op6'];
		echo $mul;
		break;
	case '4':
		$div = $_REQUEST['op7']/$_REQUEST['op8'];
		echo $div;
		break;
	default:
		echo "Error";
		break;
}
?>