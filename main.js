// $(document).ready(function () {
//   $(".container-to-show-nav").click(function () {
//     $(".hide-this").css("display", "block");
//   });
// });

// Simple jQuery for the Menu Icon

function burgerClose() {
  //Transform Burger to Cross
  let menuBtn = document.getElementsByClassName("open-close-lines");
  for (let i = 0; i < 3; i++) {
    menuBtn[i].classList.toggle("active");
  }

  //Show Hidden NavBar
  let simpleDropdown = document.getElementById("sm-screen-ul");
  simpleDropdown.classList.toggle("show-menu");

  //   let holdBody = document.getElementsByTagName("body");

  //   holdBody[0].classList.toggle("body");
}
