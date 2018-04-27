////////////////////////////////////////////////////////////////////////////////////////////////
// Carrousel Constructor
////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() 
{	


	if (android) {
	}


	$('#Viewport').fullpage({
		easing: 'easeInOutCubic',
	    easingcss3: 'ease',

	    keyboardScrolling: true,
	    animateAnchor: true,
	    recordHistory: true,
	    navigation: true,

	    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex) {
	    	//
		},

		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			onPageLeave(index, nextIndex, direction, leavingSection);
		},

		afterResize: function() {
			onPageResize();
		},

		afterRender: function() {
			onPageRender();
		}

	});
	
    $('#Loading').delay(1000).fadeOut();

});


////////////////////////////////////////////////////////////////////////////////////////////////
// Viewport's Callbacks
////////////////////////////////////////////////////////////////////////////////////////////////

function onPageResize() {

	var windowHeight = window.innerHeight;
	// console.log('wh '+ windowHeight);
	// document.getElementsByTagName('body')[0].style.height = windowHeight + 60 + "px";
	// console.log('bh ' +document.body.style.height);
  	// setTimeout(scrollTo, 0, 0, 1);
	console.log('resized');
}


function onPageRender() {

	/*
    $('#Viewport').css('border', '3px solid black'); 
    $('#Viewport').css('height', window.screen.height + "px");
    $('.fp-table, .fp-tableCell').css('height', window.screen.height + "px !important");
    */
    
}

function onPageLeave(index, nextIndex, direction, object) {
	// console.log('de: '+ index +' para: '+ nextIndex +' direção: '+ direction);
	//console.log(object);

	// _gaq.push(['_trackEvent', 'Section', 'View', el ]);
	// _gaq.push(["_trackPageview", "/" + el ]);

	var arrWhite   	= [5];
	var arrBig   	= [1,5];

	// change image source
	if( jQuery.inArray( nextIndex , arrWhite ) >= 0) {
		$('.AnCLogo').fadeOut('fast', function(){
			$('.AnCLogo').attr('src', 'assets/svg/anc_white.svg');
			$('.AnCLogo').fadeIn();
		});		
	}

	else {
		$('.AnCLogo').fadeOut('fast', function(){
			$('.AnCLogo').attr('src', 'assets/svg/anc.svg');
			$('.AnCLogo').fadeIn();
		});	
	}

	// change logo size
	if( jQuery.inArray( nextIndex , arrBig ) >= 0) {
		$('.AnCLogo').removeClass('Small');
		$('#Menu ul').removeClass('Small');
	}

	else {
		$('.AnCLogo').addClass('Small');
		$('#Menu ul').addClass('Small');
	}


}