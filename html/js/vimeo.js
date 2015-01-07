var vimeo = {
  'album': {
    'videos': [],
    'info': []
  },
  'getAlbumInfo': function(albumId) {
    var that = this;
    $.ajax({
      url: 'http://vimeo.com/api/v2/album/'+albumId+'/info.json',
      success: function(response) {
        that.album.info = response;
      }
    });
  },
  'getAlbumVideos': function(albumId) {
    var that = this;
    $.ajax({
      url: 'http://vimeo.com/api/v2/album/'+albumId+'/videos.json',
      success: function(response) {
        that.album.videos = response;
        that.drawVideoHTML();
      }
    });
  },
  'drawVideoHTML': function() {
    var players = [];
    var elements = [];
    for (var i = 0; i < this.album.videos.length; i++) {
      elements[i] = {};
      elements[i].container = $('<div>').attr('class', 'sample');
      elements[i].iframe = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('id', 'player' + i)
        .attr('src', '//player.vimeo.com/video/'+this.album.videos[i].id+'?api=1&player_id=player' + i)
        .attr('width', 630)
        .attr('height', 354);
      elements[i].iframe.appendTo(elements[i].container);
      elements[i].container.appendTo('#body');
  
      players[i] = $f(elements[i].iframe[0]);
    
      // When the player is ready, add listeners for pause, finish, and playProgress
      players[i].addEvent('ready', function(el) {
        var player = $f($('#'+el)[0]);
        player.addEvent('play', function() {
          logo.transition('playicon');
        });
        player.addEvent('pause', function() {
          logo.transition('logo');
        });
        player.addEvent('finish', function() {
          logo.transition('logo');
        });
        player.addEvent('playProgress', function() {
          return false;
        });
      });    
    }
  }
}