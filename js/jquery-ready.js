$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let nav = header.find('.nav');
    let phone = header.find('.phone');
    let burger = $('.burger');
    let windowHeight = $(window).height();

    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = $(document.createElement('div'));
        mobileMenu.addClass('mobile-menu');

        headerWrap.append(mobileMenu)

        //клонируем элементы хедера
        let mobileNav = nav.clone();
        let mobilePhone = phone.clone();

        mobileMenu.append(mobileNav);
        mobileMenu.append(mobilePhone);        
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

    //=====Якорные ссылки====
    function anchorLinks () {
        let currentLink = $(this).attr('data-anchor');
        let currentDiv = $('[data-anchor="'+ currentLink +'"]:not(a)');        

        //скролл до элемента
        $('html, body').animate({scrollTop: currentDiv.offset().top}, 500);

        if (windowWidth <= 992) {
            let mobileMenu = $('.mobile-menu');

            burger.removeClass('active');
            body.removeClass('no-scroll');
            mobileMenu.removeClass('active');
        }
    }

    $('a[data-anchor]').click(anchorLinks);

    //=====Якорные ссылки КОНЕЦ==

    //=====Слайдеры в блоке УСТАНОВКА======
    if ($('.install .js-slider').length) {
        $('.install .js-slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false
        })
    }
    //=====Слайдеры в блоке УСТАНОВКА КОНЕЦ==============

    //=====Слайдер Галерея=========
    if($('.gallery').length) {
        $('.js-gallery').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        

        $('.js-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let slideCount = $('.js-gallery .slick-slide').length;

            if ($(window).width() >= 993) {
                if (nextSlide == (slideCount - 1)) {
                    $('.js-gallery .slick-next').addClass('last-slide')
                } else {
                    $('.js-gallery .slick-next').removeClass('last-slide')
                }
    
                if (nextSlide == 0) {
                    $('.js-gallery .slick-prev').removeClass('first-slide')
                } else {
                    $('.js-gallery .slick-prev').addClass('first-slide')
                }
            }
            
            
        });

        
    }

    //=====Слайдер Галерея КОНЕЦ========
});
