let c = 0;
let t = setInterval(() => {
  $( ".progress-bar" ).each(function( index ) {
    $(this).css('width', (++c) + '%');
  });
  if(c > 100) clearInterval(t);//
}, 200);