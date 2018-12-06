<?php
	header("Content-Type:text/plain");
	eacho <<<EOF
Name:{$_POST['user-name']}
Email:{$_POST['user-email']}
EOF;
?>