// ARTIST TAB
var artTab = $(".artist_tab>nav>ul>li");
var circle = $(".circle");
var artInt = $(".artist_intro");
var artImg = $(".artist_right");
artTab.click(function(){
    artTab.css({color:"black"});
    $(this).css({color:"#01494e"});
});
artTab.eq(0).click(function(){
    circle.css({left:"88px"});
    artInt.css({display:"none"});
    artInt.eq(0).css({display:"block"});
    artImg.css({display:"none"});
    artImg.eq(0).css({display:"block"});
});
artTab.eq(1).click(function(){
    circle.css({left:"298px"});
    artInt.css({display:"none"});
    artInt.eq(1).css({display:"block"});
    artImg.css({display:"none"});
    artImg.eq(1).css({display:"block"});
});
artTab.eq(2).click(function(){
    circle.css({left:"478px"});
    artInt.css({display:"none"});
    artInt.eq(2).css({display:"block"});
    artImg.css({display:"none"});
    artImg.eq(2).css({display:"block"});
});

// VIDEO
const video = $("#diptyque_video");
const btn = $("#dip_btn");
btn.click(function(){
    // 초기값 : video(paused) | button(play)
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

// FAQ 
var que = $(".faq_box>h3");
var queI = $(".faq_box>h3>span");
var ans = $(".faq_box>p");
que.click(function(){
    ans.stop().hide();
    $(this).next().stop().show();
    queI.stop().html('<i class="bi bi-plus"></i>');
    $(this).children().eq(0).stop().html('<i class="bi bi-dash"></i>');
});
