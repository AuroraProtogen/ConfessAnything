<?php
$webhookUrl = 'https://discord.com/api/webhooks/1380684891208814723/IlWMOhGC_jrFIL3Bj3Rfyzb1ibG_jTR5lTyt3eumJOuYJPlgChNfOFh10kPOwk-CZ3fB';
// Yeah... setting the webhook url here isn't peak...

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['confession'])) {
    $confession = trim($_POST['confession']);

    if (!empty($confession)) {
        $data = [
            "content" => $confession
        ];

        $jsonData = json_encode($data);

        $ch = curl_init($webhookUrl);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $response = curl_exec($ch);
        curl_close($ch);

        header("Location: index.html");
        exit;
    }
}
?>
