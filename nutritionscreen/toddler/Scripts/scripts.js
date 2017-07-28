$(document).ready(function(){

	if ($.browser.msie && $.browser.version == 10) {
	  $("html").addClass("ie9");
	}

    // open/close "What you are doing well" and "Room for improvement" sections
    /*$('.results_page .results_good a').click(function(e){
        e.preventDefault();
        if($('.results_list.good').hasClass('hidden')){
            $('.results_list.good').removeClass('hidden');
        } else {
            $('.results_list.good').addClass('hidden');
        }
    });
    $('.results_page .results_bad a').click(function(e){
        e.preventDefault();
        if($('.results_list.bad').hasClass('hidden')){
            $('.results_list.bad').removeClass('hidden');
        } else {
            $('.results_list.bad').addClass('hidden');
        }
    });*/
    
    // open/close feedback for each question
	$('.results_page .div_open_close').click(function (e) {
        e.preventDefault();
        var parent = $(this);
        if(parent.hasClass('open')){
            parent.removeClass('open');
            $(this).find('.open_close_results a').html('Open Answer');
            parent.next().removeClass('open');
        } else {
            parent.addClass('open');
            $(this).find('.open_close_results a').html('Close Answer');
            parent.next().addClass('open');
        }
    });
    
    // open/close "learn more" section
    $('.results_page .learn_more_button a').click(function(e){
        e.preventDefault();
        var container = $(this).parent().parent().next();
        if(container.hasClass('hidden')){
            container.removeClass('hidden');
        } else {
            container.addClass('hidden');
        }
    });

});