document.addEventListener("DOMContentLoaded", function () {
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     scrollTopBtn.style.display = "block";
    } else {
     scrollTopBtn.style.display = "none";
    }
  }

 scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});