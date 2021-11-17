/*=============== CHANGE BACKGROUND HEADER WHEN SCROLL ===============*/
// function scrollHeader() {
//   const header = document.getElementById('navbar');
//   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 80) {
//     header.classList.add('nav-scrolled');
//   }
//   else {
//     header.classList.remove('nav-scrolled');
//   }
// }
// window.addEventListener('scroll', scrollHeader);
//------------------------------------------------------------
$(document).ready(function() {
  new WOW().init();
});
/*=========== DROPDOWN MENU WHEN CLICK ON ACCOUNT AREA ===========*/
function dropDownMenu() {
  document.getElementById('toggle-dropdown').classList.toggle('show');
}
//------------------------------------------------------------------
