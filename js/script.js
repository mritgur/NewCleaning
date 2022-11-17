document.addEventListener('DOMContentLoaded', function () {  
  // Мобильное меню     

  const mob_menu_btn = document.querySelector('.mobile_menu_text'),
        mob_menu = document.querySelector('.mobile_menu'),
        overlay =document.querySelector('.mobile_menu_overlay'),
        close = document.querySelector('.mobile_menu_close'),
        mbtriger = document.querySelector('.mbtriger'),
        mob_submenu = document.querySelector('.mobile_nav_submenu');
  
        mob_menu_btn.addEventListener('click', ()=>{
          mob_menu.classList.add('block') ;
          overlay.classList.add('block');

        });

        close.addEventListener('click', ()=>{
          mob_menu.classList.remove('block') ;
          overlay.classList.remove('block');
        });
        // Подмобильное 
          mbtriger.addEventListener('click', (e)=>{
            e.preventDefault();
            mob_submenu.classList.toggle('block');
          });
  // фиксированное меню
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 160) {
        nav.classList.add('nav_fixed');
    } else {
        nav.classList.remove('nav_fixed');
    }
  });

                     //Настройка меню
const nav__menu = document.querySelector('.nav__menu'),
items = document.querySelectorAll('.nav__menu_item');
function openSubmenu (){ items.forEach( item => {
item.addEventListener('mouseenter', ()=> {            
submenu = item.querySelector('.nav__submenu');
link = item.querySelector('.nav__menu_link');
if (!submenu)  return; 
submenu.classList.add('nav__submenu_active');          
link.classList.add('light-green');          
});
});
}
function closeSubmenu () {
items.forEach((item)=>{
submenu = item.querySelector('.nav__submenu');
link = item.querySelector('.nav__menu_link');
if(!submenu) return;
submenu.addEventListener('mouseleave',()=>{
submenu.classList.remove('nav__submenu_active');
link.classList.remove('light-green');
});
}          
);
}
openSubmenu(); 
closeSubmenu();

// услуги компании
const serv_people = document.querySelector('.company_serv_people'),
serv_company = document.querySelector('.company_serv_company'),
serv_wrapper = document.querySelector('.company_serv_wrapper'),
content_people = document.querySelector('.company_serv_content-people'),
content_company = document.querySelector('.company_serv_content-company');

serv_wrapper.addEventListener('click', (e)=>{
if (e.target == serv_people )  { 
e.target.classList.add('company_serv_active');
serv_company.classList.remove('company_serv_active');
content_people.classList.add('content_active');  
content_company.classList.remove('content_active'); 
} else if ( e.target == serv_company  ){
e.target.classList.add('company_serv_active');
serv_people.classList.remove('company_serv_active');
content_people.classList.remove('content_active');  
content_company.classList.add('content_active'); 
}

}        
);


if (document.querySelector('.h-slider') 
// && document.querySelector('.trust_slider') 
// && document.querySelector('.beforeafter_slider') 
) {


const slider = tns({
"container": ".h-slider",
items: 1,
// "autoWidth": true,
"swipeAngle": false,

"autoplayTimeout": 5500,
slideBy: '1',
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
"autoplayTimeout": 4000,
slideBy: '1',
autoplay: false,
controls:false,
nav:false,
responsive: {
1185: {

items: 6
},
992: {
items: 5
},
768: {
items: 4
},
576: {
items: 2
},
320: {
items: 2
}
}

});
document.querySelector('.prev_trust').addEventListener('click', function () {
trust_slider.goTo('prev');
});
document.querySelector('.next_trust').addEventListener('click', () => {
trust_slider.goTo('next');
});
const beforeafter_slider = tns({
"container": ".beforeafter_slider",
items: 1,
"autoplayTimeout": 4000,
slideBy: '1',
autoplay: false,
controls:false,
nav:false
});
document.querySelector('.beforeafter_prev').addEventListener('click', function () {
beforeafter_slider.goTo('prev');
});
document.querySelector('.beforeafter_next').addEventListener('click', () => {
beforeafter_slider.goTo('next');
});
}

      // Аккардион

const questions = document.querySelectorAll('.questions_ask'),
answers = document.querySelectorAll('.questions_answer');

function toggleQuestions (ques) {
ques.forEach((el , i)  =>  { 
el.addEventListener('click',
() => {
  // event.preventDefault();
  el.classList.toggle('questions_ask_active');
  answers[i].classList.toggle('questions_answer_active');
}
);

});
}
toggleQuestions(questions);



});
