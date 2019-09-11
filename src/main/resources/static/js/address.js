
<!--==============新建地址==========-->
var zhuangtai=1;
function tianjia() {
    var contentText = "<div class=\"add-contents\">\n" +
        "    <h4>添加地址</h4>\n" +
        "    <form action=\"#\">\n" +
        "        <label for=\"\">收货人:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"收货人姓名\">\n" +
        "        <br>\n" +
        "        <label for=\"\">联系方式:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"收货人手机号码\">\n" +
        "        <br>\n" +
        "        <label for=\"\">城市:</label>\n" +
        "        <select name=\"relationship\" id=\"relationship\">\n" +
        "            <option value=\"0\">请选择</option>\n" +
        "            <option value=\"1\">成都</option>\n" +
        "            <option value=\"2\">重庆</option>\n" +
        "            <option value=\"3\">西安</option>\n" +
        "            <option value=\"4\">北京</option>\n" +
        "        </select>\n" +
        "        <br>\n" +
        "        <label for=\"\">位置:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"路名/写字楼/小区\">\n" +
        "        <br>\n" +
        "        <label for=\"\">详细地址:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"楼号/门牌号\">\n" +
        "        <br>\n" +

        "        <input type=\"checkbox\" name=\"message\" id=\"message\">\n"
        + "        <label for=\"\" id=\"swmr2\"> 设为默认地址</label>\n" +
        "        <div class='promptText'></div>\n" +
        "    </form>\n" +
        "</div>";//传入内容content部分
    var confirm = "确认";//按键名字自定义，如果不要按钮传入空值("")即可。
    var cancel = "取消";//按键名字自定义，如果不要按钮传入空值("")即可。
    popupDiv(contentText, confirm, cancel, 500, 510);
    $("<i class=\"iconfont closeDiv\">&#xe628;</i>").appendTo("#pop-div");
    $(".closeDiv").css({
        fontSize: "20px",
        fontWeight: "700",
        color: "#9e9e9e",
        position: "absolute",
        top: "12px",
        right: "12px",
        cursor: "pointer"
    });
    $(".closeDiv").click(function () {
        hideDiv("pop-div");
    });
    $("#pop-div").css({
        padding: "110px",
        border: "4px solid rgba(0,0,0,0.16)"
    });

    $(".add-contents h4").css({
        position: "absolute",
        top: "12px",
        left: "12px",
        color: "#b3b3b3",
        fontSize: "13px"
    });

    $(".add-contents label").css({
        display: "inline-block",
        width: "60px",
        color: "#684029",
        fontSize: "13px",
        textAlign: "right"
    });
    $(".add-contents #important_day").css({
        width: "285px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "40px",
        outline: "none"
    });

    $(".add-contents #relationship").css({
        width: "285px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "20px",
        outline: "none",
        opacity: "0.9"
    });
    $(".add-contents #date").css({
        width: "281px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "53px",
        outline: "none"
    });
    $(".add-contents #tel").css({
        width: "281px",
        height: "30px",
        marginLeft: "20px",
        marginBottom: "20px",
        outline: "none",
        opacity: "0.8"
    });

    $(".add-contents #message").css({
        width: "20px",
        height: "20px",
        marginLeft: "26px",
        verticalAlign: "middle"
    });
    $("#confirm").css({
        width: "130px",
        height: "40px",
        borderRadius: "0",
        backgroundColor: "#442818",
        marginTop: "30px",
        float: "right",
        marginRight:"21px"
    });
    $("#cancel").css({
        width: "130px",
        height: "40px",
        borderRadius: "0",
        border: "1px solid #e1e1e1",
        float: "right",
        marginRight: "27px",
        marginTop: "30px"

    });

    $(".promptText").css({
        color: "#FF714D",
        paddingLeft: "180px",
        fontSize: "13px"
    });
    $("#swmr2").css({
        width: "100px",
        textAlign: "center"
    })
    $("#message").css({
        marginLeft: "85px"
    })


    /*自定义1*/
    $(".important_day2").css({
        position: "absolute",
        height: "26px",
        width: "281px",
        right: "121px",
        top: "120px",
        outline: "none",
        display: "none"
    });
    $(".quXiao").css({
        position: "absolute",
        height: "18px",
        width: "35px",
        right: "126px",
        top: "125px",
        border: "1px solid #e1e1e1",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer",
        display: "none"
    });

    /*自定义2*/
    $(".relationship2").css({
        position: "absolute",
        height: "26px",
        width: "281px",
        right: "121px",
        top: "170px",
        outline: "none",
        display: "none"
    });
    $(".quXiao2").css({
        position: "absolute",
        height: "18px",
        width: "35px",
        right: "126px",
        top: "175px",
        border: "1px solid #e1e1e1",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer",
        display: "none"
    });
}
//=================================编辑地址============================================
function bianj() {
    var contentText = "<div class=\"add-contents\">\n" +
        "    <h4>编辑地址</h4>\n" +
        "    <form action=\"#\">\n" +
        "        <label for=\"\">收货人:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"收货人姓名\" class=\"name1\">\n" +
        "        <br>\n" +
        "        <label for=\"\">联系方式:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"收货人手机号码\" class=\"num1\">\n" +
        "        <br>\n" +
        "        <label for=\"\">城市:</label>\n" +
        "        <select name=\"relationship\" id=\"relationship\">\n" +
        "            <option value=\"0\">请选择</option>\n" +
        "            <option value=\"1\">成都市</option>\n" +
        "            <option value=\"2\">重庆市</option>\n" +
        "            <option value=\"3\">西安市</option>\n" +
        "            <option value=\"4\">北京市</option>\n" +
        "        </select>\n" +
        "        <br>\n" +
        "        <label for=\"\">位置:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"路名/写字楼/小区\" class=\"wz1\">\n" +
        "        <br>\n" +
        "        <label for=\"\">详细地址:</label>\n" +
        "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"楼号/门牌号\" class=\"lh2\">\n" +
        "        <br>\n" +

        "        <input type=\"checkbox\" name=\"message\" id=\"message\">\n"
        + "        <label for=\"\" id=\"swmr2\"> 设为默认地址</label>\n" +
        "        <div class='promptText'></div>\n" +
        "    </form>\n" +
        "</div>";//传入内容content部分
    var confirm = "确认";//按键名字自定义，如果不要按钮传入空值("")即可。
    var cancel = "取消";//按键名字自定义，如果不要按钮传入空值("")即可。
    popupDiv(contentText, confirm, cancel, 500, 510);
    $("<i class=\"iconfont closeDiv\">&#xe628;</i>").appendTo("#pop-div");
    $(".closeDiv").css({
        fontSize: "20px",
        fontWeight: "700",
        color: "#9e9e9e",
        position: "absolute",
        top: "12px",
        right: "12px",
        cursor: "pointer"
    });
    $(".closeDiv").click(function () {
        hideDiv("pop-div");
    });
    $("#pop-div").css({
        padding: "110px",
        border: "4px solid rgba(0,0,0,0.16)"
    });

    $(".add-contents h4").css({
        position: "absolute",
        top: "12px",
        left: "12px",
        color: "#b3b3b3",
        fontSize: "13px"
    });

    $(".add-contents label").css({
        display: "inline-block",
        width: "60px",
        color: "#684029",
        fontSize: "13px",
        textAlign: "right"
    });
    $(".add-contents #important_day").css({
        width: "285px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "40px",
        outline: "none"
    });

    $(".add-contents #relationship").css({
        width: "285px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "20px",
        outline: "none",
        opacity: "0.9"
    });
    $(".add-contents #date").css({
        width: "281px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "53px",
        outline: "none"
    });
    $(".add-contents #tel").css({
        width: "281px",
        height: "30px",
        marginLeft: "20px",
        marginBottom: "20px",
        outline: "none",
        opacity: "0.8"
    });

    $(".add-contents #message").css({
        width: "20px",
        height: "20px",
        marginLeft: "26px",
        verticalAlign: "middle"
    });
    $("#confirm").css({
        width: "130px",
        height: "40px",
        borderRadius: "0",
        backgroundColor: "#442818",
        marginTop: "30px",
        float: "right",
        marginRight:"21px"
    });
    $("#cancel").css({
        width: "130px",
        height: "40px",
        borderRadius: "0",
        border: "1px solid #e1e1e1",
        float: "right",
        marginRight: "27px",
        marginTop: "30px"

    });

    $(".promptText").css({
        color: "#FF714D",
        paddingLeft: "180px",
        fontSize: "13px"
    });
    $("#swmr2").css({
        width: "100px",
        textAlign: "center"
    })
    $("#message").css({
        marginLeft: "85px"
    })


    /*自定义1*/
    $(".important_day2").css({
        position: "absolute",
        height: "26px",
        width: "281px",
        right: "121px",
        top: "120px",
        outline: "none",
        display: "none"
    });
    $(".quXiao").css({
        position: "absolute",
        height: "18px",
        width: "35px",
        right: "126px",
        top: "125px",
        border: "1px solid #e1e1e1",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer",
        display: "none"
    });

    /*自定义2*/
    $(".relationship2").css({
        position: "absolute",
        height: "26px",
        width: "281px",
        right: "121px",
        top: "170px",
        outline: "none",
        display: "none"
    });
    $(".quXiao2").css({
        position: "absolute",
        height: "18px",
        width: "35px",
        right: "126px",
        top: "175px",
        border: "1px solid #e1e1e1",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer",
        display: "none"
    });
    var xingM=$(".xingM").text();
    console.log(xingM);
    var Xxdz1=$(".Xxdz1").text();
    console.log(Xxdz1);
    var Xxdz2=$(".Xxdz2").text();
    console.log(Xxdz2);
    var Xxdz3=$(".Xxdz3").text();
    console.log(Xxdz3);
    // var Xxdz=$(".Xxdz").text();
    // console.log(Xxdz);
    var phone=$(".phone").text();
    console.log(phone);
    $(".name1").val(xingM);
    $(".num1").val(phone);
    // $(".").val(xingM);
    $(".wz1").val(Xxdz2);
    $(".lh2").val(Xxdz3);
    // $(".name1").val(xingM);
}
//删除提示
function scpd() {
    var contentText = "<div class=\"add-contents\">\n" +
        "    <p>确认要删除？</p>\n" +
        "</div>";//传入内容content部分
    var confirm = "确认";//按键名字自定义，如果不要按钮传入空值("")即可。
    var cancel = "取消";//按键名字自定义，如果不要按钮传入空值("")即可。
    popupDiv(contentText, confirm, cancel,218, 118);
    // $("<i class=\"iconfont closeDiv\">&#xe628;</i>").appendTo("#pop-div");
    $(".closeDiv").css({
        fontSize: "20px",
        fontWeight: "700",
        color: "#9e9e9e",
        position: "absolute",
        top: "12px",
        right: "12px",
        cursor: "pointer"
    });
    $(".closeDiv").click(function () {
        hideDiv("pop-div");
    });
    $("#pop-div").css({
        // padding: "120px",
        // border: "4px solid rgba(0,0,0,0.16)"
    });

    $(".add-contents p").css({
        position: "absolute",
        top: "40px",
        left: "120px",
        color: "#442818",
        fontSize: "20px"
    });

    $(".add-contents label").css({
        display: "inline-block",
        width: "60px",
        color: "#684029",
        fontSize: "13px",
        textAlign: "right"
    });
    $(".add-contents #important_day").css({
        width: "285px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "40px",
        outline: "none"
    });

    $(".add-contents #relationship").css({
        width: "285px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "20px",
        outline: "none",
        opacity: "0.9"
    });
    $(".add-contents #date").css({
        width: "281px",
        height: "30px",
        marginBottom: "20px",
        marginLeft: "53px",
        outline: "none"
    });
    $(".add-contents #tel").css({
        width: "281px",
        height: "30px",
        marginLeft: "20px",
        marginBottom: "20px",
        outline: "none",
        opacity: "0.8"
    });

    $(".add-contents #message").css({
        width: "20px",
        height: "20px",
        marginLeft: "26px",
        verticalAlign: "middle"
    });
    $("#confirm").css({
        width: "110px",
        height: "40px",
        borderRadius: "0",
        backgroundColor: "#442818",
        marginTop: "80px",
        float: "right",
        marginRight:"0px"
    });
    $("#cancel").css({
        width: "110px",
        height: "40px",
        borderRadius: "0",
        border: "1px solid #e1e1e1",
        float: "right",
        marginRight: "140px",
        marginTop: "-40px"

    });

    $(".promptText").css({
        color: "#FF714D",
        paddingLeft: "180px",
        fontSize: "13px"
    });
    $("#swmr2").css({
        width: "100px",
        textAlign: "center"
    })
    $("#message").css({
        marginLeft: "85px"
    })


    /*自定义1*/
    $(".important_day2").css({
        position: "absolute",
        height: "26px",
        width: "281px",
        right: "121px",
        top: "120px",
        outline: "none",
        display: "none"
    });
    $(".quXiao").css({
        position: "absolute",
        height: "18px",
        width: "35px",
        right: "126px",
        top: "125px",
        border: "1px solid #e1e1e1",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer",
        display: "none"
    });

    /*自定义2*/
    $(".relationship2").css({
        position: "absolute",
        height: "26px",
        width: "281px",
        right: "121px",
        top: "170px",
        outline: "none",
        display: "none"
    });
    $(".quXiao2").css({
        position: "absolute",
        height: "18px",
        width: "35px",
        right: "126px",
        top: "175px",
        border: "1px solid #e1e1e1",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        cursor: "pointer",
        display: "none"
    });
    var xingM=$(".xingM").text();
    console.log(xingM);
    var Xxdz1=$(".Xxdz1").text();
    console.log(Xxdz1);
    var Xxdz2=$(".Xxdz2").text();
    console.log(Xxdz2);
    var Xxdz3=$(".Xxdz3").text();
    console.log(Xxdz3);
    // var Xxdz=$(".Xxdz").text();
    // console.log(Xxdz);
    var phone=$(".phone").text();
    console.log(phone);
    $(".name1").val(xingM);
    $(".num1").val(phone);
    // $(".").val(xingM);
    $(".wz1").val(Xxdz2);
    $(".lh2").val(Xxdz3);
    // $(".name1").val(xingM);
}
$(".plsc").click(function () {

    $(".Dx").css({
        opacity:"1"
    })
    $(".zCz2").css({
        display:"block"
    })
    $(".zdc1").css({
        display:"block"
    })
    zhuangtai=2
})
$(".qqxx").click(function() {
    $(".Dx").css({
        opacity:"0"
    })
    $(".zCz2").css({
        display:"none"
    })
    $(".zdc1").css({
        display:"none"
    })
    $(".Dx").checked=false;
    zhuangtai=1
})
if ($(".Dx").prop("checked")||zhuangtai==1){
    $(".zdc1").css({
        display:"none"
    })
}else if (zhuangtai==2||$(".Dx").checked==false) {
    $(".zdc1").css({
        display:"block"
    })
}


