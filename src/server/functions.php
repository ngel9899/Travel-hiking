<?php
include_once "server.php";

function getData($params = [])
{
    if (!empty($params['request']) ){
        $request = $params['request'];
    }
    $link = connect();
    $arr = [[]];
    if ($request == 'imgTours') {
        $select = 'SELECT imagepath, category_id from images';
        $res = mysqli_query($link, $select);
        while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
            $arr[$row['category_id']-1][] = $row['imagepath'];
        }
    }
    if ($request == 'tours') {
        $select = 'SELECT link, description, images_id, name, location, price from tours';
        $res = mysqli_query($link, $select);
        while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
            $arr[$row['images_id']-1]['name'] = $row['name'];
            $arr[$row['images_id']-1]['location'] = $row['location'];
            $arr[$row['images_id']-1]['price'] = $row['price'];
            $arr[$row['images_id']-1]['description'] = $row['description'];
            $arr[$row['images_id']-1]['link'] = $row['link'];
        }
    }
        $data = json_encode($arr, true);
        echo $data;
        return $data;
}

function postData($params = []){
    if (!empty($params['request']) ){
        $request = $params['request'];
    }
    $link = connect();
    if ($request == 'tours-page'){
        $select = 'INSERT INTO clients (name, phone, tour) values ("'.$_POST['name'].'", "'.$_POST['phone'].'", "'.$_POST['tour'].'")';
        mysqli_query($link, $select);

    }
    if ($request == 'email' and $_POST['email'] != ""){
        $select = 'INSERT INTO email (email) values ("'.$_POST['email'].'")';
        mysqli_query($link, $select);
    }
    print_r($_POST);
    return $_POST;
}