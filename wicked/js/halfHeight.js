var bw = $(window).width();
var bh = $(window).height();
$('#wrap').css({height:bh});
// 브라우저 높이의 반값 구하기
var halfHeight = bh/2;
$('.youtube').css({'margin-top':halfHeight});
console.log(bw,bh,halfHeight);
