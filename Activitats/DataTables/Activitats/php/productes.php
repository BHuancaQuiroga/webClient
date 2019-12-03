<?php

$preus = array("750", "465", "800", "160");

switch ($_REQUEST['ref']) {
	case 'XZM568':
		echo $preus[0];
		break;
	case 'KUO995':
		echo $preus[1];
		break;
	case 'UJF012':
		echo $preus[2];
		break;
	case 'FNC123':
		echo $preus[3];
		break;
	default:
		echo "Error, something went wrong.";
		break;
}

?>