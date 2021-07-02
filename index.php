<?php

$BASE_URL = 'http://localhost:8000/';
function base_url ($append) {
    return rtrim($GLOBALS['BASE_URL'], '/') . '/' . ltrim($append, '/');
}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>No Code by Rachit Dua</title>
        <meta name="description" content="No code replica created by Rachit Dua">

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="<?= base_url('/static/img/favicons/favicon.ico') ?>">
        <link rel="icon" type="image/png" sizes="32x32" href="<?= base_url('/static/img/favicons/favicon-32x32.png') ?>">
        <link rel="icon" type="image/png" sizes="16x16" href="<?= base_url('/static/img/favicons/favicon-16x16.png') ?>">
        <link rel="apple-touch-icon" sizes="180x180" href="<?= base_url('/static/img/favicons/apple-touch-icon.png') ?>">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

        <!-- CSS -->
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" href="<?= base_url('/static/css/main.css') ?>">

    </head>
    <body>
        <div id="react-root"></div>
        <script type="application/javascript">
            window.BASE_URL = '<?= $BASE_URL; ?>'
        </script>
        <script src="<?= base_url('/static/js/build/no-code.js') ?>" type="application/javascript"></script>
    </body>
</html>
