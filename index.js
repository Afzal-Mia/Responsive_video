
var toggle = document.querySelector(".toggle_menu");
var nav_list = document.querySelector(".nav-list");
nav_list.style.maxHeight == "0px";

//  icon element within the toggle_menu
var toggleIcon = toggle.querySelector("i");

// event listener for the toggle_menu
toggle.addEventListener("click", () => {
  if (nav_list.style.maxHeight == "0px") {
    nav_list.style.maxHeight = "300px";
    nav_list.style.display = "block";
    toggle.innerHTML = "<i class='fa-solid fa-xmark'>";
    toggleIcon.classList.remove("fa-solid", "fa-bars"); // removing hamberger menu icon
    toggleIcon.classList.add("fa-solid", "fa-xmark"); // adding cross icon
  }
  else {
    nav_list.style.maxHeight = "0px";
    nav_list.style.display = "none";
    toggle.innerHTML = "<i class='fa-solid fa-bars'>";
    toggleIcon.classList.remove("fa-solid", "fa-xmark");
    toggleIcon.classList.add("fa-solid", "fa-bars");
  }
});

// ********************************Replacing Hamburger To Cross Icon Took Hours for me****************************************


