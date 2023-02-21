<?php
require_once 'functions.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE');


try {
    $route = $_GET['page'];

    switch($_GET['method']) {

        case 'GET' :{
            $data = getData($_GET);
            break;
        }

        case 'POST': {
            $data = postData($_GET);
            break;
        }

        case 'OPTIONS': {
            $data = ['auth' => true];
        }
    }

    if (empty($data)) {
        http_response_code(404);
        exit('Not found');
    }

} catch (Exception $error) {
    http_response_code(500);
    exit('Internal server error');
}
