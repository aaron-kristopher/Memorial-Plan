var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },  
        520: {
            slidesPerView: 2,
        },  
        950: {
            slidesPerView: 3,
        }
    },
  });

const regularButton = document.getElementById('regular-button');
const innerWalkButton = document.getElementById('inner-walk-button');
const walkButton = document.getElementById('walk-button');
const innerDriveButton = document.getElementById('inner-drive-button');
const driveButton = document.getElementById('drive-button');
const installmentHeader = document.getElementById('installment-header');

const regularSlide = document.getElementById('installments-regular-slides');
const innerWalkSlide = document.getElementById('installments-inner-walk-slide');
const walkSlide = document.getElementById('installments-walk-slide');
const innerDriveSlide = document.getElementById('installments-inner-drive-slide');
const driveSlide = document.getElementById('installments-drive-slide');

regularButton.addEventListener('click', () => {
  installmentHeader.textContent = 'REGULAR PLANS';
  regularSlide.style.display = 'block';

  innerWalkSlide.style.display = 'none';
  walkSlide.style.display = 'none';
  innerDriveSlide.style.display = 'none'
  driveSlide.style.display = 'none';
});

innerWalkButton.addEventListener('click', () => {
  installmentHeader.textContent = 'INNER WALK PLANS';
  innerWalkSlide.style.display = 'block';

  regularSlide.style.display = 'none';
  walkSlide.style.display = 'none';
  innerDriveSlide.style.display = 'none';
  driveSlide.style.display = 'none';
});

walkButton.addEventListener('click', () => {
  installmentHeader.textContent = 'WALK PLANS';
  walkSlide.style.display = 'block';

  regularSlide.style.display = 'none';
  innerWalkSlide.style.display = 'none';
  innerDriveSlide.style.display = 'none';
  driveSlide.style.display = 'none';
});

innerDriveButton.addEventListener('click', () => {
  installmentHeader.textContent = 'INNER DRIVE PLANS';
  innerDriveSlide.style.display = 'block';

  regularSlide.style.display = 'none';
  innerWalkSlide.style.display = 'none';
  walkSlide.style.display = 'none';
  driveSlide.style.display = 'none';
});

driveButton.addEventListener('click', () => {
  installmentHeader.textContent = 'DRIVE PLANS';
  driveSlide.style.display = 'block';

  regularSlide.style.display = 'none';
  innerWalkSlide.style.display = 'none';
  walkSlide.style.display = 'none';
  innerDriveSlide.style.display = 'none';
});



