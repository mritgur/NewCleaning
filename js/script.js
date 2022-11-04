document.addEventListener('DOMContentLoaded', function () {  
  const slider = tns({
    "container": ".h-slider",
    items: 1,
    // "autoWidth": true,
    "autoplayTimeout": 5500,
    slideBy: 'page',
    autoplay: true,
    controls:false,
    navContainer: "#slPager"
  });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
  });
                // trust slider
                const trust_slider = tns({
                  "container": ".trust_slider",
                  items: 6,
                  "autoplayTimeout": 4000,
                  slideBy: '1',
                  autoplay: true,
                  controls:false,
                  nav:false
                });
              document.querySelector('.prev_trust').addEventListener('click', function () {
                trust_slider.goTo('prev');
                });
              document.querySelector('.next_trust').addEventListener('click', () => {
                trust_slider.goTo('next');
                });
});
// .h-slider    "autoWidth": true,