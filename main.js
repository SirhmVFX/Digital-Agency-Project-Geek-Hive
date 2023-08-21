const hamburger = document.querySelector(".hamburger ");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Index carousel
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.image-container');
    const seeMoreLink = document.querySelector('.see-more');

    let currentPageIndex = 0;

    prevBtn.addEventListener('click', () => {
        currentPageIndex = 0;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentPageIndex = 1;
        updateCarousel();
    });

    function updateCarousel() {
        images.forEach((image, index) => {
            if (currentPageIndex === 1) {
                if (index < 2) {
                    image.style.display = 'none';
                } else {
                    image.style.display = 'block';
                }
            } else {
                image.style.display = 'block';
            }
        });

        seeMoreLink.style.display = currentPageIndex === 1 ? 'block' : 'none';

       
        if (currentPageIndex === 0) {
            prevBtn.style.backgroundColor = '#CFCFCF';
            nextBtn.style.backgroundColor = '#2B89CF';
        } else {
            prevBtn.style.backgroundColor = '#2B89CF';
            nextBtn.style.backgroundColor = '#CFCFCF';
        }
    }


    updateCarousel();

    // index page carousel end
