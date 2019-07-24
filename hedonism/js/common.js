$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});


$("a.ancLinks").click(function () { 
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').animate( { scrollTop: destination }, 1100 );
          return false;
    });

 $('#autoWidth').lightSlider({
        item:1,
        mode:'fade',
        auto: true,
        pause: 2500,
        speed: 600,
        pager: false,
        controls: false,
        loop: true,
        enableTouch: false,
        enableDrag:false
    });  

function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('a.button'), 0).forEach(function(bt) {
  bt.addEventListener('mouseover', function(e) {
    e.preventDefault();
  });

});

initBt8();



// Button 8
function initBt8() {
  var bt = document.querySelectorAll('#component-8')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
  
  bt.addEventListener('mouseover',  function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}


function initMap() {
        var marker_lat = 50.463333;
        var marker_lng = 30.545;
        var map_lat = 50.4633125;
        var map_lng = 30.5449034;
        var icon = {
          url: 'img/map.svg'
        };



        if (($(window).width()) < 890 ) {
          map_lat = marker_lat;
          map_lng = marker_lng;
        }

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: map_lat, lng: map_lng},
          scrollwheel: false,
          zoom: 15,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#ff6e76'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#e9e9ea'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#454546'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#454546'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#454546'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#ff6e76'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#454546'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#e9e9ea'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#e9e9ea'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#454546'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#e9e9ea'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#e9e9ea'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#e9e9ea'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#454546'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#454546'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#ce5057'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ce5057'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#ce5057'}]
            }
          ]
        });
        var width = $(window).width();

        var isDraggable;

        var marker = new google.maps.Marker({
          position: {lat: 64.535579, lng: 40.5231489},
          map: map,
          icon: icon,
          title: ' Труханов остров, Киев, город Киев '
        });

        if (width <= 890) {
          isDraggable = false;
        }
        else isDraggable = true;
        map.setOptions({
          
                    mapTypeControl: true,
                    zoomControl: true,
                    scaleControl: true,
                    disableDefaultUI: true,
                    scrollwheel: false,
                    draggable: isDraggable});
 }