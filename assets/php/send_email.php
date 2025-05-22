<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Simple validation
    if (empty($name) || empty($email) || empty($message)) {
        echo "Por favor, llena todos los campos."; // Return a message if fields are empty
        exit;
    }

    // Email to send to
    $to = "barbsmok@gmail.com";  // Replace with your email address
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $name\nEmail: $email\n\nMensaje:\n$message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje, te responderemos pronto.";
    } else {
        echo "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.";
    }
}
?>
