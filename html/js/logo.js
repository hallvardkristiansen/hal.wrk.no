var logo = {
  'width': 10,
  'height': function() {
    return Math.sqrt((this.width * this.width) - (this.width / 2) * (this.width / 2));
  },
  'logogrid': [
    [false, false, false,  false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
    [false, false, false,  false,  false,  false,  false,  false,  false],
    [false, true,  true,   false,  false,  false,  true,   true,  false],
        [false, true,  true,   false,  false,  true,   true,  false],
        [false, true,  true,   false,  false,  true,   true,  false],
    [false, false, true,   true,   false,  true,   true,   false,  false],
    [false, false, true,   true,   false,  true,   true,   false,  false],
        [false, false, true,   true,   true,   true,   false,  false],
        [false, false, true,   true,   true,   true,   false,  false],
    [false, false, false,  true,   false,  true,   false,  false,  false],
    [false, false, false,  true,   false,  true,   false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
    [false, false, false,  false,  false,  false,  false,  false,  false],
    [false, false, false,  false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
  ],
  'playgrid': [
    [false, false, false,  false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
    [false, false, false,  false,  false,  false,  false,  false,  false],
    [false, true,  true,   true,  true,  true,  true,   true,  false],
        [false, true,  true,   true,  true,  true,   true,  false],
        [false, true,  true,   true,  true,  true,   true,  false],
    [false, false, true,   true,   true,  true,   true,   false,  false],
    [false, false, true,   true,   true,  true,   true,   false,  false],
        [false, false, true,   true,   true,   true,   false,  false],
        [false, false, true,   true,   true,   true,   false,  false],
    [false, false, false,  true,   true,  true,   false,  false,  false],
    [false, false, false,  true,   true,  true,   false,  false,  false],
        [false, false, false,  true,  true,  false,  false,  false],
        [false, false, false,  true,  true,  false,  false,  false],
    [false, false, false,  false,  true,  false,  false,  false,  false],
    [false, false, false,  false,  true,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
  ],
  'mailgrid': [
    [false, false, false,  false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
    [false, false, false,  false,  false,  false,  false,  false,  false],
    [false, true,  true,   true,  true,  true,  true,   true,  false],
        [false, true,  true,   true,  true,  true,   true,  false],
        [false, true,  true,   true,  true,  true,   true,  false],
    [false, false, true,   true,   true,  true,   true,   false,  false],
    [false, false, true,   true,   true,  true,   true,   false,  false],
        [false, false, true,   true,   true,   true,   false,  false],
        [false, false, true,   true,   true,   true,   false,  false],
    [false, false, false,  true,   true,  true,   false,  false,  false],
    [false, false, false,  true,   true,  true,   false,  false,  false],
        [false, false, false,  true,  true,  false,  false,  false],
        [false, false, false,  true,  true,  false,  false,  false],
    [false, false, false,  false,  true,  false,  false,  false,  false],
    [false, false, false,  false,  true,  false,  false,  false,  false],
        [false, false, false,  false,  false,  false,  false,  false],
  ],
  'polygons': [],
  'polygroup': {},
  'coords': [],
  'colours': d3.scale.linear().domain([0, 20]).range(['#ffffff', '#71758a']),
  'colour': function() {return this.colours(Math.random() * 20);},
  'downtrianglecoords': function() {
    return '0,0  '+this.width+',0  '+this.width/2+','+this.height();
  },
  'uptrianglecoords': function() {
    return this.width/2+',0  '+this.width+','+this.height()+'  0,'+this.height();
  },

  'build': function(target) {
    this.polygroup = d3.select(target).append('g');
    var top = 0;
    for (var i = 0; i < this.logogrid.length; i++) {
      this.coords[i] = [];
      this.polygons[i] = [];
      var points = i % 2 ? this.uptrianglecoords() : this.downtrianglecoords();
      var xoffset = this.logogrid[i].length % 2 ? 0 : this.width/2;
      for (var j = 0; j < this.logogrid[i].length; j++) {
        var left = this.width * j + xoffset;
        var fill = '#ffffff';
        var opacity = this.logogrid[i][j] ? 1 : 0;
        this.coords[i][j] = {'x': left, 'y': top, 'z': this.logogrid[i][j] ? '#000000' : '#ffffff', 'o': opacity};
        this.polygons[i][j] = this.polygroup.append('polygon')        
          .attr('points', points)
          .attr('fill', fill)
          .attr('opacity', opacity)
          .attr('transform', 'translate('+ left +','+ top + ')');
      }
      top += i % 2 ? this.height() : 0;
    }
  },
  'transition': function(type) {
    switch (type) {
      case 'gradientx':
        for (var i = 0; i < this.polygons.length; i++) {
          for (var j = 0; j < this.polygons[i].length; j++) {
            this.polygons[i][j].transition()
              .delay(50 * j + 1000)
              .duration(600)
              .attr('fill', '#eeeeee')
              .transition()
              .duration(600)
              .attr('fill', this.coords[i][j].z);
          }
        }
      break;
      case 'gradienty':
        var c = this.colour();
        for (var i = 0; i < this.polygons.length; i++) {
          for (var j = 0; j < this.polygons[i].length; j++) {
            this.polygons[i][j].transition()
              .delay(50 * i + 1000)
              .duration(600)
              .attr('fill', c)
              .transition()
              .duration(600)
              .attr('fill', this.coords[i][j].z);
          }
        }
      break;
      case 'gradientxy':
        for (var i = 0; i < this.polygons.length; i++) {
          for (var j = 0; j < this.polygons[i].length; j++) {
            this.polygons[i][j].transition()
              .delay(10 * i * j + 1000)
              .duration(600)
              .attr('fill', '#eeeeee')
              .transition()
              .duration(600)
              .attr('fill', this.coords[i][j].z);
          }
        }
      break;
      case 'playicon':
        var c = this.colour();
        for (var i = 0; i < this.playgrid.length; i++) {
          for (var j = 0; j < this.playgrid[i].length; j++) {
            var fill = this.playgrid[i][j] ? '#000000' : '#ffffff';
            var opacity = this.playgrid[i][j] ? 1 : 0;
            this.polygons[i][j].transition()
              .delay(100 * j)
              .duration(500)
              .attr('fill', c)
              .transition()
              .duration(500)
              .attr('opacity', opacity)
              .attr('fill', logo.colour());
          }
        }
        this.polygroup.transition()
          .duration(300)
          .attr('transform', 'rotate(-90, 44, 40)');
      break;
      case 'logo':
        var c = this.colour();
        for (var i = 0; i < this.logogrid.length; i++) {
          for (var j = 0; j < this.logogrid[i].length; j++) {
            var fill = this.logogrid[i][j] ? '#000000' : '#ffffff';
            var opacity = this.logogrid[i][j] ? 1 : 0;
            this.polygons[i][j].transition()
              .delay(100 * i)
              .duration(500)
              .attr('fill', c)
              .transition()
              .duration(500)
              .attr('fill', fill)
              .attr('opacity', opacity);
          }
        }
        this.polygroup.transition()
          .duration(300)
          .attr('transform', 'rotate(0, 44, 40)');
      break;
      default:
        var c = this.colour();
        for (var i = 0; i < this.polygons.length; i++) {
          for (var j = 0; j < this.polygons[i].length; j++) {
            this.polygons[i][j].transition()
              .delay(50 * i * j)
              .duration(500)
              .attr('fill', c)
              .transition()
              .duration(500)
              .attr('fill', this.coords[i][j].z)
              .attr('opacity', this.coords[i][j].o);
          }
        }
      break;
    }
  },
  'addevents': function() {
    for (var i = 0; i < this.polygons.length; i++) {
      for (var j = 0; j < this.polygons[i].length; j++) {
        this.polygons[i][j].on('mouseover', function(d) {
          d3.select(this).transition()
            .duration(300)
            .attr('fill', logo.colour());
        });
        this.polygons[i][j].on('mouseout', function(d) {
          return false;
        });
        this.polygons[i][j].on('click', function(d) {
          console.log('clicked');
        });
      }
    }
  }
}