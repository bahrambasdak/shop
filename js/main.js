let slideIndex = 1;
function setSlide(input,index){
    slideIndex = index;
    document.querySelector(".active").classList.remove('active');
    document.querySelector(`#${input}`).classList.add('active');
    [...document.querySelectorAll('.slider .buttons i')].forEach(element=>{
        element.style.color = 'white';
    })
    document.querySelector(`.slider .buttons #circle${index}`).style.color = "green";
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex == 4) slideIndex =1;
    setSlide( `slide${slideIndex}`, slideIndex);
} , 4000)


let remainingTime = 50500;
function setTime(){
    if(remainingTime == 0) return;
    let h = Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s = (remainingTime%3600)%60;
    document.getElementById('h').innerHTML= h;
    document.getElementById('m').innerHTML= `${m} :`;
    document.getElementById('s').innerHTML= `${s} :`;
}
setInterval(()=>{
    remainingTime -= 1;
    setTime();

},1000);

/*
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) 
*/

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });



