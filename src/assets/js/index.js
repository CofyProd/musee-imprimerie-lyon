
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll < window.innerHeight) {
        console.log(true)
        document.documentElement.style.setProperty('--var-color-burger', "white");
    } else {
        document.documentElement.style.setProperty('--var-color-burger', "black");

    }
});

