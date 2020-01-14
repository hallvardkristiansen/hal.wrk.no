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
      "title":"CDM.link - music creators magazine",
      "description":"CDM is an online magazine founded by Peter Kirn in 2004 and read by tens of thousands of artists and producers around the world each day. I have managed the servers and done all development work on the site since 2016. The site is an optimised Wordpress setup with a custom responsive theme.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='http://cdm.link' target='blank'>http://cdm.link</a>",
      "image":"project_imgs/cdm.jpg",
      "link":"http://cdm.link",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Lean One",
      "description":"Gutenberg compatible Wordpress theme based on Sage by Roots.io for workflow consultancy company Lean One.<br \/>\r\n<br \/>\r\nDesigned by <a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a> and built by me.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='https://leanone.de' target='blank'>https://leanone.de/</a>",
      "image":"project_imgs/leanone.jpg",
      "link":"https://leanone.de/",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Protest-o-mat",
      "description":"Protest banner generator for the climate demonstrations in Berlin 2019.<br \/>\r\n<br \/>\r\nDesigned by <a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a> using Webflow, finalised by me. Image generation script written in python by me.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='https://www.protest-o-mat.org/' target='blank'>https://www.protest-o-mat.org/</a>",
      "image":"project_imgs/protestomat.jpg",
      "link":"https://www.protest-o-mat.org",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Heartbeat-med - patient self-reporting software",
      "description":"New, highly optimized, Gutenberg compatible Wordpress theme for patient reporting software company Heartbeat-med.<br \/>\r\n<br \/>\r\nDesigned by <a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a> and built by me.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='https://heartbeat-med.com' target='blank'>https://heartbeat-med.com</a>",
      "image":"project_imgs/heartbeat.jpg",
      "link":"https://heartbeat-med.com",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Spooning - cookie dough",
      "description":"Spooning cookie dough was featured on \"Die Höle der Löwen\" on September 11th 2018 and as such needed to be highly optimised in preparation for over 30.000 concurrent visitors. Later I integrated the site with Shopify as a custom template built with Slate.<br \/>\r\nMade on commission by <a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a> design agency who provided the designs and are partners in the company.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='https://spooning-cookie-dough.com/' target='blank'>https://spooning-cookie-dough.com</a>",
      "image":"project_imgs/spooning.jpg",
      "link":"https://spooning-cookie-dough.com/",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Bultmanns Hoff - online butcher",
      "description":"Bultmanns Hoff is an ecological beef farm in northern Germany with a webshop where you can order prime beef delivered straight to your door. I built the site based on Wordpress and Woocommerce on commission by <a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a> design agency who provided the designs and are partners in the company.<br \/>\r\n<br \/>\r\nThe site has been taken down, but you can view a case study here: <a href='https://www.<a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a>.com/case-buho' target='blank'>https://www.<a href='https://www.zentralnorden.com/' target='_blank'>Zentralnorden</a>.com/case-buho</a>",
      "image":"project_imgs/bultmannshoff.jpg",
      "link":"https://bultmanns-hoff.de/",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "title":"Bbhugme - maternity products",
      "description":"Fully custom Shopify theme build with Slate for pregnancy pillow manufacturer Bbhugme.<br \/>\r\n<br \/>\r\nDesigned by Creuna and fully built by me.<br \/>\r\n<br \/>\r\nYou can view the site here: <a href='https://www.bbhugme.com/' target='blank'>https://www.bbhugme.com/</a>",
      "image":"project_imgs/bbhugme.jpg",
      "link":"https://www.bbhugme.com/",
      "width":1280,
      "height":720,
      "tags":"desktop link"
      },{
      "id":115868816,
      "title":"Edgefolio allocators screening tool",
      "description":"One out of several web applications for navigating Hedge Fund performance data. <br \/>\r\nBuilt with Angular.js and D3.js using a Django based Rest API.<br \/>\r\nThe application is designed to work with both desktop and tablets.<br \/>\r\n<br \/>\r\nAn in-depth demo of the application can be viewed here: <a href='https:\/\/vimeo.com\/142147126' target='blank'>https:\/\/vimeo.com\/142147126</a><br \/>\r\n<br \/>\r\nMy role in this project included; managing branding, user experience planning, user interface design and scripting of all widgets and graphs using D3.js from 2013 until 2015.<br \/>\r\n<br \/>\r\nAngular.js framework and HTML\/CSS templates by Ahmet Atasoy.<br \/>\r\nDjango Rest API and data importer by Harish Narayanan and Bastien Bourdon.",
      "url":"https:\/\/vimeo.com\/115868816",
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