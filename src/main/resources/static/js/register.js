// date框的类型转换
$("#dateBirth").on("focus",function () {
    $("#dateBirth").attr("type","date")

}).on("blur",function () {
    $("#dateBirth").attr("type","")
});


// 电话号码框的正则表达式
$("#telphone").on("blur",function () {
    var telphone=document.getElementById("telphone").value;
    var reg=/^[0-9]{11}$/;
    if(reg.test(telphone)==false){
        console.log("错误")
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }
});



// 第一个密码的正则表达式
$("#password").on("focus",function () {
    var telphone=document.getElementById("telphone").value;
    var surePassword=document.getElementById("surePassword").value;

    if (telphone==""){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }


}).on("blur",function () {
    var telphone=document.getElementById("password").value;
    var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;

    if(reg.test(telphone)==false){
        document.getElementById("append").innerHTML="密码由6~20位字符,须同时包含英文和数字";
    }
});



// 第二个密码框的确认密码一致
$("#surePassword").on("blur",function (e) {
    var telphone=document.getElementById("password").value;
    var surePassword=document.getElementById("surePassword").value;
    if (surePassword=="") {
        document.getElementById("append").innerHTML="密码由6~20位字符,须同时包含英文和数字";
    }
    if (telphone!=surePassword){
        document.getElementById("append").innerHTML="两次密码输入不一致";
    }
    if (e.relatedTarget==document.getElementById("password")) {
        if (surePassword=="") {
            document.getElementById("append").innerHTML="密码由6~20位字符,须同时包含英文和数字";
        }

    }
});

