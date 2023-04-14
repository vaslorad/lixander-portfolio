//Preloader
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader')
  preloader.classList.add('preloader-hidden')
})

//Highlight Active on Nav
var navItems = document.querySelectorAll('.menu li a')

navItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault()

    var target = document.querySelector(item.getAttribute('href'))

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    })
  })
})

var details = document.querySelectorAll('.detail-button')
details.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault()

    var target = document.querySelector(item.getAttribute('href'))

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    })
  })
})

window.addEventListener('scroll', function () {
  var currentPosition = window.pageYOffset

  document.querySelectorAll('section').forEach(function (section) {
    var sectionTop = section.offsetTop
    var sectionHeight = section.offsetHeight
    var sectionId = section.getAttribute('id')

    if (
      currentPosition >= sectionTop &&
      currentPosition < sectionTop + sectionHeight
    ) {
      document
        .querySelector(".menu li a[href='#" + sectionId + "']")
        .classList.add('active')
    } else {
      document
        .querySelector(".menu li a[href='#" + sectionId + "']")
        .classList.remove('active')
    }
  })
})

//Header
const nav = document.querySelector('.nav-container')

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY
  if (scroll_position > 250) {
    nav.style.backgroundColor = '#0D0E39'
  } else {
    nav.style.backgroundColor = 'transparent'
  }
})

//Typing effect
var words = new Typed('.typing-effect', {
  strings: [
    '&nbsp;Front-End Developer',
    '&nbsp;UX/UI Designer',
    'n App Developer',
  ],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
})

//About Section
$('.card-main').hover(function () {
  $('.card-main').removeClass('active')
  $(this).addClass('active')
})

//Reveal
ScrollReveal({
  reset: false,
  distance: '100px',
  duration: 1000,
  delay: 200,
})

ScrollReveal().reveal('.home-title, .left-side', {
  origin: 'left',
})
ScrollReveal().reveal('.home img, .cards, .right-side', {
  origin: 'right',
})
ScrollReveal().reveal('.content', {
  origin: 'bottom',
})
ScrollReveal().reveal('.proj-headtitle', {
  origin: 'top',
})

//Projects Slider
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

document.querySelector('.button').addEventListener('click', function (event) {
  // Prevent the default behavior of the button
  event.preventDefault()
})
