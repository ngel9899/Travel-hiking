<? include_once "server.php"; $link = connect();

//Предварительно необходимо создать базу данных - travels"

$ct1 = 'create table clients(id int not null auto_increment primary key,
    name varchar(255),
    phone varchar(20),
    tour varchar(255) unique) default charset="utf8"';
$ct2 = 'create table email(id int not null auto_increment primary key,
    email varchar(255) unique) default charset="utf8"';
$ct3 = 'create table images(
    id int not null auto_increment primary key,
    imagepath varchar(64),
    category_id int, foreign key (category_id) references tours(id) on delete cascade,
    ) default charset="utf8"';
$ct4 = 'create table tours(
    id int not null auto_increment primary key,
    images_id  varchar (255), foreign key (images_id) references images(category_id) on delete cascade,
    name varchar(255),
    location varchar(255),
    price varchar(255),  
    description varchar(1000),
    data int,
    link varchar(255)
  )  default charset="utf8"';

mysqli_query($link, $ct1);
$err = mysqli_errno($link);
if ($err) {
    echo 'Error code countries:' . $err . '<br>';
    exit();
}
mysqli_query($link, $ct2);
$err = mysqli_errno($link);
if ($err) {
    echo "Error code cities:" . $err . '<br>';
    exit();
}
mysqli_query($link, $ct3);
$err = mysqli_errno($link);
if ($err) {
    echo "Error code hotels:" . $err . '<br>';
    exit();
}
mysqli_query($link, $ct4);
$err = mysqli_errno($link);
if ($err) {
    echo "Error code images:" . $err . '<br>';
    exit();
}