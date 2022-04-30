$(document).ready(function () {
    // 헤더 호버시 색상 추가
    $('header').mouseover(function () {
        $('header').addClass('active')

    })
    $('header').mouseleave(function () {
        $('header').removeClass('active')
    })

    //헤더 네비 호버시 메뉴 생성
    $('header .top-group .gnb-group li a').mouseover(function () {
        $('header .drop-down-area').slideDown()
        $('header').mouseleave(function () {
            $('header').addClass('active')
        })

    })
    $('header .drop-down-area').mouseleave(function () {
        $('header .drop-down-area').slideUp()

    })

    //헤더 서치 클릭시 검색창 생성
    $('header .search-btn .active').click(function () {
        // $('header').addClass('active')
        $('header .search-area').slideDown()
        $('header').mouseleave(function () {
            $('header').addClass('active')
        })
    })

    $('main').click(function () {
        $('header').addClass('active')

        $('header .search-area').slideUp()
    })

    //헤더 위시리스트 클릭시 선택창 생성
    $('header nav .like-btn').click(function () {
        $('.wish-area').show()
        $('.wish-area-bg').show()
    })

    $('.wish-area button').click(function () {
        $('.wish-area').hide()
        $('.wish-area-bg').hide()
    })


    $('.wish-area-bg').click(function () {
        $('.wish-area').hide()
        $('.wish-area-bg').hide()
    })

    //헤더 로그인 클릭 시 창 생성
    $('header nav .login-btn').click(function () {
        $('.login-wrap').show()
      
    })



    // 모바일 헤더 호버시 색상 추가
    $('header').mouseover(function () {
        $('header').addClass('m-active')
    })
    $('header').mouseleave(function () {
        $('header').removeClass('m-active')
    })

    //모바일 서치 클릭시 검색창 생성
    $('header .search-btn .m-active').click(function () {
        $('header').addClass('m-search-active')
        $('.mobile-search').show()
    })
    $('header .m-close-btn').click(function () {
        $('header').removeClass('m-search-active')
        $('.mobile-search').hide()

    })

    // 모바일 메뉴 클릭시 리스트생성
    $('header .m-btn .m-active').click(function () {
        $('header').addClass('m-menu-active')
        $('.mobile-menu').show()
    })
    $('header .m-btn .m-close-btn').click(function () {
        $('header').removeClass('m-menu-active')
        $('.mobile-menu').hide()

    })

    
    //AOS
    AOS.init();
    
    
    
    //헤더 드롭 슬라이드
    var swiper = new Swiper("header .drop-area .product-wrap .swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    
    });
    
    
    //메인 배너 슬라이드
    var swiper = new Swiper(".main-banner", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    
    //sec01 슬라이드
    var swiper = new Swiper(".contents", {
        slidesPerView: 3,
        spaceBetween: 20,
        // 이미지 사이 간격 조절
        pagination: {
            el: ".sec01 .swiper-pagination",
            type: "progressbar",
        },

        breakpoints: {
            768: {
                slidesPerView: 3,  //브라우저가 768보다 클 때
                spaceBetween: 32,
            },
        
        },
    });
    
    
    //sec05 슬라이드
    var swiper = new Swiper(".sec05 .swiper", {
        slidesPerView: 1.5,
        spaceBetween: 10,
        pagination: {
            el: ".sec05 .swiper-pagination",
            type: "progressbar",
        },

    });

    //sec05 메뉴 클릭시 창이동
    var menu = ['Slide 1', 'Slide 2', 'Slide 3']
    var mySwiper = new Swiper('.sec05 .swiper-container', {
        // If we need pagination
        pagination: {
            el: '.sec05 .sec05-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
    })
        

    //sec05 버튼 마우스오버시 색변경
    $('main .sec08 .btn').mouseover(function () {
        $(this).addClass('active')
    })

    $('main .sec08 .btn').mouseleave(function () {
        $(this).removeClass('active')
    })


    //sec06 슬라이드
    var swiper = new Swiper(".sec06 .swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 3,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
        },
    });
    


});


