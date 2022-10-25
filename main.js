$('#btnFadeOut').click(function(){
  $('#para1').fadeOut('slow')
});
 $('#btnFadeOut').click(function(){
    $('#para1').fadeIn(3000);
    });

 $('#btnAppend').click(function(){
      $('#para2').append('<h3>Welcome</h3>')
    });
  $('#btnAppend').on('click', function(){
      $('#para2').hide();
     
    });  

$('#btnChangeColor').click(function(){
      $('#para3').css('color', 'red');
    });

  // $('#btnChangeColor').html('<h2>Hello Everybody</h2>');
  // $('#para3').text('<p>Hello Everybody</p>');