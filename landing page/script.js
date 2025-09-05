// query selector gets the first element in the html paragraph that matches the css selector .
// document.querySelectorAll(). selects all the elements
// document.querySelector(CSS selectors)-syntax
const wrap= document.querySelector('.wrap');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.registation-box');
const btnPopup = document.querySelector('.btnLogin-popup');
const regLink =  document.querySelector('.#')

registerlink.addEventListener('click', ()=>{
    wrap.classList.add('active');

});
loginlink.addEventListener('click', ()=>{
    wrap.classList.remove('active');

});
btnPopup.addEventListener('click', ()=>{
    wrap.classList.remove('active.btnPopup');

});
// regLink.addEventListener('click' ,()=>{
//     window.open(URL, target, windowFeatures);
    
// })
