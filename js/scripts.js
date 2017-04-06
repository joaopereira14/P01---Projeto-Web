$("#slider-switcher li").on("click", function(event){
    var slider = $(this).attr('data-slide');
    
    $('.cardgeral li').removeClass('ativo').addClass('sides');
    $('#'+slider).addClass('ativo animClick');
    
    $('.cardgeral li').removeClass('animClick movegeral1 movegeral2 movegeral3');
    $('#'+slider).addClass('animClick');

    
//    bullets
    $('#slider-switcher li').removeClass('active');
    $(this).addClass('active');
    
    
});

$(".cardgeral li").on("click", function(event){
    var bullet = $(this).attr('id');
   
    $('.cardgeral li').removeClass('ativo').addClass('sides');
    $(this).removeClass('sides').addClass('ativo');
    
    $("#slider-switcher li").removeClass('active');
    $('[data-slide="'+bullet+'"]').addClass('active');
    
});
