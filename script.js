// const button = document.getElementById("nav-button");
// const nav = document.getElementById("side-link-nav");

// button.addEventListener('click', () => {
//   nav.classList.toggle('block');
// });



function myFunction() {
  var x = document.getElementById("side-link-nav");
  if (x.className === "side-link-nav") {
    x.className += " responsive";
  } else {
    x.className = "side-link-nav";
  }
}