$(".changephone").click(function () {
  $(".yinying").show();
  $(".address-phone").show();
});
$(".close").click(function () {
  $(".yinying").hide();
  $(".address-phone").hide();
})
$(".cancel").click(function () {
  $(".yinying").hide();
  $(".address-phone").hide();
})
// 电话号码框的正则表达式
$("#mobile").on("blur",function () {
  var telphone=$("#mobile").val()
  console.log(telphone)
  var reg=/^[0-9]{11}$/;
  if(reg.test(telphone)==false){
    $(".error-mobile").text("请输入正确的电话号码")
    $("#i-phone").hide()
  }else {
    $("#i-phone").show()
    $(".error-mobile").text("")
  }
});


/*==============轮播===================*/
var picArr=[
  '../images/passport-1.png',
  '../images/passport-2.png',
  '../images/passport-3.png',
  '../images/passport-4.png',
  '../images/passport-5.png',
  '../images/passport-6.png'
]
var index=0;
var len=picArr.length;
$(".fresh-pic-code").click(function () {
  if(index<len){
    index++;
  }else if(index==len){
    index=0;
  }
  $(".pic-code").attr('src',picArr[index])
})