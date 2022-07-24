// parseInt => 정수로 변경
var currentPosition = parseInt($(".top").css("top"));
console.log(currentPosition);


// 2. Follow Arrow 구현
$(window).scroll(function(){
    var position = $('html,body').scrollTop();
    $('.top').stop().animate({'top':currentPosition + position},100);
});

// 3. 부드러운 스크롤
$('.top').click(function(e){
    e.preventDefault();
    $("html,body").stop().animate({scrollTop:0},500,"swing");
});

