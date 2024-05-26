var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mineSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
  let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
    }
// light mode
  modeToggle.addEventListener("click" , () =>{
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // refresh hiih uyd const
  if(!body.classList.contains("dark")){
    localStorage.setItem("mode" , "light-mode");
  }else{
    localStorage.setItem("mode" , "dark-mode");
  }
  });
// js code to toggle search box
  searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active");
  });

  
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
nav.classList.add("active");
});
body.addEventListener("click" , e =>{
let clickedElm = e.target;
if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
  nav.classList.remove("active");
}
});


window.onload = function() {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const message = document.getElementById("message");

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
      loginButton.style.display = "none";
      logoutButton.style.display = "block";
      message.innerText = "You are logged in. Click 'Log out' to exit.";
  } else {
      loginButton.style.display = "block";
      logoutButton.style.display = "none";
      message.innerText = "You are not logged in. Click 'Log in' to enter.";
  }

  loginButton.addEventListener("click", () => {
      localStorage.setItem("isLoggedIn", "true");
  });

  logoutButton.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
  });
};
// search by searchExhibition
function searchExhibition(keyword) {
  window.location.href = `search.html?keyword=${encodeURIComponent(keyword)}`;
}