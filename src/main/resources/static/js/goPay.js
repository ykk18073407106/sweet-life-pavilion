/**
 * Created by lsdn on 2018/11/5.
 */
$(".select-coupons-title .active1").click(function () {
    $(".use-coupons").css({
        "display": "none",
    });
    $(".add-coupons").css({
        "display": "block",
    });
    $(".select-coupons-title .active1").css({
        "border": "1px solid #e1e1e1",
        "borderBottom": "1px solid #fafafa",
        "color": "#80695b"
    });
    $(".select-coupons-title .active").css({
        "border": "none"
    })
});

$(".select-coupons-title .active").click(function () {
    $(".use-coupons").css({
        "display": "block",
    });
    $(".add-coupons").css({
        "display": "none",
    });
    $(".select-coupons-title .active").css({
        "border": "1px solid #e1e1e1",
        "borderBottom": "1px solid #fafafa",
        "color": "#80695b"
    });
    $(".select-coupons-title .active1").css({
        "border": "none"
    })
});

$(".fruit-coin span").click(function () {
    if ($(".fruit-coin-show").is(":hidden")) {
        $(".fruit-coin-show").show()
    } else {
        $(".fruit-coin-show").hide()
    }

    $(".fruit-coin span").css({
        "backgroundPosition": "-152px -102px"
    });
    $(".fruit-coin span").attr("class", "minus");
    $(".fruit-coin .minus").click(function () {


        $(".fruit-coin span").css({
            "backgroundPosition": "-172px -96px"
        });
        $(".fruit-coin .minus").removeClass("minus");
    });
});

$(".behalf-gold span").click(function () {
    if ($(".behalf-gold-show").is(":hidden")) {
        $(".behalf-gold-show").show()
    } else {
        $(".behalf-gold-show").hide()
    }

    $(".behalf-gold span").css({
        "backgroundPosition": "-152px -102px"
    });
    $(".behalf-gold span").attr("class", "minus");
    $(".behalf-gold .minus").click(function () {


        $(".behalf-gold span").css({
            "backgroundPosition": "-172px -96px"
        });
        $(".behalf-gold .minus").removeClass("minus");
    });
});

$('#input-invoice').change(function () {
    var isChecked = $('#input-invoice').is(":checked");
    if (isChecked == true) {
        console.log(2222)
        $(".invoice-show").css({
            "display": "block"
        });
    }
    else {
        $(".invoice-show").css({
            "display": "none"
        });
    }
});


