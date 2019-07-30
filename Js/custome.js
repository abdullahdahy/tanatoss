/* global, $, alert, consol */

$(document).ready(function () {
    
    'use strict';
    
    //scroll
    
    $(function () {
        $("html").niceScroll({
            cursorcolor: '#f7600e',
            cursorwidth: '10px',
            cursorborder: 'none'
        });
    });
    
    //adjust header height
    
    var mySlider = $('.slider');
    
    $('.header').height($(window).height());
    
    $(window).resize(function () {
        
        $('.header').height($(window).height());
        
    });
    
    
    // arrow
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
        
    });
    
    // show hidden
    $('.our-work .show-more').click(function () {
        $('.our-work .hidden').fadeIn(2000);
    });
    
    
    // check testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    function checkClients() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkClients();
    
    $('.testim i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
    
    
});