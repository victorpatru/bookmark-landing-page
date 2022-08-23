const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const logo = document.getElementById("logo");

// Tabs menu event listener
tabs.forEach(tab => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  tabs.forEach(tab => {
    // Deactivate all tabs
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach(panel => panel.classList.add("hidden"));

  // Activate new tab and based on target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    logo.src = "images/logo-bookmark-footer.svg";
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    logo.src = "images/logo-bookmark.svg";
  }
});
