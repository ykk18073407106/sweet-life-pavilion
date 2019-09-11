//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/yxl-22.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/yxl-18.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/yxl-19.jpg");
});
$(".img4").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/yxl-20.jpg");
});
//设置不同磅数显示不同内容
$(".bt1").click(function () {
    $(".sec2-tl img").attr("src","../images/yxl-23.png");

});
$(".bt2").click(function () {
    $(".sec2-tl img").attr("src","../images/yxl-24.png");
    $(".people span").text("适合7-8人分享");
    $(".tool span").text("含10套餐具");
    $(".price span:nth-of-type(1)").text("¥298.00");
    $(".price span:nth-of-type(2)").text("/2.0磅");
});
$(".bt3").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-107.jpg");
    $(".people span").text("适合11-12人分享");
    $(".tool span").text("含15套餐具");
    $(".price span:nth-of-type(1)").text("¥458.00");
    $(".price span:nth-of-type(2)").text("/3.0磅");
});
$(function () {
    $(".mid button:nth-of-type(2)").css({
        outline:"1px solid #684029",
    }).children().css("display","block");
    $(".mid button:nth-of-type(3)").css({
        outline:"1px solid #e7e0dd",
    }).children().css("display","none");
})
$(".mid button").click(function () {
    //把价格导入顶部导航栏
    var h=$(".price span:nth-of-type(1)").text();
    var k=$(".price span:nth-of-type(2)").text();
// if()
    $(".daohangRight span").text(h+k);
})
