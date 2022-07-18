$(".menu_toggle_btn").click(function(){
    // $(this).prev().children().stop().toggle();
    $(".gnb").stop().toggle();
});
if($(".gnb").show){
    $(".slider_img>p").css("color", "red");
}else{
    $(".slider_img>p").css("color", "white");
}

