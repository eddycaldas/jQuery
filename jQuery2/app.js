// $(document).ready(function() {
//   $('#menu-toggle').click(function() {
//     $('#side-nav').toggle(1000, function() {
//       alert('Hi there');
//     });
//   })
// })
// 
$(document).ready(function() {
  $('#menu-toggle').click(function() {
    $('#side-nav').toggle(1000);
  })

  $('.info-title').click(function() {
    $('.info-content').slideToggle();
});

})