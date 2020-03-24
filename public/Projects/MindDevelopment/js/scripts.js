

// Animated Pricing Sections

$('.oncard-gold-button').click(function(){
    $('.pricing-container-pink').slideUp(420);
    $('.pricing-container-green').slideUp(420);
    $('.pricing-container-gold').delay(420).slideDown(420);
    $('.more-pricing-information-gold').css('display', 'content');
    $('.pricing-cards-container').css('padding-bottom', '0');
});

$('.oncard-green-button').click(function(){
    $('.pricing-container-pink').slideUp(420);
    $('.pricing-container-gold').slideUp(420);
    $('.pricing-container-green').delay(420).slideDown(420);
    $('.pricing-container-green').css('display', 'content');
    $('.pricing-cards-container').css('padding-bottom', '0');
});

$('.oncard-basic-button').click(function(){
    $('.pricing-container-green').slideUp(420);
    $('.pricing-container-gold').slideUp(420);
    $('.pricing-container-pink').slideUp(420);
    $('.pricing-container-pink').delay(420).slideDown(420);
    $('.pricing-container-pink').css('display', 'content');
    $('.pricing-cards-container').css('padding-bottom', '0');
});

/*
$(window).scroll(function() {
    if ($(document).scrollTop() >820) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
})
*/
