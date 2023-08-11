// navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick=() =>{
       navbar.classList.toggle("active");
}
let cartItem = document.querySelector(".cart-items-container");

document.querySelector(".bx-cart-alt").onclick=()=>{
       cartItem.classList.toggle("active");
}
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick=()=>{
       searchForm.classList.toggle("active");
}
const video = document.querySelector("video");

video.addEventListener("play", () => {
  video.muted = true;
});

video.addEventListener("ended", () => {
  video.play();
});
