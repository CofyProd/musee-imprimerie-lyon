const menuElms = document.querySelectorAll(".menu-wrapper .menu li");
const checkbox = document.querySelector(".menu-wrapper .toggle");
const bars = document.querySelector(".menu-wrapper .hamburger .bar::before, .menu-wrapper .hamburger .bar::after");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll < window.innerHeight) {
    console.log(true);
    document.documentElement.style.setProperty("--var-color-burger", "white");
  } else {
    document.documentElement.style.setProperty("--var-color-burger", "black");
  }
});

checkbox.addEventListener("click", (e) => {
  document.documentElement.style.setProperty("--var-color-burger", "white");
});
menuElms.forEach((item) => {
  item.addEventListener("click", (event) => {
    checkbox.checked = false;
  });
});
