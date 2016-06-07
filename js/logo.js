var logo = {
  'width': 10,
  'height': function() {
    return Math.sqrt((this.width * this.width) - (this.width / 2) * (this.width / 2));
  },
  'icongrid': [],
  'polygons': [],
  'polygroup': {},
  'userisdrawing': false,
  'wipes': [
    function(i, j) {return logo.delay() * 10 * j;},
    function(i, j) {return logo.delay() * 10 * i;},
    function(i, j) {return logo.delay() * 10 * logo.icongrid[i].length - j;},
    function(i, j) {return logo.delay() * 5 * logo.icongrid.length - i;},
    function(i, j) {return logo.delay() * 2 * i * j;},
    function(i, j) {return logo.delay() * j * (logo.icongrid.length - i);},
    function(i, j) {return logo.delay() * (logo.icongrid[i].length - j) * i;}
  ],
  'colours': d3.scale.linear().domain([0, 20]).range(['#909099', '#000000']),
  'colour': function() {return this.colours(Math.random() * 20);},
  'highlight': function(i) {
    return globals.gradients[i](Math.random() * 20);
  },
  'currentColourrange': 0,
  'colourChanger': function() {
    if (!logo.userisdrawing) {
      logo.transition('colour');
    }
  },
  'delay': function() {return (Math.random() * 10) + 5;},
  'downtrianglecoords': function() {
    return '0,0  '+this.width+',0  '+this.width/2+','+this.height();
  },
  'uptrianglecoords': function() {
    return this.width/2+',0  '+this.width+','+this.height()+'  0,'+this.height();
  },

  'build': function(target) {
    this.polygroup = d3.select(target).append('g');
    this.icongrid = globals.matrices.logogrid;
    var top = 0;
    for (var i = 0; i < this.icongrid.length; i++) {
      this.polygons[i] = [];
      var points = i % 2 ? this.uptrianglecoords() : this.downtrianglecoords();
      var xoffset = this.icongrid[i].length % 2 ? 0 : this.width/2;
      for (var j = 0; j < this.icongrid[i].length; j++) {
        var left = this.width * j + xoffset;
        this.polygons[i][j] = this.polygroup.append('polygon')        
          .attr('points', points)
          .attr('fill', '#ffffff')
          .attr('opacity', 0)
          .attr('transform', 'translate('+ left +','+ top + ')')
          .attr('ci', i)
          .attr('cj', j)
          .style('cursor', 'pointer');
      }
      top += i % 2 ? this.height() : 0;
    }
  },
  'transition': function(type) {
    logo.currentColourrange = Math.floor(Math.random() * (globals.gradients.length));
    var wipe = Math.floor(Math.random() * this.wipes.length);
    switch (type) {
      case 'playicon':
        this.icongrid = globals.matrices.playgrid;
        this.polygroup.transition()
          .delay(200)
          .duration(300)
          .attr('transform', 'rotate(-90, 44, 40)');
      break;
      case 'logo':
        this.icongrid = globals.matrices.logogrid;
        this.polygroup.transition()
          .duration(300)
          .attr('transform', 'rotate(0, 44, 40)');
      break;
    }
    for (var i = 0; i < this.icongrid.length; i++) {
      for (var j = 0; j < this.icongrid[i].length; j++) {
        var colour = globals.gradients[this.currentColourrange](globals.matrices.colourorder[0][i][j]);
        var opacity = this.icongrid[i][j] ? 1 : 0;
        this.polygons[i][j].transition()
          .delay(this.wipes[wipe](i, j))
          .duration(500)
          .attr('opacity', opacity)
          .attr('fill', colour);
      }
    }
  },
  'addevents': function() {
    var n = 0;
    var m = 1;
    var reverse = false;
    for (var i = 0; i < this.polygons.length; i++) {
      for (var j = 0; j < this.polygons[i].length; j++) {
        this.polygons[i][j].on('mouseover', function() {
          logo.userisdrawing = true;
          globals.matrices.colourorder[0][d3.select(this).attr('ci')][d3.select(this).attr('cj')] = n;
          reverse = n + m > 20 ? true : reverse;
          reverse = n + m < 0 ? false : reverse;
          m = reverse ? -1 : 1;
          n = n + m;
          d3.select(this).transition()
            .duration(300)
            .attr('fill', globals.gradients[logo.currentColourrange](n));
        });
        this.polygons[i][j].on('mouseout', function() {
          return false;
        });
      }
    }
    this.polygroup.on('mouseover', function() {
      logo.userisdrawing = true;
    }).on('mouseout', function() {
      logo.userisdrawing = false;
    }).on('click', function() {
      console.log(globals.matrices.colourorder[0].join(', '));
      logo.transition('colour');
    });
  }
}