$(document).ready(function(){
    $(".menu_toggle_btn").click(function(){
        // $(this).prev().children().stop().toggle();
        $(".gnb").stop().toggle();
    });
});

//GNB SCROLL
var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 0, function () {
        window.location.hash = href;
    });

    return false;
});

//TOP SCROLL
$(function(){
    var y = 820;
    $(window).on("scroll",function(){
        var scrT = $(this).scrollTop();
        console.log("스크롤값: "+scrT);
        if(scrT>y){
            $("aside div").stop().fadeIn();
        }else{
            $("aside div").stop().fadeOut();
        };
    });

    $(".top").click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({scrollTop:0},500,"swing");
    });
});