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


function scrollNav() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var navig = document.getElementsByTagName('nav');
  var logoJp = document.getElementsByClassName('JPlogo');
  var projects = document.getElementsByClassName('Projects');
  if (scrollY>80){
    navig[0].classList.add("scrollUp");
    logoJp[0].classList.add("scrollDown");
    projects[0].classList.add("projRevealed");
  } else {
    navig[0].classList.remove("scrollUp");
    logoJp[0].classList.remove("scrollDown");
    projects[0].classList.remove("projRevealed");
  }
}


window.addEventListener('scroll', scrollNav);
