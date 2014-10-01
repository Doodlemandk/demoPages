$(".sogBtn").click(function (e) {
  $(".sogBar").toggleClass("sogBarDown");
  e.stopPropagation();
});
$(".sogBar").click(function(e){
  e.stopPropagation();
});
$(document).click(function(){
  var searchBox = $(".sogBar");
  if (searchBox.hasClass("sogBarDown")) {
    searchBox.removeClass("sogBarDown");
  }
}); 