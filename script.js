let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];
let focus = document.getElementsByClassName("focus")[0];
let bulan = document.getElementsByClassName("bulan")[0];
let meteor1 = document.getElementsByClassName("meteor1")[0];
let meteor2 = document.getElementsByClassName("meteor2")[0];
let moonlight = document.getElementsByClassName("moonlight")[0];
let kabut1 = document.getElementsByClassName("kabut1")[0];
let kabut2 = document.getElementsByClassName("kabut2")[0];

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    meteor1.style.left = value * 0.9 + 'px';
    meteor1.style.top = value * 0.7 + 'px';
    meteor2.style.left = value * 0.9 + 'px';
    meteor2.style.top = value * 0.7 + 'px';
    bulan.style.top = value * 0.8 + 'px';
    img1.style.top = value * 0.7 + 'px';
    moonlight.style.right = value * 0.5 + 'px';
    kabut1.style.left = value * 0.4 + 'px';
    kabut1.style.top = value * 0.2 + 'px';
    kabut2.style.right = value * 0.4 + 'px';
    kabut2.style.top = value * 0.2 + 'px';

})
