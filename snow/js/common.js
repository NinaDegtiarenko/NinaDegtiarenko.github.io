$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
    
});
$(document).ready(function() {
	//Google Fonts
	WebFontConfig = {
    google: { families: [ 'Roboto::latin,cyrillic' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


    $(function() {
        $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // The height and width of the iFrame should be the same as parent
           var iframe = $('<iframe/>', {'frameborder': '0', 'allowfullscreen' : '1', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
    });
    $("a.ancLinks").click(function () { 
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').animate( { scrollTop: destination }, 2000 );
          return false;
    });

    $( "input[name='name']" ).change(function() {
      var  input = $(this).val();
      document.getElementById('name_client').innerHTML = input; 
    });

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

        var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
      },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
    );
        wow.init();

    $('.video-bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        mode: 'fade'
    });


    


  //   (function($){

  //       function animateNumbers() {$('.count').each(function () {
  //          $(this).prop('Counter',0).animate({
  //            Counter: $(this).text()
  //        }, {
  //            duration: 2700,
  //            easing: 'swing',
  //            step: function (now) {
  //              $(this).text(Math.ceil(now));
  //          }
  //      });
  //      });}

  //       emergence.init({
  //         container: null,
  //         throttle: 250,
  //         reset: true,
  //         handheld: true,
  //         elemCushion: 0.5,
  //         offsetTop: 0,
  //         offsetRight: 0,
  //         offsetBottom: 0,
  //         offsetLeft: 0,
  //         callback: function(element, state) {
  //             if (state === 'visible') {
  //               if (!$('.numberof').hasClass('number-animated')) {
  //                 $('.numberof').addClass('count');
  //                 animateNumbers();
  //                 $('.numberof').addClass('number-animated');
  //             }
  //         }
  //     }
  // });

  //   })(jQuery);

  $('input[name="name"]').val(localStorage.name);
  $('input[name="email"]').val(localStorage.email);
  $('input[name="phone"]').val(localStorage.tel);



  //   (function($){

  //       function animateNumbers() {$('.count').each(function () {
  //          $(this).prop('Counter',0).animate({
  //            Counter: $(this).text()
  //        }, {
  //            duration: 2700,
  //            easing: 'swing',
  //            step: function (now) {
  //              $(this).text(Math.ceil(now));
  //          }
  //      });
  //      });}

  //       emergence.init({
  //         container: null,
  //         throttle: 250,
  //         reset: true,
  //         handheld: true,
  //         elemCushion: 0.5,
  //         offsetTop: 0,
  //         offsetRight: 0,
  //         offsetBottom: 0,
  //         offsetLeft: 0,
  //         callback: function(element, state) {
  //             if (state === 'visible') {
  //               if (!$('.numberof').hasClass('number-animated')) {
  //                 $('.numberof').addClass('count');
  //                 animateNumbers();
  //                 $('.numberof').addClass('number-animated');
  //             }
  //         }
  //     }
  // });

  //   })(jQuery);
    
    $('.accordeon__trigger').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            item  = $this.closest('.accordeon_item'),
            list  = $this.closest('.accordeon__list'),
            items = list.find('.accordeon_item'),
            content = item.find('.accordeon__inner'),
            otherContent = list.find('.accordeon__inner'),
            duration = 500;

        if (!item.hasClass('active')){
            items.removeClass('active');
            item.addClass('active');

            otherContent.stop(true, true).slideUp(duration);
            content.slideDown(duration);
        } else {
            content.slideUp(duration);
            item.removeClass('active');
        }

    })

    
    // $('.countdown').downCount({
    //         date: '09/10/2016 12:00:00',
    //         offset: +10
    //     }, function () {
    //     });
    $('input').each(function() {

    $(this).on('focus', function() {
      $(this).parent('.field').addClass('active');
    });

    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.field').removeClass('active');
      }
    });

    if ($(this).val() != '') $(this).parent('.field').addClass('active');

  });
    $('textarea').each(function() {

    $(this).on('focus', function() {
      $(this).parent('.field').addClass('active');
    });

    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.field').removeClass('active');
      }
    });

    if ($(this).val() != '') $(this).parent('.field').addClass('active');

  });

