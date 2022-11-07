document.addEventListener('DOMContentLoaded', function () {  
  if (document.querySelector('.h-slider') && document.querySelector('.trust_slider') && document.querySelector('.beforeafter_slider') ) {


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
        
});
