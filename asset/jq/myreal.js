
$(function () {
    $('.hd-main .menu-ic').click(function (e) {
        e.preventDefault();
     $('.hd-menu').addClass('on');
        $('.bg').addClass('on');
    })


    $('.hd-main .search-ic').click(function (e) {
        e.preventDefault();
        
  
        $('.search').addClass('on');
      
    })
    $('.search .logo-x').click(function (e) {
        e.preventDefault();
        
  
        $('.search').removeClass('on');
      
    })
    const mainSwiper = new Swiper('.maincity', { 
        slidesPerView: 'auto',
        spaceBetween: 10,
        })
       //더보기 
        $('.nav-list .more').click(function (e) {
        e.preventDefault();
        
        $(this).parent().remove();
        $('.nav-list.add').addClass('show');
    })
       //광고 슬라이드js
    const adSwiper = new Swiper('.ad-slide', {
        spaceBetween: 20,
        pagination: {
            el: ".pagination",
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
       //상품슬라이드
    const compareSwiper = new Swiper('.compare', {
        slidesPerView: 'auto',
        spaceBetween: 8,
    })
    /*푸터소개 파트*/ 

    $('.inform-nav').click(function (e) {
    e.preventDefault();
    
    $(this).toggleClass('on').next().slideToggle(250)
})
/*푸터 언어 파트*/ 
$('.languagebox').click(function (e) {
    e.preventDefault();
    
    $(this).next().toggleClass('on')
})

});


