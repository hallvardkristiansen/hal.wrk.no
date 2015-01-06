var vimeoalbumid = 3195632;

$(function() {  
  logo.build('#logo');
  logo.addevents();
  logo.transition();
  vimeo.getAlbumVideos(vimeoalbumid);
});