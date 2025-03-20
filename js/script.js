// navbar
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const logo = document.getElementById("logo");
    const cartIcon = document.getElementById("cart-icon");
    const header = document.querySelector(".header");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        logo.classList.toggle("hide");
        cartIcon.classList.toggle("hide");
    });

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
});

// video
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-button");
    const video = document.getElementById("banner-video");

    playButton.addEventListener("click", () => {
        playButton.style.display = "none"; // Hide play button
        video.style.display = "block"; // Show video
        video.play(); // Play video
    });
});







