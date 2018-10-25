// Determine width of t he container element, and fixing navbars width to that
//
// var contWidth = document.getElementsByClassName('Projects')[0].offsetWidth;
// document.getElementsByTagName('nav')[0].style.width = contWidth+'px';


// if previous scroll position is smaller than now , then move the navbar up






window.addEventListener('scroll', logScroll);

function logScroll() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollY);
}
