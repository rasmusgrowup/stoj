var grid = document.querySelector('.gallery');

var iso = new Isotope( grid, {
  // options...
  itemSelector: '.gallery-item',
  masonry: {
    columnWidth: '.gallery-item',
	horizontalOrder: true,
	gutter: 10
  }
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Isotope after each image loads
  iso.layout();
});
