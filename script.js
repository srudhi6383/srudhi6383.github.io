$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click   
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.nav-link').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.nav-link i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer","Backend Developer","Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer","Backend Developer","Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// Resume download
document.getElementById("resume-button-1").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/1M6DS5VB1Vkp7a4nUOzlUH-ca1wx-ORhE/view?usp=drive_link"
    );
  };
  document.getElementById("resume-button-2").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/1M6DS5VB1Vkp7a4nUOzlUH-ca1wx-ORhE/view?usp=drive_link"
    );
  };

//   mobile number
document.getElementById('contact-phone').addEventListener('click', function() {
    window.location.href = 'tel:+916383647400';
  });
//   email
  document.getElementById('contact-email').addEventListener('click', function() {
    window.location.href = 'mailto:srudhi24@example.com';
  });
