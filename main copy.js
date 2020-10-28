const slideshowImages = document.querySelectorAll(".intro-slideshow img");
const slideshowHeadings = document.querySelector(".intro-header .text");

let headingArr = [
  "Welcome to my Portfolio",
  "My name is Gerald Pabonita",
  "A Web Developer",
];
const delay = 5000;
let counter = 0;

slideshowImages[counter].style.opacity = 1;

setInterval(nextImgAndHead, delay);

function nextImgAndHead() {
  slideshowImages[counter].style.opacity = 0;

  counter = (counter + 1) % slideshowImages.length;

  slideshowImages[counter].style.opacity = 1;
  slideshowHeadings.textContent = headingArr[counter];
}

//?navbar

/*
var topMenu = $("#home"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
});​
//const navAnimation=document.querySelectorAll()

/*$(document).ready(function () {
  activeLinkControl();
});

function activeLinkControl() {
  $(".navbar-nav .nav-item a").click(function () {
    //remove active class from any of nav-item
    $(this).closest(".nav-item").siblings();
    //add active class to clicked item but at li not the anchor
    $(this).closest("nav-item").addClass("active");
  });
}*/

/*
let sliderImages = document.querySelectorAll(".slide"),
  arrowRight = document.querySelector("#arrow-right"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

//clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//init slider
function startSlide() {
  reset();
  sliderImages[0].style.sisplay = "block";
}

//show prev
function slideleft() {
  reset();
  sliderImages[current - 1].style.sidplay = "block";
  current--;
}

//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideleft();
});

arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
*/
