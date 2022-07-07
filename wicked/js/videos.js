$('.btn').on('click',clickBtn);
function clickBtn(){
    const btnO = $('#o_btn');
    const btnC = $('#c_btn');
    const result = $('#c_btn').css('display');
    if(result == 'none'){
        btnO.css({display:'none'});
        btnC.css({display:'block'});
        $('#more').css({display:'block'});
    }else{
        btnO.css({display:'block'});
        btnC.css({display:'none'});
        $('#more').css({display:'none'});
    }
}