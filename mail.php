<?php
$mail=$_POST['email'];
$sujet=$_POST['sujet'];
$message=$_POST['message'];

mail($email,$sujet,$message);
echo json_encode(['success'=>true]);