
$(document).ready(function(){
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#eclipse4').eclipse({
						margin: 10,
						slidesToShow: 1,
						slidesToMove: 1
                });
	}
	else 
	{
		$('#eclipse4').eclipse({
				margin: 20,
				slidesToShow: 3,
				slidesToMove: 1
		});
	}
	
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#eclipse1').eclipse({
						margin: 10,
						slidesToShow: 1,
						slidesToMove: 1
                });
	}
	else 
	{
		$('#eclipse1').eclipse({
				margin: 20,
				slidesToShow: 4,
				slidesToMove: 1
		});
	}
	
	
	if (window.matchMedia('(max-width: 800px)').matches)
	{
		$('#eclipse5').eclipse({
			slidesToShow: 3,
			countIndex: 1,
		});
	}
	else 
	{
		$('#eclipse5').eclipse({
			margin: 50,
			slidesToShow: 5,
			countIndex: 2,
		});
	}
	
});

