var vimeo = {
  'album': {
    'videos': [],
    'info': []
  },
  'elements': [],
  'getAlbumInfo': function(albumId) {
    var that = this;
    that.album.info = {"id":3195632,"created_on":"2015-01-04 06:46:16","last_modified":"2015-10-12 11:19:23","title":"Work","description":"","url":"https:\/\/vimeo.com\/album\/3195632","thumbnail_small":"https:\/\/i.vimeocdn.com\/video\/503118196_100x75.webp","thumbnail_medium":"https:\/\/i.vimeocdn.com\/video\/503118196_200x150.webp","thumbnail_large":"https:\/\/i.vimeocdn.com\/video\/503118196_640.webp","total_videos":7,"user_id":10861193,"user_display_name":"Hallvard Kristiansen","user_url":"https:\/\/vimeo.com\/user10861193"};
  },
  'getAlbumVideos': function(albumId) {
    var that = this;
    that.album.videos = [{
      "title":"CDM.link - Music creators magazine",
      "description":"CDM is an online magazine founded by Peter Kirn in 2004 and read by tens of thousands of artists and producers around the world each day. I have managed the servers and done all development work on the site since 2016. The site is an optimised Wordpress setup with a custom responsive theme.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='http://cdm.link' target='blank'>http://cdm.link</a>",
      "image":"project_imgs/cdm.jpg",
      "link":"http://cdm.link",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Bultmanns Hoff - online butcher",
      "description":"Bultmanns Hoff is an ecological beef farm in northern Germany with a webshop where you can order prime beef delivered straight to your door. I built the site based on Wordpress and Woocommerce on commission by Zentral Norden design agency who provided the designs and are partners in the company.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='https://bultmanns-hoff.de/' target='blank'>https://bultmanns-hoff.de</a>",
      "image":"project_imgs/bultmannshoff.jpg",
      "link":"https://bultmanns-hoff.de/",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "id":115868816,
      "title":"Edgefolio allocators screening tool",
      "description":"One out of several web applications for navigating Hedge Fund performance data. <br \/>\r\nBuilt with Angular.js and D3.js using a Django based Rest API.<br \/>\r\nThe application is designed to work with both desktop and tablets.<br \/>\r\n<br \/>\r\nAn in-depth demo of the application can be viewed here: <a href='https:\/\/vimeo.com\/116943722' target='blank'>https:\/\/vimeo.com\/116943722</a><br \/>\r\n<br \/>\r\nMy role in this project included; managing branding, user experience planning, user interface design and scripting of all widgets and graphs using D3.js from 2013 until 2015.<br \/>\r\n<br \/>\r\nAngular.js framework and HTML\/CSS templates by Ahmet Atasoy.<br \/>\r\nDjango Rest API and data importer by Harish Narayanan and Bastien Bourdon.",
      "url":"https:\/\/vimeo.com\/115868816",
      "width":1280,
      "height":720,
      "tags":"desktop"
      },{
      "id":115864014,
      "title":"Comoyo Capture prototype",
      "description":"The web application aspect of a direct competitor to Dropbox and Google Drive.<br \/>\r\n<br \/>\r\nMy role in this project was all frontend development as well as some UX planning consultancy.<br \/>\r\nDesigned by Bleed and built on top of Netlife's cloud storage Rest API.<br \/>\r\nCreated 2011 - 2012",
      "url":"https:\/\/vimeo.com\/115864014",
      "width":1280,
      "height":720,
      "tags":"desktop"
      },{
      "id":115865949,
      "title":"Eltek return on investment calculator",
      "description":"Generates a printable report on savings from exchanging traditional grid\/generator power systems with Eltek\u2019s solar hybrid systems for GSM base stations.<br \/>\r\n<br \/>\r\nThe maths for calculating operational cost of a power system are extremely complex, taking into account everything from the angle of the sun at a given time and place to the impact of deterioration of components due to heat variations on the cost of maintenance and were all extracted from excel worksheets that had grown too large for practical use. <br \/>\r\n<br \/>\r\nThe web application also allows for better control over aesthetics and allows the users to store and retrieve previous reports.<br \/>\r\n<br \/>\r\nMy role in this project was UX planning, UI design, frontend \/ backend development and reverse engineering and translating the equations necessary to calculate investment and operational costs accurately.<br \/>\r\n<br \/>\r\nThe project was completed and handed over in 2013 and is now being maintained by the client.<br \/>\r\nBuilt on top of Drupal using Twitter Bootstrap and D3.js.",
      "url":"https:\/\/vimeo.com\/115865949",
      "width":1920,
      "height":1080,
      "tags":"desktop"
      },{
      "id":115870939,
      "title":"Recom Farmhouse portfolio website",
      "description":"Retouching company Recom Farmhouse had a portfolio website built in Flash that they wanted to have redone in a mobile-friendly version so I recreated the user interface of the old Flash site using HTML, CSS and JavaScript. <br \/>\r\n<br \/>\r\nI later replaced their proprietary CMS with Drupal. The site features varying image resolutions based on visitors screen resolutions, automatic meta data extraction and indexing, background pre-loading, SEO and social media optimisation and a bunch of other functionality.<br \/>\r\n<br \/>\r\nMy role in this project included design, planning, frontend and backend development from 2008 until 2015.<br \/>\r\n<a href='http://recomfarmhouse.com/' target='blank'>The site can be viewed here: http://recomfarmhouse.com</a>",
      "url":"https:\/\/vimeo.com\/115870939",
      "width":1280,
      "height":720,
      "tags":"desktop"
      },{
      "id":115874769,
      "title":"Recom Farmhouse mobile website",
      "description":"The desktop\/tablet version of their portfolio site has small clickable surfaces that do not translate well to smaller screens, so I created this alternate layout which is more finger-friendly while retaining all of the features of the site.<br \/>\r\n<br \/>\r\nThe site is built on Drupal using jQuery in an MVC-inspired manner.",
      "url":"https:\/\/vimeo.com\/115874769",
      "duration":32,
      "width":1280,
      "height":720,
      "tags":"mobile, horizontal"
      },{
      "id":115873546,
      "title":"Dansens Hus website",
      "description":"Website for Dansens Hus, the Norwegian stage for contemporary dance.<br \/>\r\nBuilt as a custom theme for Wordpress with device detection, the site is planned and designed to work well on both desktop and tablet as well as being easy to manage for the client, incorporating automation of translation services and a custom, automatic image gallery zipping plugin for creating press packages of the events.<br \/>\r\n<br \/>\r\nMy role in this project was designer, user experience planner, frontend and backend developer from 2008 until 2015.",
      "url":"https:\/\/vimeo.com\/115873546",
      "width":1280,
      "height":720,
      "tags":"desktop"
      },{
      "id":115876313,
      "title":"Dansens Hus mobile website",
      "description":"Since a significant number of their users visit the site from mobile devices, I designed and built a more mobile friendly theme for their Wordpress based website. The design incorporates all the functionality of the desktop\/tablet theme while saving some bandwidth by reducing the amount of large images displayed.",
      "url":"https:\/\/vimeo.com\/115876313",
      "width":1280,
      "height":720,
      "tags":"mobile, horizontal"
      }];
    that.drawVideoHTML();
  },
  'drawVideoHTML': function() {
    this.elements = [];
    for (var i = 0; i < this.album.videos.length; i++) {
      var format = this.album.videos[i].tags.indexOf('mobile') >= 0 ? 'mobile' : 'desktop';
      this.elements[i] = {};
      this.elements[i].bgcontainer = $('<div>').attr('class', 'bg ' + (i % 2 ? 'odd' : 'even'));
      this.elements[i].container = $('<div>').attr('class', 'sample center ' + format);
      this.elements[i].graphic = $(globals[format + '_graphic']).attr('class', 'bg ' + format);
      this.elements[i].title = $('<h1>').html(this.album.videos[i].title).attr('class', 'title');
      this.elements[i].description = $('<p>').html(this.album.videos[i].description).attr('class', 'description');
      if (this.album.videos[i].tags.indexOf('link') > 0) {
        this.elements[i].link = $('<a>').attr('href', this.album.videos[i].link).attr('target', 'blank').addClass('image');
        this.elements[i].link.appendTo(this.elements[i].container);
        this.elements[i].image = $('<img>').attr('src', this.album.videos[i].image).attr('alt', this.album.videos[i].title);
        this.elements[i].image.appendTo(this.elements[i].link);
      } else {
        this.elements[i].iframe = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('id', 'player' + i)
          .attr('src', '//player.vimeo.com/video/'+this.album.videos[i].id+'?api=1&player_id=player' + i)
          .attr('width', this.album.videos[i].width)
          .attr('height', this.album.videos[i].height);
        this.elements[i].iframe.appendTo(this.elements[i].container);    
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
      }
      this.elements[i].graphic.appendTo(this.elements[i].container);
      this.elements[i].title.appendTo(this.elements[i].container);
      this.elements[i].description.appendTo(this.elements[i].container);
      this.elements[i].container.appendTo(this.elements[i].bgcontainer);
      this.elements[i].bgcontainer.appendTo('#body');
      
      $(window).resize();
    }
  }
}