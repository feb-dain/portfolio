var btnO = document.getElementsByClassName("btn_oct")[0];
var btnS = document.getElementsByClassName("btn_sep")[0];
function clickSep(){
    btnS.style.color = "black";
    btnS.style.background = "#8abf3f";
    btnO.style.color = "#8abf3f";
    btnO.style.background = "none";
    $('.sep').stop().show();
    $('.oct').hide();
}
btnS.addEventListener("click",clickSep);
function clickOct(){
    btnO.style.color = "black";
    btnO.style.background = "#8abf3f";
    btnS.style.color = "#8abf3f";
    btnS.style.background = "none";
    $('.oct').stop().show();
    $('.sep').hide();
}
btnO.addEventListener("click",clickOct);

var button = document.querySelectorAll(".sch");
var sepHover = document.getElementsByClassName("sch")[0];
console.log(button);
var d = document.getElementById("sch_date");
function whenClick(){
    var result = this;
    console.log(result);
    d.innerText = result.innerText;
    sepHover.style.color = "#fff";
}
var i;
for(i=0;i<button.length;i++){
    button[i].addEventListener("click",whenClick);
}
function fHover(){
    sepHover.style.color = "#8abf3f";
}
sepHover.addEventListener("click",fHover);



// $('#myBtn').on('click',myFunction);
// EventListner
// function myFunction(){
//     var dots = $('#dots');
//     var moreButton = $('#more');
//     var btnText = $('#myBtn');
//     var result = $('#dots').css('display');
//     // 초기 상태 => none
//     if(result == 'none'){
//         dots.css({display:'inline'});
//         btnText.text('+MORE');
//         moreButton.css({display:'none'});
//     }else{
//         dots.css({display:'none'});
//         btnText.text('-CLOSE');
//         moreButton.css({display:'inline'});
//     }
// }
