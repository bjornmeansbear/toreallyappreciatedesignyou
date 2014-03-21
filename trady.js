
$.getJSON('trady.json', function(data) { 
    
  var randomTrady = data.tradys[Math.floor(Math.random()*data.tradys.length)];
  console.log(randomTrady.item);
  $("#tradys p").text(randomTrady.item);

});

$('#tradys').click(function() {
  document.location.reload(true);
});
