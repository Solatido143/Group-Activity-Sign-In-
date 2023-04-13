<?php

require_once './connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = sanitize_data($_POST["username"]);
    $password = sanitize_data($_POST["password"]);
    $error = [];

    if (empty($username)) {
        array_push($error, "Username is required");
    }
    if (empty($password)) {
        array_push($error, "Password is required");
    }
    if (count($error) == 0) {
        $sql = 'SELECT name FROM users WHERE username=? AND password=?';
        if ($stmt = mysqli_prepare($conn, $sql)){
            mysqli_stmt_bind_param($stmt, 'ss', $username, $password);
            if (mysqli_stmt_execute($stmt)) {
                mysqli_stmt_store_result($stmt);

                if (mysqli_stmt_num_rows($stmt) > 0) {
                    mysqli_stmt_bind_result($stmt, $name);
                    if (mysqli_stmt_fetch($stmt)) {
                        echo $name;
                    }
                    
                }
                else {
                    array_push($error, "Wrong username or password.");
                }
            }
        }
    }
    echo json_encode($error);
}
    


function sanitize_data($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlentities($data);
    return $data;
}
