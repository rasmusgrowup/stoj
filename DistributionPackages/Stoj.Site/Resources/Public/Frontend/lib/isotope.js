	var grid = document.querySelector('.gallery');

	var iso = new Isotope( grid, {
	  // options...
	  itemSelector: '.gallery-item',
	  stagger: 3,
	  masonry: {
	    columnWidth: '.gallery-item',
		//horizontalOrder: true,
		gutter: 10
	  }
	});

	// bind filter button click
	var filtersElem = document.querySelector('.filter-button-group');
	filtersElem.addEventListener( 'click', function( event ) {
	  // only work with buttons
	  if ( !matchesSelector( event.target, 'button' ) ) {
	    return;
	  }
	  var filterValue = event.target.getAttribute('data-filter');
	  // use matching filter function
	  iso.arrange({ filter: filterValue });
	});

	// change is-checked class on buttons
	var buttonGroups = document.querySelectorAll('.button-group');
	for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
	  var buttonGroup = buttonGroups[i];
	  radioButtonGroup( buttonGroup );
	}

	function radioButtonGroup( buttonGroup ) {
	  buttonGroup.addEventListener( 'click', function( event ) {
	    // only work with buttons
	    if ( !matchesSelector( event.target, 'button' ) ) {
	      return;
	    }
	    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
	    event.target.classList.add('is-checked');
	  });
	}
