const HeroImg = document.querySelector(".hero-img");
const mockupImg = document.querySelector(".escrow-img");
const welcomeBanner = document.querySelector(".welcome-banner");
document.addEventListener("DOMContentLoaded", () => {
    welcomeBanner.classList.add("active");
    setTimeout(() => {
        welcomeBanner.classList.remove("active");
    }, 4000);
    console.log("hy");
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {
        HeroImg.setAttribute("src", "./static/img/hero-img-tablet.png");
        mockupImg.setAttribute("src", "./static/img/PhoneMockupTablet.png");
    }
    if (window.innerWidth > 1024) {
        HeroImg.setAttribute("src", "./static/img/hero-img-desktop.png");
        mockupImg.setAttribute("src", "./static/img/PhoneMockup.png");
    }
});