$(document).ready(function() {
  $(".clickable").click(function() {
    var elements = ['h1', 'p', 'img'];

    elements.forEach(function(element){
    alert('You have clicked on ' + element + "!")

    });
  });
});
