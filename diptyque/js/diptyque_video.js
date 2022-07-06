const video = $("#diptyque_video");
const btn = $("#dip_btn");
btn.click(function(){
    // 초기값 : video(paused) | button(play)
    // video가 paused 상태면
    if(video.get(0).paused){
        // play() = video play
        video.get(0).play();
        // button paused font awesome
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');

    }else{
        // paused() = video pause
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});