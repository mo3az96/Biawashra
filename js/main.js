$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $(".header-fixed").addClass("header-scroll");
            // $("header").css;
        } else {
            $(".header-fixed").removeClass("header-scroll");
        }
    });
    $('.mo-search-icon').click(function () {
        $('.search-cont').fadeIn(500);
        $('.overl').fadeIn(500);
        $('.search-input').focus();
        $("body").addClass("overflow");
    });
    $('.overl').click(function () {
        $('.search-cont').fadeOut(500);
        $('.overl').fadeOut(500);
        $('.search-input').focusout();
        $("body").removeClass("overflow");
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    if ($(window).width() <= 991) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        $(".drop-link .nav-anchor").addClass("mo-accordion");
        $(".drop-ul").addClass("mo-panel");



        $('.mo-menu-icon').click(function () {
            $(".nav-cont").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('.nav-cont').click(function () {
            $(".nav-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".nav-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });



        $('.mo-accordion').click(function () {
            var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
            $(".mo-accordion").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('max-height') == '0px') {
                $(this).siblings().css('max-height', x);
                $(this).siblings().css('padding-top', "15px");
            } else {
                $(this).siblings().css('max-height', '0');
                $(this).siblings().css('padding-top', "0");
            }

            $(".mo-accordion").not(this).siblings().css('max-height', '0');
            $(".mo-accordion").not(this).siblings().css('padding-top', "0");
        })
    }
});