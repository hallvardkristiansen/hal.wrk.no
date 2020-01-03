var vimeoalbumid = 3195632;

$(function() {  
  logo.build('#logo');
  logo.addevents();
  logo.transition();
  vimeo.getAlbumVideos(vimeoalbumid);
  setInterval(logo.colourChanger, 1000);
  $(window).resize(function() {
    for (var i = 0; i < vimeo.elements.length; i++) {
      if (typeof vimeo.elements[i].iframe != 'undefined') {
        vimeo.elements[i].iframe.css({
          'height': vimeo.elements[i].iframe.width() / 1.77 + 'px'
        });
      }
    }
  });
  $(window).resize();
});