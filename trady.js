
$.getJSON('trady.json', function(data) { 
    
  var randomTrady = data.items[Math.floor(Math.random()*data.items.length)];
  console.log(randomTrady);
  $("#tradys p").text(randomTrady);

});

$('#tradys').click(function() {
  document.location.reload(true);
});
