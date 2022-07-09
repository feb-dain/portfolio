$('.footer_nav').click(function(){
    var f_arrow = $(this).next().css('display');
    $(this).next().stop().toggle();
    if(f_arrow == 'none'){
        $(this).children().eq(1).html('<i class="bi bi-chevron-compact-up"></i>');
    }else{
        $(this).children().eq(1).html('<i class="bi bi-chevron-compact-down"></i>');
    }
});
