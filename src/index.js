import "./fonts/fonts.scss";
import "./_cleanup.scss";
import "./_main.scss";
import "../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "./_customScrollTheme.scss";
const $ = require('jquery');
const customScroll = require('malihu-custom-scrollbar-plugin');
window.$ = $;
window.customScroll = customScroll;

console.log("working...");

//Get form data
document.querySelector("form").addEventListener("submit", (e) => {
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
  debugger;
  //debugger for check
});
//Dropdown
let button = document.querySelector(".form__select-button");
let dropDown = document.querySelector(".form__select-dropdown");
let listDropDown = document.querySelectorAll(".form__select-item");
let dropDownInput = document.querySelector('[name="select"]');

listDropDown.forEach((item) => {
  item.addEventListener("click", () => {
    button.innerText = item.innerText;
    dropDownInput.value = item.dataset.value;
    button.classList.toggle("form__select-button_open");
    dropDown.classList.toggle("form__select-dropdown_open");
  });
});
button.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  button.classList.toggle("form__select-button_open");
  dropDown.classList.toggle("form__select-dropdown_open");
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".list")) return;

  button.classList.remove("form__select-button_open");
  dropDown.classList.remove("form__select-dropdown_open");
});
//Range
let range = document.querySelector(".form__range-input");
let rangeText = document.querySelector(".form__range-value");
// let rangeInput = document.querySelector('[name="range"]');
range.addEventListener('input', () => {
    rangeText.innerText = `${range.value} %`
    // rangeInput.value = range.value
})
//Burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.navigation');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger_open');
    menu.classList.toggle('navigation_open');

})
window.addEventListener('resize', () => {
    burger.classList.remove('burger_open');
    menu.classList.remove('navigation_open');
})
window.addEventListener('scroll', () => {
    burger.classList.remove('burger_open');
    menu.classList.remove('navigation_open');
})
//Scroll
let menuItems = document.querySelectorAll('.navigation__link')
let yOffset = 50;
menuItems.forEach(menuItem => {
  // if (menuItem.href === ?) {
  //  do something
  // }
  menuItem.addEventListener('click', (e) => {
    e.preventDefault()
    let form = document.querySelector('.form')
    let coords = form.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({
      top: coords,
      behavior: "smooth"
  })
  })
});
//Custom Scrollbar
$(".form__select-list").mCustomScrollbar({
  theme:"3d-thick-dark"
});