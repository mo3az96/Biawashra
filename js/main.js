$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$(window).on("load", function () { });
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
            $("body").toggleClass("overflow");
        });

        $('.nav-cont').click(function () {
            $(".nav-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".nav-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
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