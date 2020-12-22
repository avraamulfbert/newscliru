$( document ).ready(function() {
    $('.accordion').accordion({
      heightStyle: 'content',
      header: '.accordion-header',
      active: true
    });
  
    $('.accordion-simple').accordion({
      heightStyle: 'content',
      header: '.accordion-header-simple',
      active: true
    });
});