// OPS

const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
  $('.sidebar__item').eq(itemEq).addClass('active')
    .siblings().removeClass('active')
}

const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if (inScroll) return;

  inScroll = true;

  sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translate(0, ${position})`,
    "-webkit-transform": `translate(0, ${position})`
  });

  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, 700); // продолжительность анимации
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "up" && prevSection.length) {
    performTransition(prevSection.index());
  }

  if (direction === "down" && nextSection.length) {
    performTransition(nextSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "down" : "up";

    scrollToSection(direction);
  },
  keydown: e => {
    switch (e.keyCode) {
      case 40:
        scrollToSection("down");
        break;

      case 38:
        scrollToSection("up");
        break;
    }
  },
  touchmove: e => e.preventDefault()


  // touchstart touchend touchmove 
});


$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));


  performTransition(target);

})

/*if (isMobile) {
  $(document).swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
       // плагин возвращает фактическое...
       
      const scrollDirection = direction === 'down' ? 'up' : 'down';
      
      scrollToSection(scrollDirection);
    }
  });
}*/


/////////////////////////////////////////////////////////////////////////////////////////////

// order tablets menu

var order = document.querySelector('#order');
var tablets = document.querySelector('#tablets');


order.addEventListener('click', function () {
    tablets.style.display = 'flex';
})

var close = document.querySelector('#close');
var tablets = document.querySelector('#tablets');

close.addEventListener('click', function () {
    tablets.style.display = 'none';
})

// slider

var left = document.querySelector("#left");
var right = document.querySelector("#right");
var sliderList = document.querySelector('.slider__list');
var sliderContainer = document.querySelector('.slider__content');
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;

left.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
 
    if (start > 1 && currentLeft % size == 0) {        
      sliderList.style.left = currentLeft + size + 'px';
      start--;      
      
    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft - 4 * size + 'px';
      start = 5;      
    }
 })

 right.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));

    if (start < 5 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft - size + 'px';
        start++;
    
    } else if (currentLeft % size == 0) {
      sliderList.style.left = 0 + 'px';
      start = 1;     
    }
})

window.addEventListener('resize', function() {  
    size = parseInt(getComputedStyle(sliderContainer).width); 
    // console.log("size: " + size);
    // console.log("start: " + start);
    // console.log(-size * start);
    sliderList.style.left = -size * (start-1) + 'px';
  });

// acco team

var accordeon = document.getElementById('acco-team'),
    items = accordeon.getElementsByClassName('accordeon__item'),
    contents = accordeon.getElementsByClassName('accordeon__info'),
    i;

accordeon.addEventListener("click", function(e) {
    if (e.target.classList.contains('accordeon__trigger')) {
        var trigger = e.target;
        var content = trigger.nextElementSibling;
        var item = trigger.parentNode;

        if (!item.classList.contains("active")) {
            for (i = 0; i < items.length; i++) {
                items[i].classList.remove("active");
            }
        item.classList.add("active");

        for (i = 0; i < contents.length; i++) {
            contents[i].style.height = null;
        }

        content.style.height = content.scrollHeight + "px";

        } else {
          item.classList.remove("active");
          content.style.height = null;
        }
    }
})

// acco menu

var accordeon2 = document.getElementById('acco-menu'),
    items2 = accordeon2.getElementsByClassName('accordeon-menu__item'),
    contents2 = accordeon2.getElementsByClassName('accordeon-menu__text'),
    i;

accordeon2.addEventListener("click", function(e) {
    if (e.target.classList.contains('accordeon-menu__trigger') || e.target.classList.contains('accordeon-menu__trigger-text')) {
        
        var trigger;
    
        if (e.target.classList.contains("accordeon-menu__trigger")) { 
        trigger = e.target;
        } else { 
        trigger = e.target.parentNode;
        }
        
        var content = trigger.nextElementSibling;
        var item = trigger.parentNode;
        
        if (!item.classList.contains("active")) {
            for (i = 0; i < items2.length; i++) {
                items2[i].classList.remove("active");
            }
        item.classList.add("active");

        for (i = 0; i < contents2.length; i++) {
            contents2[i].style.width = null;
        }

        content.style.width = content.scrollWidth + "px";

        } else {
          item.classList.remove("active");
          content.style.width = null;
        }
    }
})

//overLay

var openMenu1 = document.querySelector('#openOverlay1');
var openMenu2 = document.querySelector('#openOverlay2');
var openMenu3 = document.querySelector('#openOverlay3');
var openMenu4 = document.querySelector('#openOverlay4');
var openMenu5 = document.querySelector('#openOverlay5');
var openMenu6 = document.querySelector('#openOverlay6');
var openMenu7 = document.querySelector('#openOverlay7');
var openMenu8 = document.querySelector('#openOverlay8');
var modalMenu = document.querySelector('#modal');

openMenu1.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu2.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu3.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu4.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu5.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu6.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu7.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

openMenu8.addEventListener('click', function () {
    modalMenu.style.display = 'flex';
})

var closeMenu = document.querySelector('#closeModal');
var modalMenu = document.querySelector('#modal');

closeMenu.addEventListener('click', function () {
    modalMenu.style.display = 'none';
})

// map

function initMap() {
    var uluru = { lat: 59.9342802, lng: 30.3350986 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        zoomControl: false,
        scaleControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        center: uluru
    });
    var image = './img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.94554327989287, 30.38935262114668),
        map: map,
        icon: image
    });

    var image = './img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.91142323563909, 30.50024587065841),
        map: map,
        icon: image
    });

    var image = './img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.88693161784606, 30.319658102103713),
        map: map,
        icon: image
    });

    var image = './img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.97033574821672, 30.315194906302924),
        map: map,
        icon: image
    });
}

