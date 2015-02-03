// Open button
$(".menuBtn").click(function () {
  $(".menubar").toggleClass("menubarOut");
});
// Close button
$(".closeBtn").click(function () {
  $(".menubar").toggleClass("menubarOut");
});
// Dropdown menu
$(".menu ul ul").hide();
$(".ddBtn").click(function () {
  //e.preventDefault();
  // hide submenu
  var $this = $(this).parent().find('ul');
  $(".menu ul ul").not($this).slideUp(200);
  $(".ddBtn").not(this).removeClass("ddBtnActive");
  // toggle class & dd list
  $this.slideToggle(200);
  $(this).toggleClass("ddBtnActive");
});