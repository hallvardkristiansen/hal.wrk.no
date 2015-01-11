var vimeo = {
  'album': {
    'videos': [],
    'info': []
  },
  'elements': [],
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
    this.elements = [];
    for (var i = 0; i < this.album.videos.length; i++) {
      var format = this.album.videos[i].tags.indexOf('mobile') >= 0 ? 'mobile' : 'desktop';
      console.log(this.album.videos[i]);
      this.elements[i] = {};
      this.elements[i].container = $('<div>').attr('class', 'sample center ' + format);
      this.elements[i].graphic = $(globals[format + '_graphic']).attr('class', 'bg ' + format);
      this.elements[i].iframe = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('id', 'player' + i)
        .attr('src', '//player.vimeo.com/video/'+this.album.videos[i].id+'?api=1&player_id=player' + i)
        .attr('width', this.album.videos[i].width)
        .attr('height', this.album.videos[i].height);
      this.elements[i].title = $('<h1>').html(this.album.videos[i].title).attr('class', 'title');
      this.elements[i].description = $('<p>').html(this.album.videos[i].description).attr('class', 'description');
      this.elements[i].iframe.appendTo(this.elements[i].container);
      this.elements[i].graphic.appendTo(this.elements[i].container);
      this.elements[i].title.appendTo(this.elements[i].container);
      this.elements[i].description.appendTo(this.elements[i].container);
      this.elements[i].container.appendTo('#body');
  
      this.elements[i].player = $f(this.elements[i].iframe[0]);
    
      // When the player is ready, add listeners for pause, finish, and playProgress
      this.elements[i].player.addEvent('ready', function(el) {
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
      $(window).resize();
    }
  }
}