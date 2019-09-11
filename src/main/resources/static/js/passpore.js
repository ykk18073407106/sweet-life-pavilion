$("#telPhone").on("click",function () {
        $("#email").css("display","none");
        $("#phone").css("display","block");
});


// 点击邮箱进行邮箱验证
$("#emailClick").on("click",function () {
    $("#phone").css("display","none");
    $("#email").css("display","block")

});


// $("telPhone").