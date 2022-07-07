// Video Control Script
const video = $('.video');
const doBtn = $('#car_btn');
doBtn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        doBtn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        video.get(0).pause();
        doBtn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

// Video Sound Control Script
const soundBtn = $('#car_sound');
// video.prop(속성명,true/false)
video.prop('muted',true);
soundBtn.click(function(){
    // muted 상태일 때
    if(video.prop('muted')){
        video.prop('muted',false); //소리 재생
        soundBtn.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    }else{
        video.prop('muted',true);
        soundBtn.html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
    }
});