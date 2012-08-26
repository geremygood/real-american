$('html').ready(function(){

  var nail = $('#nail')
  


})

  $(window).bind('scroll', function(event) {
      var scroll;
      scroll = document.body.scrollTop;

      if (scroll > 100) { 
        $('#nail').addClass('now');
      }else{
        $('#nail').removeClass('now');        
      }

      if (scroll > 1000) { 
        $('#top-string').addClass('now');
        // reveal string
      }else{
        $('#top-string').removeClass('now');     
      }

      
      if (scroll > 2000) { 
        $('#hoop').addClass('now');
        // Roll in hoop from left.
      }else{
        $('#hoop').removeClass('now');      
      }


      if (scroll > 2500) { 
        $('#web-1').addClass('now');
        // Reveal circle from 12:00 clockwise to 12:00
      }else{
        $('#web-1').removeClass('now');
      }


      if (scroll > 2800) { 
        $('#web-2').addClass('now');
      }else{
        $('#web-2').removeClass('now');      
      }

      if (scroll > 3100) { 
        $('#web-3').addClass('now');
      }else{
        $('#web-3').removeClass('now');      
      }

      if (scroll > 3500) { 
        $('#web-4').addClass('now');
      }else{
        $('#web-4').removeClass('now');
      }

      if (scroll > 3800) { 
        $('#web-5').addClass('now');
      }else{
        $('#web-5').fadeOut() ;     
      }

      if (scroll > 4200) { 
        $('#web-6').addClass('now');
      }else{
        $('#web-6').removeClass('now');      
      }

      if (scroll > 5000) { 
        $('#feather-string').addClass('now');
      }else{
        $('#feather-string').removeClass('now');
      }

      if (scroll > 5200) { 
        $('#bead-3').addClass('now');
      }else{
        $('#bead-3').removeClass('now');      
      }

      if (scroll > 5400) { 
        $('#bead-2').addClass('now');
      }else{
        $('#bead-2').removeClass('now');     
      }
      if (scroll > 5600) { 
        $('#bead-1').addClass('now');
      }else{
        $('#bead-1').removeClass('now');     
      }

      if (scroll > 5800) { 
        $('#feather').addClass('now');
      }else{
        $('#feather').removeClass('now');      
      }

      if (scroll > 7000) { 
        $('#shadow').addClass('now');
      }else{
        $('#shadow').removeClass('now');      
      }
      


  });
