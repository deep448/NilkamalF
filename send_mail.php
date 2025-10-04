<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to      = "ittzdeep231@gmail.com"; // Your email
    $subject = "New Contact Form Message from $name";
    $body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<div class='success'>Thank you $name, your message has been sent successfully!</div>";
    } else {
        echo "<div class='error'>Sorry, your message could not be sent. Please try again later.</div>";
    }
}
?>
