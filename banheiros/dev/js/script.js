var View = {
	Nav: {
		scrollTo: function(element){
			$(window).scrollTo(element,{
			  axis: 'y',
			  duration: 800
			});
		}
	}
}

var Media = {
	Home: {
		startYoutube: function(){
			$(".youtube-media").on("click", function (e) {
			    var jWindow = $(window).width();
			    if ( jWindow <= 768 ) {
			        return;
			    }
			    $.fancybox({
			        href: this.href,
			        type: "iframe"
			    });
			    return false;
			});
		},
		closeModal: function(){
			$('#neve-play a').modal('hide');
		}
	}
}


$( document ).ready(function() {
    // Bind to the shown event.
	/*$("#neve-play a").on("shown.r.modal", function(event) {
	    $(this).stop().fadeOut(300);
	});
	// Bind to the hide event.
	$("#neve-play a").on("hide.r.modal", function(event) {
	    $(this).stop().fadeIn(300);
	});*/
	$('.logo-container').on('click', function(){
		Media.Home.closeModal();
	})
});
