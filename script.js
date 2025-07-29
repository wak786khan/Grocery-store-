let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {

     searchForm.classList.toggle('active')
     shoppingCart.classList.remove ('active')
      loginForm.classList.remove('active')
    navBar.classList.remove('active')
}

// 2nd section

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#CART-btn').onclick = () => {
    shoppingCart.classList.toggle('active')
      searchForm.classList.remove('active')
      loginForm.classList.remove('active')
    navBar.classList.remove('active')
}

// 3rd section login form

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
      searchForm.classList.remove('active')
       navBar.classList.remove('active')
}

// navbar

let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active')
    //  shoppingCart.classList.remove('active')
    //   searchForm.classList.remove('active')
    //    navBar.classList.remove('active')
}

// window romve

window.onscroll = () => {
     searchForm.classList.remove('active')
     shoppingCart.classList.remove ('active')
      loginForm.classList.remove('active')
    navBar.classList.remove('active')
}


// swiper cdn wesbite for slider used js

  var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,

      autoplay: {
        delay: 7500,
        diableOninteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,

        },
        768: {
          slidesPerView: 2,

        },
        1024: {
          slidesPerView: 3,

        },
      },
    });

    // review section

     var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,

      autoplay: {
        delay: 7500,
        diableOninteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,

        },
        768: {
          slidesPerView: 2,

        },
        1024: {
          slidesPerView: 3,

        },
      },
    });