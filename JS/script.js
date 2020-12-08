/*

$(document).ready(function() {
      /* For the sticky navigation */
       $('.js--section-features').waypoint(function(direction) {
          if (direction == "down") {
              $('nav').addClass('sticky');
              } else {
                  $('nav').remove.Class('sticky');
              }
            },{
                offset: '60px;'
            });


            /* Scroll on buttons
            var waypoint = new Waypoint({
                element: document.getElementById('px-offset-waypoint'),
                handler: function(direction) {
                  notify('I am 20px from the top of the window')
                },
                offset: 20 
              })   
});

*/