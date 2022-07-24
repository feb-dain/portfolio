$('article').mouseenter(function(){
    $(this).stop().animate({width:"40%"},500);
    $(this).find('video').get(0).play();
});
$('article').mouseleave(function(){
    $(this).stop().animate({width:"12%"});
    $(this).find('video').get(0).pause();
});