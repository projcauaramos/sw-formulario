<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "banco_cadastro";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($connect->conncet_error) {
    die("Conexão falhou: " . $conn->connect_error); 
}

echo "Conexão bem-sucedida!";
?>