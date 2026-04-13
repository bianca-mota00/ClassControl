<?php require_once 'conexao.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>TCC PHP</title>
</head>
<body>
    <h2>Cadastrar Usuário</h2>
    <form action="cadastro.php" method="POST">
        Nome: <input type="text" name="nome" required><br>
        Email: <input type="email" name="email" required><br>
        <button type="submit">Cadastrar</button>
    </form>

    <h2>Usuários Cadastrados</h2>
    <?php
    $stmt = $pdo->query("SELECT * FROM usuarios");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo $row['nome'] . " - " . $row['email'] . "<br>";
    }
    ?>
</body>
</html>
