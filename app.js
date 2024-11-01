document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const btn = document.querySelector(".switch-btn");
    const video = document.querySelector(".video-container");
  
    // Hide preloader once the page loads
    window.addEventListener("load", () => {
      preloader.classList.add("hide-preloader");
    });
  
    // Toggle play/pause functionality
    btn.addEventListener("click", function () {
      if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
      } else {
        btn.classList.remove("slide");
        video.play();
      }
    });
  });