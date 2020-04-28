
	
	
	
	var index=0 ;
	var titles=[1,2,3,4,5];
	
	function moveToNextSlide()
	{
	if (index >=titles.length - 1)
	{
		index=-1;
	}
	var img = document.getElementById("img1");
	index = index + 1;
	var slideName = "image/img" + titles[index] + ".jpg";
	img.src=slideName;
	}

	
	
	
	
	function moveToPreviousSlide()
	{
		
	if (index <=0)
	{
		
		index=5;
	}
	var img = document.getElementById("img1");
	index = index - 1;
	var slideName = "image/img" + titles[index] + ".jpg";
	img.src=slideName;
	
	}
	
	
	function moveToFirstSlide()
	{
	
	if (index >=titles.length - 5)
		
		{
			index=1;
		
		}
		
		var img = document.getElementById("img1");
		index = index - 1;
		var slideName = "image/img" + titles[index] + ".jpg";
		img.src=slideName;
		
	}
	
	
	function moveToLastSlide()
	{
		
	if (index<=5)
		
		{
			
			index=0;
			
		}
		
	var img = document.getElementById("img1");
	index = index + 4;
	var slideName = "image/img" + titles[index] + ".jpg";
	img.src=slideName;
	
	}
	
	function moveToRandomSlide()
	{
		var img = document.getElementById("img1");
		var index = Math.floor(Math.random() * titles.length);
		var slideName = "image/img" + titles[index] + ".jpg";
		img.src=slideName;
	
	}

  

	