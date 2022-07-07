$(document).ready(function(){
    // 1. 각 항목 열기/닫기
    $(".open1").click(function(){
        $(this).parent().next().stop().slideDown("slow");
    });
    $(".close1").click(function(){
        $(this).parent().next().stop().slideUp("slow");
    });
    // 2. 모두열기/모두닫기
    $(".open").click(function(){
        $(".content").stop().slideDown("slow");
    });
    $(".close").click(function(){
        $(".content").stop().slideUp("slow");
    });
});