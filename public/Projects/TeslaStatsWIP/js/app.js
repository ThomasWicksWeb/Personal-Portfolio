$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        $('#nav-responsive').slideToggle(100).toggleClass('box');
    });
    
    // Upsize styling change to .pricingContainer
    $(window).resize(function () {
        if ($(window).width() >= 1088) {
            $('#nav-responsive').css({
                'display': 'flex',
            });
        }
    });
    
    $(window).resize(function () {
        if ($(window).width() <= 1087) {
            $('#nav-responsive').css({
                'display': 'none',
            });
            $('#nav-responsive').removeClass('box');
        }
    });

    $('#MSBtn').click(function () {
        $('#modelSCont').show();
        $('#modelXCont').hide();
        $('#model3Cont').hide();
        $('#tab1').addClass('is-active');
        $('#tab2').removeClass('is-active');
        $('#tab3').removeClass('is-active');
    });

    $('#MXBtn').click(function () {
        var url = $(this).attr('href');
        $('#ajaxSec').load('MX.html');
        $('#modelSCont').hide();
        $('#model3Cont').hide();
        $('#tab3').addClass('is-active');
        $('#tab1').removeClass('is-active');
        $('#tab2').removeClass('is-active');
        return false;
    });

    $('#M3Btn').click(function () {
        var url = $(this).attr('href');
        $('#ajaxSec').load('M3.html');
        $('#modelSCont').hide();
        $('#modelXCont').hide();
        $('#tab2').addClass('is-active');
        $('#tab1').removeClass('is-active');
        $('#tab3').removeClass('is-active');
        return false;
    });

}); // End Doc.Ready