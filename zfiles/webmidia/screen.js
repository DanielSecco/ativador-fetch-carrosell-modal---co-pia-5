////////////////////////////////////////////////////////////////////////////////////////////////
// Mobile scroll cleaner
////////////////////////////////////////////////////////////////////////////////////////////////

// window.addEventListener("load", setupScroll);
// window.addEventListener("resize", setupScroll);

////////////////////////////////////////////////////////////////////////////////////////////////
// Mobile rotation listener
////////////////////////////////////////////////////////////////////////////////////////////////

var rotated 		= false;

// is touch device
function isTouchDevice()
{
	//return (typeof(window.ontouchstart) != 'undefined') ? true : false;
	return isMobile.any;
}

// just on touch devices
if(isTouchDevice())
{
	window.addEventListener("orientationchange", rotation_listener, false);
	rotation_listener();	
}

// show display warning
function rotation_listener()
{

	var $NewOrientation = window.orientation;

	if($NewOrientation == 90 || $NewOrientation == -90) {
		
		$('#Viewport').show(0, function() {
			$('#Warning').fadeOut(750);
		});
		
		rotated = false;

		if(ios) {
		    document.getElementsByTagName('body')[0].style.height = window.innerHeight + 60 + "px";  
		}

		if(android)
		{
			
			console.log('wih '+ window.innerHeight );
			console.log('ash '+ window.screen.height);
			console.log('ch '+ document.body.offsetHeight );
			console.log('bh '+  window.screen.availHeight );
			page.style.height = (window.innerHeight + 56) + 'px';
			setTimeout(scrollTo, 1, 0, 1);
			console.log('sctoll');
			/**/
		}

	}

	else {

		$('#Warning').fadeIn(250, function() {
			$('#Viewport').hide();
		});

		rotated = true;

	}

}