//Форма отправки 2.0 //
$(function() {
    $("[name=send]").click(function () {
        $(":input.error").removeClass('error');
        $(".allert").remove();
        
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input');
        var send_btn = btn.closest('form').find('[name=send]');
        var send_options = btn.closest('form').find('[name=campaign_token]');

        $(ref).each(function() {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заповніть це поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Вкажіть коректний e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9-+]{9,18}/i;
                if ( $(this).attr("type") == 'tel') {
                    if(!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Вкажіть коректний номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
        if(!(error==1)) {
            $(send_btn).each(function() {
                $(this).attr('disabled', true);
            });
            $(send_options).each(function() {
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: function() {
                            if($(send_btn).hasClass('text_btn1')){
                              $('#select_vis').html('Ти зробив правильний вибір! Це буде справжня подорож у казку і найкращий подарунок собі та рідним! Замовляй поїздку просто зараз за номером <a href="tel:0636569495" class="modal-ok-massage">(063) 656-94-95</a>!');
                            }
                            if($(send_btn).hasClass('text_btn2')){
                              $('#select_vis').html('Ти зробив правильний вибір! Адже це буде справжня подорож у казку. Ти зробив найкращий подарунок собі та рідним. Готуйтеся відкривати для себе дивовижну країну Свята в першій козацькій столиці, Чигирині. Більше інформації ти знайдеш тут <a href="https://www.youtube.com/watch?v=K33cuWRabiA" class="modal-ok-massage" target="_blank">https://www.youtube.com/watch?v=K33cuWRabiA</a>');
                            }
                            if($(send_btn).hasClass('text_btn3')){
                              $('#select_vis').html('Ти зробив правильний вибір! Адже це буде справжня подорож у казку.  Ти зробиш найкращий подарунок собі та рідним. Готуйтеся відкривати для себе дивовижну країну Свята в першій козацькій столиці, Чигирині. Чекай на наш дзвінок, а поки що більше інформації ти знайдеш тут <a href="https://www.youtube.com/watch?v=K33cuWRabiA" class="modal-ok-massage" target="_blank">https://www.youtube.com/watch?v=K33cuWRabiA</a> якщо тобі сподобалося, то замов поїздку не відкладаючи на завтра за номером <a href="tel:0636569495" class="modal-ok-massage">(063) 656-94-95</a>!');
                            }
                            localStorage.name = $('input[name="name"]').val();
                            localStorage.email = $('input[name="email"]').val();
                            localStorage.tel = $('input[name="phone"]').val();
                            $('form').trigger("reset");
                            setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                            // Настройки модального окна после удачной отправки
                            yaCounter41075389.reachGoal('zayavka');
                            $('div.cd-modal').removeClass('modal-is-visible');
                            $('div.md-show').removeClass('md-show');
                            $("#call_ok")[0].click();
                            $('span.field').removeClass('active');
                        },
                        error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success:
                            $.ajax({
                                type: 'POST',
                                url: 'https://app.getresponse.com/add_subscriber.html',
                                data: msg,
                                statusCode: {0:function() {
                                    if($(send_btn).hasClass('text_btn1')){
                                      $('#select_vis').html('Ти зробив правильний вибір! Це буде справжня подорож у казку і найкращий подарунок собі та рідним! Замовляй поїздку просто зараз за номером <a href="tel:0636569495" class="modal-ok-massage">(063) 656-94-95</a>!');
                                    }
                                    if($(send_btn).hasClass('text_btn2')){
                                      $('#select_vis').html('Ти зробив правильний вибір! Адже це буде справжня подорож у казку. Ти зробив найкращий подарунок собі та рідним. Готуйтеся відкривати для себе дивовижну країну Свята в першій козацькій столиці, Чигирині. Більше інформації ти знайдеш тут <a href="https://www.youtube.com/watch?v=K33cuWRabiA" class="modal-ok-massage" target="_blank">https://www.youtube.com/watch?v=K33cuWRabiA</a>');
                                    }
                                    if($(send_btn).hasClass('text_btn3')){
                                      $('#select_vis').html('Ти зробив правильний вибір! Адже це буде справжня подорож у казку.  Ти зробиш найкращий подарунок собі та рідним. Готуйтеся відкривати для себе дивовижну країну Свята в першій козацькій столиці, Чигирині. Чекай на наш дзвінок, а поки що більше інформації ти знайдеш тут <a href="https://www.youtube.com/watch?v=K33cuWRabiA" class="modal-ok-massage" target="_blank">https://www.youtube.com/watch?v=K33cuWRabiA</a> якщо тобі сподобалося, то замов поїздку не відкладаючи на завтра за номером <a href="tel:0636569495" class="modal-ok-massage">(063) 656-94-95</a>!');
                                    }
                                    localStorage.name = $('input[name="name"]').val();
                                    localStorage.email = $('input[name="email"]').val();
                                    localStorage.tel = $('input[name="phone"]').val();
                                    $('form').trigger("reset");
                                    setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                                    // Настройки модального окна после удачной отправки
                                    yaCounter41075389.reachGoal('zayavka');
                                    $('div.cd-modal').removeClass('modal-is-visible');
                                    $('div.md-show').removeClass('md-show');
                                    $("#call_ok")[0].click();
                                    $('span.field').removeClass('active');
                                }}
                            }),
                        error:  function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                }
            });
        }
        return false;
    })
});



}); /* End document ready */

    


