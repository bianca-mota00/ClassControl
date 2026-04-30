<?php
$host = 'localhost';
$db   = 'sistema_tcc';
$user = 'root'; // Padrão do XAMPP
$pass = '';     // Padrão do XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
}
?>
