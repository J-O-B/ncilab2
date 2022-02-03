$(document).ready(function(){
    $('#cover-letter').hide();
    let applyHeight = $(window).height() - $('nav').outerHeight();
    $('#cover-header').css('height', applyHeight);
    
    let measure = applyHeight - $('.measure').outerHeight();
    $('.measure').css('margin-top', measure / 3);
});

$('#cover-button').click(function(){
    $('#cover-header').hide(1000, function(){
        $('#cover-letter').slideDown(1000);
    });
});
$('#show-cover-page').click(function(){
    $('#cover-letter').hide(1000, function(){
        $('#cover-header').show(500);
    });
});