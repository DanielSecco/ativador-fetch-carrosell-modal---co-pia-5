
  var ua 		= navigator.userAgent,
	iphone 	= ~ua.indexOf('iPhone') || ~ua.indexOf('iPod'),
	ipad 	= ~ua.indexOf('iPad'),
	ios 	= iphone || ipad,

	// Detect if this is running as a fullscreen app from the homescreen
	fullscreen 	= window.navigator.standalone,
	android 	= ~ua.indexOf('Android'),
	lastWidth 	= 0;


/* 
var setupScroll = window.onload = function() {
  // Start out by adding the height of the location bar to the width, so that
  // we can scroll past it
  if (ios) {
    // iOS reliably returns the innerWindow size for documentElement.clientHeight
    // but window.innerHeight is sometimes the wrong value after rotating
    // the orientation
    var height = document.documentElement.clientHeight;
    // Only add extra padding to the height on iphone / ipod, since the ipad
    // browser doesn't scroll off the location bar.
    if (iphone && !fullscreen) height += 60;
    page.style.height = height + 'px';
  } else if (android) {
    // The stock Android browser has a location bar height of 56 pixels, but
    // this very likely could be broken in other Android browsers.
    page.style.height = (window.innerHeight + 56) + 'px'
  }
  // Scroll after a timeout, since iOS will scroll to the top of the page
  // after it fires the onload event
  setTimeout(scrollTo, 0, 0, 1);
  callFullScreen();
  
};

(window.onresize = function() {
  var pageWidth = page.offsetWidth;
  // Android doesn't support orientation change, so check for when the width
  // changes to figure out when the orientation changes
  if (lastWidth == pageWidth) return;
      lastWidth = pageWidth;

  setupScroll();

})();

// callFullScreen();

window.onload = function()
{
  if(ios) {
    document.getElementsByTagName('body')[0].style.height = window.innerHeight + 60 + "px";  
  }

  else if(android) {
    page.style.height = (window.innerHeight + 56) + 'px';
    setTimeout(scrollTo, 0, 0, 1);
    /*
    difference = (window.screen.height - window.innerHeight);
    console.log();
    
    console.log(document.getElementsByTagName('body')[0].style.top = - difference + 'px' );
    * /
    // windowsHeight = window.screen.height;

    // document.getElementsByTagName('body')[0].style.height = window.screen.height + 60 +'px';
    // console.log(windowsHeight);
  }
  
}*/
