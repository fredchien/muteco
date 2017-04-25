// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function() {
	$('.bgParallax1').each(function(){
		var $obj = $(this);
		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $obj.data('speed')); 
			var bgpos = '50% '+ yPos + 'px';
			$obj.css('background-position', bgpos );
		}); 
	});
	
   

    $('.counter').each(function() {
    var $this = $(this);
    var date = new Date($(this).data("countdown"));
	    $(this).countdown(date, function(event) {
	    	$(".counter-days").html(event.strftime("%-D"));
	        $(".counter-hours").html(("0" + event.strftime("%-H")).slice(-2));
	        $(".counter-mins").html(("0" + event.strftime("%M")).slice(-2));
	        $(".counter-secs").html(("0" + event.strftime("%S")).slice(-2));
	        return false;
	    });
    });
});

$('a[href^="#"]').bind("click.smoothscroll", function(n) {
    n.preventDefault();
    var i = $(window).scrollTop(),
    r = this.hash,
    t = $(r);
    i < 100 ? $("html, body").animate({
        scrollTop: t.offset().top -45 
    }, 1e3) : $("html, body").animate({
        scrollTop: t.offset().top - 60  
    }, 1e3)
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $(".m_menu").css('top', '0').fadeIn( "slow" );
    } else {
        $(".m_menu").css('top', '-300px').fadeIn( "slow" );
    }

});

$comprimento = $(window).width();

if ($comprimento <= 500) {
    $('.banner').removeClass('bgParallax1');
    $('.imagematividade').removeClass('bgParallax1');
    $('.sugestao').removeClass('bgParallax1');
}

$('.jarallax').jarallax({
    speed: 0.2
});