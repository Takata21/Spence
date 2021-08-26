const HeroImg = document.querySelector(".hero-img");
document.addEventListener("DOMContentLoaded", () => {
    console.log("hy");
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {
        HeroImg.setAttribute("src", "./static/img/hero-img-tablet.png");
    }
    if (window.innerWidth > 1024) {
        HeroImg.setAttribute("src", "./static/img/hero-img-desktop.png");
    }
});