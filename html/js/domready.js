$(function() {
  
  
  logo.build('#logo');
  logo.addevents();
  var changecolor = function() {
    logo.transition();
  };
  setInterval(changecolor, 5000);
  setTimeout(changecolor, 1000);
  
  var iframe = $('#player1')[0];
  var player = $f(iframe);
  var status = $('.status');

  // When the player is ready, add listeners for pause, finish, and playProgress
  player.addEvent('ready', function() {
      status.text('ready');
      
      player.addEvent('pause', onPause);
      player.addEvent('finish', onFinish);
      player.addEvent('playProgress', onPlayProgress);
  });

  // Call the API when a button is pressed
  $('button').bind('click', function() {
    logo.transition('gradientxy');
      player.api($(this).text().toLowerCase());
  });

  function onPause(id) {
      status.text('paused');
  }

  function onFinish(id) {
      status.text('finished');
  }

  function onPlayProgress(data, id) {
      status.text(data.seconds + 's played');
  }
});