/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });
  */
  $('.carousel.carousel-slider').carousel({
    fullWidth: true });
  $('.dropdown-trigger').dropdown();
   $(document).ready(function(){
    $('.sidenav').sidenav();
  });
   $(document).ready(function(){
    $('.carousel').carousel();
  });