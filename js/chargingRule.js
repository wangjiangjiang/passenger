$(function(){
	tabs();
	function tabs(){
		$('.headTag li').on('click',function(){
			$('.headTag li').removeClass('currChoice');
			$(this).addClass('currChoice');
		});
	}
})

