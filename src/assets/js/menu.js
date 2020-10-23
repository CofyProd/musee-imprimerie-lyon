const menuElms = document.querySelectorAll(".menu-wrapper .menu li");
const checkbox = document.querySelector('.menu-wrapper .toggle')
menuElms.forEach((item) => {
  item.addEventListener("click", (event) => {
    checkbox.checked = false
    
  });
});
