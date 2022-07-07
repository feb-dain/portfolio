$(function(){
    $('.slider_wrap').bxSlider({
        auto: true,
        pager: true,
        autoHover: true,
    });
    $('.copy_btn').click(function(){
        $('textarea').select();
        document.execCommand('copy');
    });
});
