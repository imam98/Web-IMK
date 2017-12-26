function dropdownClick() {
  let menu = document.getElementById("mobileMenu")

  if (menu.className === "mobile-menu")
    menu.className += " is-showed";
  else
    menu.className = "mobile-menu";
}