/*添加地址模态框*/
$(function () {
    var contentText = "<div class=\"add-contents\">\n" +
        "    <h4>添加地址</h4>\n" +
        "    <form action=\"#\">\n" +
        "        <label for=\"\">收货人:</label>\n" +
        "         <input type='text' name='receiver' id=\"receiver\" class=\"receiver\" placeholder =\"收货人姓名\">\n" +
        "        <br>\n" +
        "        <label for=\"\">联系方式:</label>\n" +
        "        <input type='text' name='phoneNumber' id=\"phoneNumber\" class=\"phoneNumber\" placeholder =\"收货人电话号码\">\n" +
        "        <br>\n" +
        "        <label for=\"\">城市:</label>\n" +
        "        <select name=\"city\" id=\"city\">\n" +
        "            <option value=\"0\">成都</option>\n" +
        "            <option value=\"1\">上海</option>\n" +
        "            <option value=\"2\">西安</option>\n" +
        "            <option value=\"3\">重庆</option>\n" +
        "        </select>\n" +
        "        <br>\n" +
        "        <label for=\"\">位置:</label>\n" +
        "        <input type=\"text\" name=\"address\" id=\"address\" placeholder =\"路号/写字楼/小区\">\n" +
        "        <br>\n" +
        "        <label for=\"\">详细地址:</label>\n" +
        "        <input type=\"text\" name=\"minute_address\" id=\"minute_address\" placeholder =\"楼号/门牌号\">\n" +
        "        <br>\n" +
        "        <input type=\"checkbox\" name=\"default_address\" id=\"default_address\">\n" +
        "        <label for=\"\">设置为默认地址</label>\n" +
        "        <div class='promptText'></div>\n" +
        "    </form>\n" +
        "</div>";//传入内容content部分
    $("#cart-address-button").click(function () {
        f1();

        function f1() {
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
                padding: "80px 120px",
                border: "4px solid rgba(0,0,0,0.16)",
                background: "#fafafa"
            });
            $(".add-contents h4").css({
                position: "absolute",
                top: "12px",
                left: "12px",
                color: "#b3b3b3",
                fontSize: "13px"
            });

            $(".add-contents label").css({
                color: "#b3b3b3",
                fontSize: "13px"
            });
            $(".add-contents #receiver").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "40px",
                outline: "none"
            });
            $(".add-contents #phoneNumber").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "26px",
                outline: "none"
            });
            $(".add-contents #city").css({
                width: "284px",
                height: "36px",
                marginBottom: "20px",
                marginLeft: "52px",
                outline: "none"
            });
            $(".add-contents #address").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "52px",
                outline: "none"
            });
            $(".add-contents #minute_address").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "26px",
                outline: "none"
            });
            $(".add-contents #default_address").css({
                width: "15px",
                height: "15px",
                marginLeft: "85px",
                verticalAlign: "middle"
            });
            $(".add-contents .promptText").css({
                marginTop: "10px"
            });


            $("#confirm").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                backgroundColor: "#442818",
                marginTop: "15px",
                float: "left",
                marginLeft: "60px"
            });
            $("#cancel").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                border: "1px solid #e1e1e1",
                marginRight: "27px",
                float: "left",
                marginTop: "15px",
                marginLeft: "20px"

            });

            $(".promptText").css({
                color: "#FF714D",
                paddingLeft: "180px",
                fontSize: "13px"
            });
            /*=========获取值========*/
        }
        f2();
        $("body").on("click", "#add-address-btn2", function () {
            f1();
            f3();
        });
        // $("body").on("click","#confirm",function () {
        //
        //     console.log($("#confirm"));
        // })
    });
});
$(function () {
    $(".right-pay .go-pay").click(function () {
        //下单结算
        window.open("zhiFuFangShi.html", "_self")
    });
});
var shouHuo, phone, chengShi, weiZhi, diZhi;
/*=======================添加新地址===================*/
function f2() {
    $(".receiver").change(function () {
        shouHuo = $(".receiver").val();
    });
    $(".phoneNumber").change(function () {
        phone = $(".phoneNumber").val();
    });
    $("#city").change(function () {
        chengShi = $("#city option:selected").text();
    });
    $("#address").change(function () {
        weiZhi = ($("#address").val());
    });
    $("#minute_address").change(function () {
        diZhi = $("#minute_address").val();
    });
    $("#confirm").click(function () {
        if ($("#city option:selected").text() == "成都") {
            chengShi = $("#city option:selected").text();
        }
        console.log(shouHuo, phone, chengShi, weiZhi, diZhi);
        $("#address-info-content").prepend("<div class=\"delivery-address2 clearfix\">\n" +
            "                    <!--=============左=================-->\n" +
            "                    <div class=\"left-info2\">\n" +
            "                        <h3>" + shouHuo + "</h3>\n" +
            "                        <span class=\"phone-number2\">\n" +
            "                            <i></i>\n" +
            "                            " + phone + "\n" +
            "                        </span>\n" +
            "                        <span class=\"address2\">\n" +
            "                            <i></i>\n" +
            "                           " + chengShi + "市" + weiZhi + diZhi + "\n" +
            "                        </span>\n" +
            "                    </div>\n" +
            "                    <!--================右===============-->\n" +
            "                    <div class=\"right-button2\" >\n" +
            "                        <a id=\"select-address-btn2\">\n" +
            "                            切换地址(<span>3</span>)\n" +
            "                        </a>\n" +
            "                        <a id=\"add-address-btn2\">\n" +
            "                            +添加新地址\n" +
            "                        </a>\n" +
            "                    </div>\n" +
            "                </div>")

        //选择收货信息
        f4();
        $("#cart-address-button").css({
            display: "none"
        })
        hideDiv("pop-div");

    })
}
/*=======================添加新地址2===================*/
function f3() {
    $(".receiver").change(function () {
        shouHuo = $(".receiver").val();
    });
    $(".phoneNumber").change(function () {
        phone = $(".phoneNumber").val();
    });
    $("#city").change(function () {
        chengShi = $("#city option:selected").text();
    });
    $("#address").change(function () {
        weiZhi = ($("#address").val());
    });
    $("#minute_address").change(function () {
        diZhi = $("#minute_address").val();
    });
    $("#confirm").click(function () {
        if ($("#city option:selected").text() == "成都") {
            chengShi = $("#city option:selected").text();
        }
        // console.log(shouHuo, phone, chengShi, weiZhi, diZhi);
        $(".delivery-address2").html("<div class=\"delivery-address2 clearfix\">\n" +
            "                    <!--=============左=================-->\n" +
            "                    <div class=\"left-info2\">\n" +
            "                        <h3>" + shouHuo + "</h3>\n" +
            "                        <span class=\"phone-number2\">\n" +
            "                            <i></i>\n" +
            "                            " + phone + "\n" +
            "                        </span>\n" +
            "                        <span class=\"address2\">\n" +
            "                            <i></i>\n" +
            "                           " + chengShi + "市" + weiZhi + diZhi + "\n" +
            "                        </span>\n" +
            "                    </div>\n" +
            "                    <!--================右===============-->\n" +
            "                    <div class=\"right-button2\" >\n" +
            "                        <a id=\"select-address-btn2\">\n" +
            "                            切换地址(<span>3</span>)\n" +
            "                        </a>\n" +
            "                        <a id=\"add-address-btn2\">\n" +
            "                            +添加新地址\n" +
            "                        </a>\n" +
            "                    </div>\n" +
            "                </div>")
        $("#cart-address-button").css({
            display: "none"
        })
        hideDiv("pop-div");
    })
}
/*=======================切换地址===================*/
function f4() {
    var contentText = "<div class=\"chose_contents\">\n" +
        "    <h4>请选择收货地址</h4>\n" +
        "    <div class=\"minute_address_show\">\n" +
        "        <h3>姓名<span>默认地址</span></h3>\n" +
        "        <div class=\"phoneNumber\">\n" +
        "            <i class=\"iconfont\">&#xe61e;</i>\n" +
        "            11111111111\n" +
        "        </div>\n" +
        "        <div class=\"address\">\n" +
        "            <i class=\"iconfont\">&#xe641;</i>\n" +
        "            上海市浦东新区世纪公园游泳健身卡啊啊啊操作(上海市浦东新区梅花路芳甸路交叉口)\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"minute_address_show\">\n" +
        "        <h3>姓名<span>默认地址</span></h3>\n" +
        "        <div class=\"phoneNumber\">\n" +
        "            <i class=\"iconfont\">&#xe61e;</i>\n" +
        "            11111111111\n" +
        "        </div>\n" +
        "        <div class=\"address\">\n" +
        "            <i class=\"iconfont\">&#xe641;</i>\n" +
        "            上海市浦东新区世纪公园游泳健身卡啊啊啊操作(上海市浦东新区梅花路芳甸路交叉口)\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"add_address_button\">+添加新地址</div>\n" +
        "    <div class='promptText'></div>\n" +
        "</div>";//传入内容content部分
    $("body").on("click","#select-address-btn2",function () {
        var confirm = "使用";//按键名字自定义，如果不要按钮传入空值("")即可。
        var cancel = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        popupDiv(contentText, confirm, cancel, 695, 525);
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
            padding: "65px 50px",
            outline: "4px solid rgba(0,0,0,0.16)",
            background: "#fafafa"
        });
        $(".chose_contents h4").css({
            position: "absolute",
            top: "12px",
            left: "12px",
            color: "#b3b3b3",
            fontSize: "13px"
        });
        $(".chose_contents .minute_address_show").css({
            width: "342px",
            height: "122px",
            border: "1px solid #e1e1e1",
            float: "left",
            marginBottom: "20px",
            padding: "10px 15px",
            boxSizing: "border-box",
            cursor: "pointer"
        });
        $(".chose_contents .minute_address_show h3").css({
            color: "#684029",
            fontSize: "16px",
            marginBottom: "5px"
        });

        $(".chose_contents .minute_address_show h3 span").css({
            color: "#fff",
            fontSize: "13px",
            background: "#D5BFA7",
            padding: "0 4px",
            display: "inline-block",
            lineHeight: "18px",
            marginLeft: "30px",
            opacity: "0"
        });
        $(".chose_contents div:nth-of-type(1).minute_address_show").css({
            outline: "3px solid #442818"
        });
        $(".chose_contents div:nth-of-type(1).minute_address_show h3 span").css({
            opacity: "1"
        });
        $(".chose_contents .minute_address_show .phoneNumber i").css({
            marginRight: "10px"
        });
        $(".chose_contents .minute_address_show .phoneNumber").css({
            color: "#684029",
            fontSize: "13px",
            marginBottom: "5px"
        });
        $(".chose_contents .minute_address_show .address i").css({
            marginRight: "10px"
        });
        $(".chose_contents .minute_address_show .address").css({
            color: "#684029",
            fontSize: "12px",
            lineHeight: "20px"
        });

        $(".chose_contents div:nth-of-type(even).minute_address_show").css({
            marginLeft: "18px"
        });

        $(".chose_contents .add_address_button").css({
            width: "342px",
            height: "122px",
            border: "1px dashed #e1e1e1",
            cursor: "pointer",
            textAlign: "center",
            lineHeight: "122px",
            color: "#80695B",
            fontSize: "12px",
            float: "left"
        });

        $(".chose_contents .promptText").css({
            color: "#FF714D",
            paddingLeft: "180px",
            fontSize: "13px",
            marginTop: "10px"

        });

        $("#confirm").css({
            width: "130px",
            height: "40px",
            lineHeight: "40px",
            padding: "0",
            borderRadius: "0",
            backgroundColor: "#684029",
            marginBottom: "60px",
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)"
        });


        //选择地址
        $(".minute_address_show").each(function (index, element) {
            $(element).click(function () {
                $(this).css({
                    outline: "3px solid #442818"
                });
                $(this).siblings(".minute_address_show").css({
                    outline : "1px solid #e1e1e1"
                });
                $(this).children("h3").children("span").css({
                    opacity: "1"
                });
                $(this).siblings(".minute_address_show").children("h3").children("span").css({
                    opacity: "0"
                })
            })
        });
        // f5();
        // $("body").on("click","#confirm",function () {
        //     f4()
        //     // f5();
        //     console.log($("#confirm"));
        // })
        //新增地址
        $(".add_address_button").click(function () {
            f1();
        });
        // 使用按钮下的事件
        $("#confirm").click(function () {
            hideDiv("pop-div");
        });
    });

}
/*=======================点击切换其他地址===================*/

// function f5() {
//     $("body").on("click",".minute_address_show",function () {
//         $(this).addClass("qwe");
//         $(this).siblings(".minute_address_show").removeClass("qwe");
//     })
//     $("body").on("click","#confirm",function () {
//
//     })
// }

