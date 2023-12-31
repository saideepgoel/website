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
// function colorMode() {
//   document.body.classList.toggle("dark-mode");
//   document.getElementById("Header").classList.toggle("dark-mode");
//   document.getElementById("Footer").classList.toggle("dark-mode");
//   const logo = document.getElementById("logo");
//   logo.src = "Media/Logo White.png";
// }

let clickCount = 0;

let isWhite = false;

function colorMode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("Header").classList.toggle("dark-mode");
  document.getElementById("Footer").classList.toggle("dark-mode");

  const logo = document.getElementById("logo");

  if (isWhite) {
    logo.src = "Media/Logo White.png";
  } else {
    logo.src = "Media/Logo Black.png";
  }

  isWhite = !isWhite;
}