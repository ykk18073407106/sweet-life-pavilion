/*====================================短信验证、注册跳转================================*/
// 点击短信验证码登录
$(".colorF").on("click", function () {
    $("#passForm").css("display", "none");
    $("#msgForm").css("display", "block")

});

// 点击账号密码登录
$(".floatLl").on("click", function () {
    $("#msgForm").css("display", "none");
    $("#passForm").css("display", "block")

});


// 点击去注册跳转页面
$(".register").on("click", function () {
    window.location.href = "register.html"
});

// 点击忘记密码跳转页面：
$(".forget").on("click", function () {
    window.location.href = "passpore.html"
});

// 电话号码框的正则表达式
$("#telphone").on("blur", function () {
    var telphone = document.getElementById("telphone").value;
    var reg = /^[0-9]{11}$/;
    if (reg.test(telphone) == false) {
        document.getElementById("append").innerHTML = "请输入正确的电话号码";
    }
});


$("#msg").on("focus", function () {
    var telphone = document.getElementById("telphone").value;
    if (telphone == "") {
        document.getElementById("append").innerHTML = "请输入正确的电话号码";
    }

});


/*====================================登录================================*/
//用户名,密码
var username = 123;
var password = 123;
$(function () {
    var $username;
    var $password;
    $("#passForm button").on("click", function () {
        $username = $("#passForm .admin").eq(0).val();
        $password = $("#passForm .admin").eq(1).val();
        if ($username == 123 && $password == 123) {
            $("#passForm .textAndPwd-prompt p").text("");
            $("#passForm .textAndPwd-prompt").css("opacity", "0");

            //调用模态框提示函数
            textAndPwd_prompt_model();
        }
        if ($username === "" && $password === "") {
            $("#passForm .textAndPwd-prompt p").text("用户名不能为空");
            $("#passForm .textAndPwd-prompt").css("opacity", "1");
        } else if ($username === "" && $password != "") {
            $("#passForm .textAndPwd-prompt p").text("用户名不能为空");
            $("#passForm .textAndPwd-prompt").css("opacity", "1");
        } else if ($username != "" && $password === "") {
            $("#passForm .textAndPwd-prompt p").text("密码不能为空");
            $("#passForm .textAndPwd-prompt").css("opacity", "1");
        } else if ($username != 123 && $password != 123) {
            $("#passForm .textAndPwd-prompt p").text("账号或密码不正确");
            $("#passForm .textAndPwd-prompt").css("opacity", "1");
        }
    });

    //获取焦点 提示消失
    $("#passForm .admin").each(function (index, element) {
        $(element).focus(function () {
            $("#passForm .textAndPwd-prompt").css("opacity", "0");
        })
    });

    //模态框提示函数
    function textAndPwd_prompt_model() {
        var contentText = "<p>登录成功!</p>\n" +
            "<p>系统即将跳转到登录前页面</p>";//传入内容content部分
        var confirm = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        var cancel = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        popupDiv(contentText, confirm, cancel, 120, 60);//方法传入值popupDiv[0]是点击触发按钮，后参接上即可。

        $("#pop-div").css({
            backgroundColor: "#6f5343",
            padding: "20px",
            textAlign: "center",
        });
        $("#pop-div p").css({
            fontSize: "14px",
            color: "#fff",
        });
        $("#pop-div p:first-child").css({
            marginTop: "8px"
        });

        //提示模态框1s后消失，并返回之前的页面
        setTimeout(function () {
            hideDiv("pop-div");
            window.open("success-home-page.html")
        }, 1000);
    }
});




