
$(function () {
    $('.hd-main .menu-ic').click(function (e) {
        e.preventDefault();
    $('.hd-menu').addClass('on');
    $('.bg').addClass('on');
    
    })
    $('.bg').click(function (e) {
        e.preventDefault();
        $('.bg').removeClass('on');
    $('.hd-menu').removeClass('on');
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
fetch('./asset/data/data.json')
.then(res=>res.json())
.then(json=>{
    data=json.items;
    let html=``;
    data.forEach(element => {
        html+=` 
        <div class="swiper-slide">
        <a href="">
            <div class="img-box">
                <img src="${element.thumb}" alt="" class="main">
                <img src="./asset/images/bs-love.svg" alt="" class="love">
            </div>
            <div class="text-box">
                <p class="section">${element.section}</p>
                <h3 class="title">${element.title}</h3>
                <p class="price">${element.price}원</p>
            </div>
        </a>
        </div>`;
    });
    $('#travellist').html(html);
    $('#travellist1').html(html);
})
});



