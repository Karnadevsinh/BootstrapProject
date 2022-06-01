$(document).ready(function() {
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else
        {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause'); 
        }
    });        

    $('#reserve').click('on', function(e){
        $('#reserveTable').modal('toggle');
    
    }); 

    $('#loginbtn').click('on', function(e){
        $('#loginModal').modal('toggle');
    });

    $('.closebtn').click('on', function(e){
        $('#reserveTable').modal('hide');
        $('#loginModal').modal('hide');
    });              
});
