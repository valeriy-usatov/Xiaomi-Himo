$(function(){
    $('.bike__slider').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.slider__items').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})

const greeyBtn = document.querySelector(".form__button-greey");
const whiteBtn = document.querySelector(".form__button-white");
const redBtn = document.querySelector(".form__button-red");

const priceGreey = document.querySelector(".price__bike-greey");
const priceWhite = document.querySelector(".price__bike-white");
const priceRed = document.querySelector(".price__bike-red");

greeyBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    priceGreey.classList.remove("price__bike-remove");
    priceWhite.classList.add("price__bike-remove");
    priceRed.classList.add("price__bike-remove");  
});

whiteBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  console.log("hi")
  priceWhite.classList.remove("price__bike-remove");
  priceGreey.classList.add("price__bike-remove");
  priceRed.classList.add("price__bike-remove");  
});

redBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    console.log("hi")
    priceWhite.classList.add("price__bike-remove");
    priceGreey.classList.add("price__bike-remove");
    priceRed.classList.remove("price__bike-remove");  
  });

