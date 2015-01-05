$(function() {
  function buildlogo() {
    var width = 10;
    var height = Math.sqrt((width * width) - (width / 2) * (width / 2));
    var downtrianglecoords = '0,0  '+width+',0  '+width/2+','+height;
    var uptrianglecoords = width/2+',0  '+width+','+height+'  0,'+height;
    var g = d3.select('#logo').append('g')
      .attr('width', 100)
      .attr('height', 100);
    var triangles = [];
    var coords = [];
    var n = 0;
    var m = 1;
    for (var i = 0; i < 5; i++) {
      var left = (width / 2) * i;
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', downtrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    for (var i = 0; i < 4; i++) {
      var left = (width / 2) * i + (width / 2);
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', uptrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    for (var i = 0; i < 4; i++) {
      var left = (width / 2) * i + width;
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', downtrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    for (var i = 0; i < 3; i++) {
      var left = (width / 2) * i + (width * 1.5);
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', uptrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    
    for (var i = 0; i < 3; i++) {
      var left = (width / 2) * (3 - i) + (width * 3);
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', uptrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    for (var i = 0; i < 4; i++) {
      var left = (width / 2) * (4 - i) + (width * 3);
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', downtrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    for (var i = 0; i < 4; i++) {
      var left = (width / 2) * (4 - i) + (width * 3.5);
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', uptrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    m++;
    for (var i = 0; i < 5; i++) {
      var left = (width / 2) * (5 - i) + (width * 3.5);
      var top = height * i;
      coords[n] = {'x': left, 'y': top, 'i': i, 'm': m};
      triangles[n] = g.append('polygon')        
        .attr('points', downtrianglecoords)
        .attr('fill', '#000000')
        .attr('transform', 'translate('+ left +','+ top + ')');
      n++;
    }
    var colours1 = d3.scale.category20();
    var colours2 = d3.scale.category20b();
    var colours3 = d3.scale.category20c();
    
    console.log(coords);
    for (var i = 0; i < triangles.length; i++) {
      triangles[i].transition()
        .delay(100 * coords[i].i)
        .duration(5000)
        .attr('fill', '#333333')
        .transition()
        .duration(400)
        .attr('fill', colours3(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(400)
        .attr('fill', colours2(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(400)
        .attr('fill', colours1(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(5000)
        .attr('transform', 'translate('+parseFloat(coords[i].x + (coords[i].m)) +','+parseFloat(coords[i].y + (coords[i].i)) +')')
        .transition()
        .duration(400)
        .attr('fill', colours2(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(400)
        .attr('fill', colours3(i))
        .transition()
        .duration(1000)
        .attr('transform', 'translate('+coords[i].x+','+coords[i].y+')')
        .attr('fill', colours1(i))
        .transition()
        .duration(1000)
        .attr('transform', 'translate('+parseFloat(coords[i].x + (coords[i].m)) +','+parseFloat(coords[i].y + (coords[i].i)) +')')
        .attr('fill', colours3(i))
        .transition()
        .duration(400)
        .attr('transform', 'translate('+coords[i].x+','+coords[i].y+')')
        .attr('fill', colours1(i))
        .transition()
        .duration(400)
        .attr('fill', colours2(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(400)
        .attr('fill', colours3(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(2000)
        .attr('fill', colours2(i))
        .transition()
        .duration(2000)
        .attr('transform', 'translate('+parseFloat(coords[i].x + (coords[i].m)) +','+parseFloat(coords[i].y + (coords[i].i)) +')')
        .attr('fill', colours3(i))
        .transition()
        .duration(2000)
        .attr('fill', colours1(i))
        .transition()
        .duration(2000)
        .attr('transform', 'translate('+coords[i].x+','+coords[i].y+')')
        .attr('fill', colours3(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(400)
        .attr('fill', colours2(i))
        .transition()
        .duration(400)
        .attr('fill', '#333333')
        .transition()
        .duration(2000)
        .attr('fill', colours1(i))
        .transition()
        .duration(2000)
        .attr('transform', 'translate('+parseFloat(coords[i].x + (coords[i].m)) +','+parseFloat(coords[i].y + (coords[i].i)) +')')
        .attr('fill', '#000000')
        .transition()
        .duration(2000)
        .attr('transform', 'translate('+coords[i].x+','+coords[i].y+')')
        .attr('fill', colours2(i))
        .transition()
        .duration(2000)
        .attr('fill', colours1(i))
        .transition()
        .duration(2000)
        .attr('fill', colours3(i))
        .transition()
        .duration(2000)
        .attr('fill', colours1(i))
        .transition()
        .duration(2000)
        .attr('fill', colours2(i))
        .transition()
        .duration(2000)
        .attr('fill', colours3(i))
        .transition()
        .duration(2000)
        .attr('fill', '#000000');
    }
  }
  buildlogo();
  
  
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