$(function(){
   var ink, d, x, y;
   $(".btn").on( "mouseenter",function(e){ 
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).removeClass('leave').addClass("animate");
});
   $(".btn").on( "mouseleave",function(e){ 
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     ink.css({top: y+'px', left: x+'px'}).addClass('leave');
     });
}); 


var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
    coverLayer = $('.cd-cover-layer');
  
  /*
    convert a cubic bezier value to a custom mina easing
    http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
  */
  var duration = 600,
    epsilon = (1000 / 60 / duration) / 4,
    firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

  modalTriggerBts.each(function(){
    initModal($(this));
  });

  function initModal(modalTrigger) {
    var modalTriggerId =  modalTrigger.attr('id'),
      modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
      svgCoverLayer = modal.children('.cd-svg-bg'),
      paths = svgCoverLayer.find('path'),
      pathsArray = [];
    //store Snap objects
    pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
    pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
    pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

    //store path 'd' attribute values 
    var pathSteps = [];
    pathSteps[0] = svgCoverLayer.data('step1');
    pathSteps[1] = svgCoverLayer.data('step2');
    pathSteps[2] = svgCoverLayer.data('step3');
    pathSteps[3] = svgCoverLayer.data('step4');
    pathSteps[4] = svgCoverLayer.data('step5');
    pathSteps[5] = svgCoverLayer.data('step6');
    
    //open modal window
    modalTrigger.on('click', function(event){
      event.preventDefault();
      modal.addClass('modal-is-visible');
      coverLayer.addClass('modal-is-visible');
      animateModal(pathsArray, pathSteps, duration, 'open');
    });

    //close modal window
    modal.on('click', '.modal-close', function(event){
      event.preventDefault();
      modal.removeClass('modal-is-visible');
      coverLayer.removeClass('modal-is-visible');
      animateModal(pathsArray, pathSteps, duration, 'close');
    });
  }

  function animateModal(paths, pathSteps, duration, animationType) {
    var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
      path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
      path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
    paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
    paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
    paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
  }

  function bezier(x1, y1, x2, y2, epsilon){
    //https://github.com/arian/cubic-bezier
    var curveX = function(t){
      var v = 1 - t;
      return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
    };

    var curveY = function(t){
      var v = 1 - t;
      return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
    };

    var derivativeCurveX = function(t){
      var v = 1 - t;
      return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
    };

    return function(t){

      var x = t, t0, t1, t2, x2, d2, i;

      // First try a few iterations of Newton's method -- normally very fast.
      for (t2 = x, i = 0; i < 8; i++){
        x2 = curveX(t2) - x;
        if (Math.abs(x2) < epsilon) return curveY(t2);
        d2 = derivativeCurveX(t2);
        if (Math.abs(d2) < 1e-6) break;
        t2 = t2 - x2 / d2;
      }

      t0 = 0, t1 = 1, t2 = x;

      if (t2 < t0) return curveY(t0);
      if (t2 > t1) return curveY(t1);

      // Fallback to the bisection method for reliability.
      while (t0 < t1){
        x2 = curveX(t2);
        if (Math.abs(x2 - x) < epsilon) return curveY(t2);
        if (x > x2) t0 = t2;
        else t1 = t2;
        t2 = (t1 - t0) * .5 + t0;
      }

      // Failure
      return curveY(t2);

    };
  };