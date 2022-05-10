
    // $('.img-popup').magnificPopup({type:'image'});

  $('.img-popup').magnificPopup({
     // child items selector, by clicking on it popup will open
    type: 'image',
    mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},

        zoom: {
			enabled: true,
			duration: 800, // don't foget to change the duration also in CSS
			easing:'ease-in-out',
			}

  });


  