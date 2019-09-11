// ==============================第一部分===========================
//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-170.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-171.jpg");
});
// ==============================第二部分=========================
//设置不同磅数显示不同内容
$(".bt1").click(function () {
    $(".size span").text("12x12cm");
    $(".time span").text("最早今天 14:30配送");
});
$(".bt2").click(function () {
    $(".size span").text("15x15cm");
    $(".time span").text("最早今天 14:30配送");
});
$(".bt3").click(function () {
    $(".size span").text("16x16cm");
    $(".time span").text("最早今天 14:30配送");
});
$(".bt4").click(function () {
    $(".size span").text("22x22cm");
    $(".time span").text("最早今天 14:30配送");
});
$(".bt5").click(function () {
    $(".size span").text("28x28cm");
    $(".time span").text("最早今天 14:30配送");
});

