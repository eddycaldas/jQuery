
$(document).ready(function() {
  $(".content-box").click(function () {
    $(".content-box").animate( {
      width: '500px',
      height: '+=200px'
    }, 1000 );
    $('.content-after').show().animate( { opacity: 1 }, 3000 )
  });
});