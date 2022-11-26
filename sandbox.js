// function closeModal() {
//   let closeModalHolder = document.getElementById("float-me");
//   $(closeModalHolder).click($(".big-modal-container").css("display", "none"));
// }

let dateHolder = new Date().getFullYear();
document.getElementById("date-insertion").innerHTML = dateHolder;

//let openMenuBtn = (document.getElementById("head-nav").style.display =
//      "none");

// function openMenu() {
//   switch (document.getElementById("head-nav").style.display) {
//     case "block":
//       document.getElementById("head-nav").style.display = "none";
//       break;

//     default:
//       document.getElementById("head-nav").style.display = "block";
//       break;
//   }
// }

// function openMenu() {
//   if ((openMenuBtn.style.display = "none")) {
//     return (openMenuBtn.style.display = "block");
//   } else {
//     return (openMenuBtn.style.display = "none");
//   }
// }

// function playMenu() {
//   document.getElementById("btn").onclick = function () {
//     addClassMenu();
//   };
// }
// function addClassMenu() {
//   document.getElementById("simpleDropdown").classList.toggle("show-menu");
// }

// jQuery Section

// Simple jQuery for the Menu Icon
$(document).ready($("#btn").click(burgerClose));

// function burgerClose() {
//   let holdToggles = document.getElementById("try");
//   console.log(holdToggles);
// }

function burgerClose() {
  //Transform Burger to Cross
  let menuBtn = document.getElementsByClassName("kid-for-burger-nav");
  for (let i = 0; i < 3; i++) {
    menuBtn[i].classList.toggle("active");
  }

  //Show Hidden NavBar
  let simpleDropdown = document.getElementById("simpleDropdown");
  simpleDropdown.classList.toggle("show-menu");

  let holdBody = document.getElementsByTagName("body");

  holdBody[0].classList.toggle("body");
}

//Show and Hide Modal
function toggleModal() {
  let modalBtn = document.getElementsByClassName("big-modal-container");
  modalBtn[0].classList.toggle("show-modal");
}
$("#float-me").click(toggleModal);

//Show and Hide Modal --- the more efficient implementation
(function advaModalFunc() {
  let miniHolder = document.querySelectorAll("#head-nav li a");
  let maxHolder = document.querySelectorAll("#simpleDropdown li a");
  for (let i = 0; i < miniHolder.length; i++) {
    miniHolder[i].addEventListener("click", toggleModal);
    maxHolder[i].addEventListener("click", toggleModal);
  }
})();
