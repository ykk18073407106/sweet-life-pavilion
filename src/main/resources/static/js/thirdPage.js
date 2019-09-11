var sum = 0;
// var isCheckAll = false;
$(".check-box-Dad").find('input[type=checkbox]').bind('click', function () {
  var a = $(this).parent().parent().prev().find("big").text()//单位价格

  var arrs = $(this).parent().siblings().children();

  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i].checked) {
      sum -= +arrs[i].value * a;
    }
  }

  $(this).parent().siblings().children().attr("checked", false);
  var b = $(this).val() //蛋糕的重量
  b = Number(b);
  a = Number(a);
  var c= a * b; //蛋糕的总价格
  if (this.checked) {
    sum += c;
  }
  else{
    sum -= c;
  }
  $('#price').text(sum);

  /*=========================判断换购条件是否满足=============================*/
  if (sum > 200) {
    $("#tiaojian").show()
  } else {
    $("#tiaojian").hide()
  }
  /*=========================/判断换购条件是否满足=============================*/

});
