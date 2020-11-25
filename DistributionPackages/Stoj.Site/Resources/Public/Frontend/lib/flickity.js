//flickity
var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  imagesLoaded: true,
  percentPosition: false,
  //autoPlay: 2500,
  selectedAttraction: 0.020,
  friction: 0.25,
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
});

var imgs = elem.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/5;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});

var servicesList = document.querySelector('.services-text');

servicesList.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.list-btn' ) ) {
    return;
  }
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});
