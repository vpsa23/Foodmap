$(document).ready(function(){

/* 
* PÁGINA PRINCIPAL 
*/

$('#container1').fadeOut(2000);
   


/*
*INPUT
*/
  $('#arabe1').hide();
  $('#arabe2').hide();
  $('#peruana1').hide();
  $('#peruana2').hide();
  $('#venezolana1').hide();
  $('#venezolana2').hide();

  $('.food').change(function(){
    var selectedOption = $('.food option:selected').click();

    $('#venezolana1').hide().val(selectedOption);
    $('#venezolana2').hide().val(selectedOption);
    $('#arabe1').hide().val(selectedOption);
    $('#arabe2').hide().val(selectedOption);
    $('#peruana1').show().val(selectedOption);
    $('#peruana2').show().val(selectedOption);
  })







})