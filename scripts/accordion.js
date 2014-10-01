$(".sidemenu ul").hide();
$(".ddBtn").click(function() {
  //e.preventDefault();
  // hide submenu
  var $this = $(this).parent().find('ul');
  $(".sidemenu ul").not($this).slideUp(200);
  $(".ddBtn").not(this).removeClass("ddBtnActive");
  // toggle class & dd list
  $this.slideToggle(200);
  $(this).toggleClass("ddBtnActive");
});