// Mobile Lnb
const m_closeBtn = document.querySelector('.m_closeBtn');
const lnb = document.getElementById('menuBtn');
const ham = document.querySelector('.ham');
const dim = document.querySelector('.dim');

m_closeBtn.addEventListener('click', ()=>{
  lnb.checked = false;
  dim.checked = false;
});

// PC Lnb
const pc_closeBtn = document.querySelector('.pc_closeBtn');
const pc_sidemenu = document.querySelector('.pc_sidemenu');

pc_closeBtn.addEventListener('click', ()=>{
  pc_sidemenu.classList.toggle('active');
});

// Tab
function tabCont(evt, tabList) {
  let i, tabcontent, tab;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" on", "");
  }

  document.getElementById(tabList).style.display = "block";
  evt.currentTarget.className += " on";
}

// const motionless = document.querySelectorAll('a[type=href]');

// motionless.addEventListener('click', ()=>{
//   return false;
// });