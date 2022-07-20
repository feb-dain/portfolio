$('.depth2').hide();

$('.depth1>a').click(function(){
    $('.tg>.depth2').stop().slideUp('fast');
    if($(this).children().hasClass('bi-plus')) {
        $('.tg>a').children().removeClass('bi-dash').addClass('bi-plus');
        $(this).next().stop().slideDown('fast');
        // $(this).next().css({border:"1px solid #fff"});
        $(this).children().removeClass('bi-plus').addClass('bi-dash');
    } else {
        $(this).next().stop().slideUp('fast');
        $(this).children().removeClass('bi-dash').addClass('bi-plus');
    }
  })

// $('.depth1>a').mouseover(function(){
//     $('.tg>.depth2').stop().slideUp('fast');
//     if($(this).children().hasClass('bi-plus')) {
//         $('.tg>a').children().removeClass('bi-dash').addClass('bi-plus');
//         $(this).next().stop().slideDown('fast');
//         $(this).children().removeClass('bi-plus').addClass('bi-dash');
//     } else {
//         $(this).next().stop().slideUp('fast');
//         $(this).children().removeClass('bi-dash').addClass('bi-plus');
//     }
// });