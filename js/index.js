//  header

$(function () {
    $('.menu').hover(function () {
        $('.menu_lists').addClass('menu_open');
        $('.menu_list').addClass('menu_open');
        $('.top_nav').addClass('menu_open');
    }
    );
});
$(function () {
    $('.product_li').hide();
    $('.sub_menu').hover(function () {
        $('.product_li').show();
        $('.top_nav').addClass('sub_menu_open');
    }
    );
});
$(function () {
    $('.sub_menu').mouseleave(function () {
        $('.top_nav').removeClass('sub_menu_open');
        $('.product_li').hide();
    }
    );
});
$(function () {
    $('.header_pc').mouseleave(function () {
        $('.menu_lists').removeClass('menu_open');
        $('.top_nav').removeClass('sub_menu_open');
        $('.top_nav').removeClass('menu_open')
        $('.product_li').hide();
    }
    );
});

$(function () {
    $('.product_li_sp').hide();
    $('.sub_menu_sp').on('click', function () {
        $('.product_li_sp').slideToggle(300);
    });
});

$(function () {
    $('.nav_box_sp').hide();
    $('.burger-btn').on('click', function () {
        $('.nav_box_sp').slideToggle(300);
        $('.top_nav_sp').toggleClass('sp_menu_open');
        $('.burger-btn').toggleClass('close');
    });
});

// スクロールしたらfadeinする設定
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 250) {
                $(this).addClass('active');
            }
        });
    });
    $(window).scroll();
});

if (window.matchMedia("(max-width: 768px)").matches) {
    $(function () {
        $(window).scroll(function () {
            $('.bg_line_01').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 1000) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

    $(function () {
        $(window).scroll(function () {
            $('.bg_line_02').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 600) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });



    $(function () {
        $(window).scroll(function () {
            $('.bg_line_03').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 700) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

    $(function () {
        $(window).scroll(function () {
            $('.bg_line_cp').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 800) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

} else {
    $(function () {
        $(window).scroll(function () {
            $('.bg_line_01').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 250) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

    $(function () {
        $(window).scroll(function () {
            $('.bg_line_02').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 700) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

    $(function () {
        $(window).scroll(function () {
            $('.bg_line_03').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 500) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

    $(function () {
        $(window).scroll(function () {
            $('.bg_line_cp').each(function () {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 700) {
                    $(this).addClass('fade_in');
                }
            });
        });
        $(window).scroll();
    });

}

$(function () {
    $(window).scroll(function () {
        $('.mask').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(".mask_img").addClass('active');
            }
        });
    });
    $(window).scroll();
});



// feature
$(function () {
    $('.item_0').hover(function () {
        $('.mask_img').hide();
        $('.image_0').fadeIn();
    }, function () {
        $('.mask_img').show();
        $('.image_0').hide();
    });
    $('.item_01').hover(function () {
        $('.mask_img').hide();
        $('.image_01').fadeIn();
    }, function () {
        $('.mask_img').show();
        $('.image_01').hide();
    });
    $('.item_02').hover(function () {
        $('.mask_img').hide();
        $('.image_02').fadeIn();
    }, function () {
        $('.mask_img').show();
        $('.image_02').hide();
    });
    $('.item_03').hover(function () {
        $('.mask_img').hide();
        $('.image_03').fadeIn();
    }, function () {
        $('.mask_img').show();
        $('.image_03').hide();
    });
    $('.item_04').hover(function () {
        $('.mask_img').hide();
        $('.image_04').fadeIn();
    }, function () {
        $('.mask_img').show();
        $('.image_04').hide();
    });
});
