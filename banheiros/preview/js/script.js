var Media = {
	Home: {
		closeModal: function(){
			$('#neve-play a').modal('hide');
		}
	}
}


$( document ).ready(function() {
	$('.logo-container').on('click', function(){
		Media.Home.closeModal();
	})
});
