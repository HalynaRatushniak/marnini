document.querySelectorAll(".js-switch-card").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".cards__item").forEach(l => {
            if (l.classList.contains("background")) {
                l.classList.remove("background");
            } else {
                 l.classList.add("background");
            }
        })
     })
        
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const dayOfWeek = new Date().getDay();
document.querySelectorAll(".letter").forEach(item => {
  if (item.dataset.day == dayOfWeek) {
    item.classList.add("active")
  }
})
document.querySelector(".js-claim").addEventListener("click", function () {
  console.log(this);
  document.querySelector(".button__icon i").innerText = "0";
  localStorage.setItem( "money", "50" );
})

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.querySelector(".js-clock").innerHTML = h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

document.querySelector(".js-burger").addEventListener("click", function () {
  if (document.querySelector(".navigation").classList.contains("active")) {
     document.querySelector(".navigation").classList.remove("active")
  } else {
     document.querySelector(".navigation").classList.add("active")
  }
})
