$(function(){
    $('.copy_btn').click(function(){
        $('textarea').select();
        document.execCommand('copy');
    });
});
