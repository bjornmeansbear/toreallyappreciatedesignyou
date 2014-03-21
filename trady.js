
$.getJSON('trady.json', function(data) { 
    
  var randomTrady = data[Math.floor(Math.random()*data.length)];
  console.log(randomTrady);
  $("#tradys p").text(randomTrady);

});

$('#tradys').click(function() {
  document.location.reload(true);
});
