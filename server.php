<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $housing = $_POST['user-housing'];
    $apartment = $_POST['user-apartment'];
    $floor = $_POST['user-floor'];
    $message = $_POST['message'];
    $pay = $_POST['options'];

    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $housing . '</li>
            <li>Квартира: ' . $apartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $message . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <testformsite2@gmail.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = new PHPMailer(true);
    //Server settings
    $mail->isSMTP(); 
    $mail->Host = 'smtp.gmail.com';  
    $mail->SMTPAuth = true;   
    $mail->Username = 'testformsite2@gmail.com'; 
    $mail->Password = '02223476608';  
    $mail->SMTPSecure = 'ssl'; 
    $mail->Port = 587;  
    
    //Recipients
    $mail->setFrom('testformsite2@gmail.com', 'Компания вкусных бургеров!'); 
    $mail->addAddress('23.03@i.ua');     
    $mail->CharSet = 'Utf-8'; 
    
    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>