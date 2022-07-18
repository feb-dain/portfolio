new fullScroll({
    mainElement: 'wrap',
    displayDots: true,
    dotsPosition: 'right',
    animateTime: 0.7,
    animateFunction: 'ease'
});

$(".menu_toggle_btn").click(function(){
    // $(this).prev().children().stop().toggle();
    $(".gnb").stop().toggle();
});

$(document).ready(function() {
    emailjs.init("U7UfuqVy6Mw77-Qk4");
    $('#submit').click(function(){
        var templateParams = {
            name: $('#name').val(),
            email : $('#email').val(),
            message : $('#message').val()};
    
        emailjs.send('gmail', 'template_eeuba83', templateParams)
                .then(function(response) {
                alert('감사합니다! 빠른 답장 드리겠습니다.')
                window.location.reload();
                }, function(error) {
                alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요!')
                });
    });
});

