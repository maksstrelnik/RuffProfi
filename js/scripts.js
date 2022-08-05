
const hamburger = document.querySelector(".hamburger");
const burgMenu = document.querySelector(".header_list");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("is-active")
    burgMenu.classList.toggle("show");

})


//   Swiper
new Swiper('.swiper',{
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  }})