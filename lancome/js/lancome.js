// 비디오 버튼
const video = $("#lancome_video");
const btn = $("#btn");
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

// Aside 영역
const x_btn = $(".x_btn");
const aside = $("aside");
x_btn.click(function(){
    aside.stop().hide();
});

// window.onload = ()=>{
//     // DOM 객체 선택
//     // 1. 햄버거 메뉴 선택 | ES6 키워드 사용 ham_btn
//     const ham_btn = document.querySelector(".ham");
//     // 2. nav gnb 선택 | ES6 키워드 사용 gnb
//     const gnb = document.querySelector("#gnb");
//     // 3. nav lnb 선택 | ES6 키워드 사용 lnb
//     const lnb = document.querySelector("#lnb");

//     //이벤트 연결, 이벤트 리스너 호출
//     ham_btn.addEventListener("click",()=>{
//         gnb.classList.toggle("active");
//         lnb.classList.toggle("active");
//     });
// }

const fill = $(".heart>h3>img");
fill.click(function(){
    $(this).hide();
    $(this).siblings().stop().show();
});
