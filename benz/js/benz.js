$('figure').find('i').css({
    fontSize: '30px',
    color: '#fff'
});
$('figure').find('button').eq(0).css({
    right: '520px'
});
$('figure').find('button').eq(1).css({
    right: '450px'
});

// Video 제어 스크립트
$('figure button').eq(2).click(function(){
    $('figure').find('video').get(0).load();
});

// Video Control Script
const video = $('.video');
const doBtn = $('#pause_btn');
doBtn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        doBtn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }else{
        video.get(0).pause();
        doBtn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }
});

// Video Sound Control Script
const soundBtn = $('#mute_btn');
video.prop('muted',true);
soundBtn.click(function(){
    if(video.prop('muted')){
        video.prop('muted',false); 
        soundBtn.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    }else{
        video.prop('muted',true);
        soundBtn.html('<i class="fa fa-volume-mute" aria-hidden="true"></i>');
    }
});