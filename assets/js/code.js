$(document).ready(function () {
    $(".contentinfo").hide();
    $("#content1").show();
    trainmove();
});

$('#content1button').on("click", function () {
    $(".contentinfo").hide();
    $("#content1").show();
    trainmove();
});

$('#content2button').on("click", function () {
    $(".contentinfo").hide();
    $("#content2").show();
    trainmove();
});

$('#content3button').on("click", function () {
    $(".contentinfo").hide();
    $("#content3").show();
    trainmove();
});

$('#content4button').on("click", function () {
    $(".contentinfo").hide();
    $("#content4").show();
    trainmove();
});

$('#content5button').on("click", function () {
    $(".contentinfo").hide();
    $("#content5").show();
    trainmove();
});

$('#content6button').on("click", function () {
    $(".contentinfo").hide();
    $("#content6").show();
    trainmove();
});

$('#content7button').on("click", function () {
    $(".contentinfo").hide();
    $("#content7").show();
    trainmove();
});

function trainmove(){
    $( "#train" ).css({
    left:"-70%",
  });
    $("#train").animate({
        left: "+=70%",
    }, 1000, function () {
        // Animation complete.
    });
};

//Timeline 
jQuery(document).ready(function ($) {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function () {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        $timeline_block.each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});