document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".myslider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000, // 3 seconds delay
    //   disableOnInteraction: false,
    // },
  });
});

const countdownDate = new Date("Sep 15, 2024 00:00:00").getTime();
        
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerText = "EXPIRED";
    }
};

const timerInterval = setInterval(updateCountdown, 1000);


const boxes = document.querySelectorAll('.sec-2-1-box');

boxes[1].classList.add('selected');


boxes.forEach((box) => {
  box.addEventListener('click', function () {
  
    boxes.forEach((b) => b.classList.remove('selected'));

    this.classList.add('selected');
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
});
