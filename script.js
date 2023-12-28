/* Night mode logic*/
/*
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".mode");

  toggle.addEventListener("click", function() {
    const isNightMode = document.body.classList.toggle("mode-night");
    document.body.style.backgroundColor = isNightMode ? "black" : "white";
  });
});
*/

/* Content showing */
function toggleVisibility(element) {
  element.classList.toggle("showing-visible");
  const listItems = element.nextElementSibling.children;
  /* nextElementSibling - <ul></ul>  children - <li></li> */
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("showing-visible");
  }
  const isVisible = listItems[0].classList.contains("showing-visible");

  const ul = element.nextElementSibling;
  ul.style.height = isVisible ? ul.scrollHeight + "px" : "0";
}

toggleVisibility(document.querySelector('.show'));


/* dark-mode and light-mode*/
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById('header').classList.toggle("dark-mode");
  document.getElementById('footer').classList.toggle("dark-mode");
}

