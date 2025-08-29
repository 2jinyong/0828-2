$(function(){
    $('.circleLeft').click(function(){
        $(this).animate({
            'left':'23px'
        },200);
        $('.circleOff').hide();
    });
});