<?php

// Replace this with your own email address
$to = 'vishnuayurvedacollege@yahoo.in';

function url() {
    return sprintf(
        "%s://%s",
        isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
        $_SERVER['SERVER_NAME']
    );
}

// Function to get the default profile photo URL
function get_default_profile_photo_url() {
    // Customize this link to point to your default profile photo
    $defaultProfilePhoto = '../../img/logo/mobile-logo.png';
    return $defaultProfilePhoto;
}

// Initialize Message
$message = "";

if ($_POST) {
    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $subject = trim(stripslashes($_POST['subject']));
    $contact_message = trim(stripslashes($_POST['message']));

    if ($email == $to) {
        header('Location:../../../Contact?msg=failed');
    }

    if ($subject == '') {
        $subject = "Contact Form Submission";
    }

    // Set Message
    $message .= "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= nl2br(htmlspecialchars($contact_message)); // Use htmlspecialchars for security
    $message .= "<br /> ----- <br /> This email was sent from your site " . url() . " contact form. <br />";
    $message .= '<img src="' . get_default_profile_photo_url() . '" alt="Default Profile Photo" style="max-width: 100%; height: auto;">'; // Add default profile photo
}

// Set From: header
$from =  $name . " <" . $email . ">";

// Email Headers
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// Set mail server settings
ini_set("SMTP", "localhost");
ini_set("smtp_port", 25);

$mail = mail($to, $subject, $message, $headers);

if ($mail) {
    header('Location:../../../Contact?msg=success');
} else {
    echo "Something went wrong. Please try again.";
}
?>
