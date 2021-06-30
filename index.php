<?php

$BASE_URL = 'http://localhost/no-code/';
function base_url ($append) {
    return rtrim($GLOBALS['BASE_URL'], '/') . '/' . ltrim($append, '/');
}

?>

<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <script src="<?= base_url('/static/js/build/no-code.js') ?>" type="application/javascript"></script>
    </body>
</html>
