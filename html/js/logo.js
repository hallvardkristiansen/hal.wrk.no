var logo = {
  'width': 10,
  'height': function() {
    return Math.sqrt((this.width * this.width) - (this.width / 2) * (this.width / 2));
  },
  'grid': [
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
  'polygons': [],
  'coords': [],
  'colours': d3.scale.linear().domain([0, 10, 20]).range(['#ffffff', '#71758a', '#373e60']),
  'colour': function() {return this.colours(Math.random() * 20);},
  'downtrianglecoords': function() {
    return '0,0  '+this.width+',0  '+this.width/2+','+this.height();
  },
  'uptrianglecoords': function() {
    return this.width/2+',0  '+this.width+','+this.height()+'  0,'+this.height();
  },

  'build': function(target) {
    var g = d3.select(target).append('g');
    var top = 0;
    for (var i = 0; i < this.grid.length; i++) {
      this.coords[i] = [];
      this.polygons[i] = [];
      var points = i % 2 ? this.uptrianglecoords() : this.downtrianglecoords();
      var xoffset = this.grid[i].length % 2 ? 0 : this.width/2;
      for (var j = 0; j < this.grid[i].length; j++) {
        var left = this.width * j + xoffset;
        var fill = '#ffffff';
        var opacity = this.grid[i][j] ? 1 : 0.05;
        this.coords[i][j] = {'x': left, 'y': top, 'z': this.grid[i][j] ? '#000000' : '#ffffff', 'o': opacity};
        this.polygons[i][j] = g.append('polygon')        
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
            .attr('fill', logo.colour())
            .attr('opacity', this.coords[i][j].o);
        });
        this.polygons[i][j].on('mouseout', function(d) {
          console.log('out');
        });
        this.polygons[i][j].on('click', function(d) {
          console.log('clicked');
        });
      }
    }
  }
}