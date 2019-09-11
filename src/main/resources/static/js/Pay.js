$(".line-item-1").click(function () {
  $(".dingdan").css({
      height:'180px'
  })
  $(".line-item-1").hide()
  $(".line-item-2").show()
  $(".shoukuan").hide()
  $(".price").hide()
})
$(".line-item-2").click(function () {
  $(".dingdan").css('height','22px');
  $("")
  $(".line-item-2").hide()
  $(".shoukuan").show()
  $(".line-item-1").show()
  $(".price").show()

})
