$(function(){

        $("#typing").typed({
            strings: ["дизайнер", "верстальщик", "фронтенд разработчик", "веб дизайнер"],
            typeSpeed: 120,
            backDelay: 3500,
            startDelay: 500,
            loop: true,
            loopCount: 10,
            contentType: 'html',
        });

    });


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "30px";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }


    $(document).ready(function() {
      $('.btn-image-more').click(function(){
          var toLoad = $(this).attr('href');
          $('.main-container-body').hide(0,loadContent);
          console.log(toLoad);

          function loadContent() {
            $('.main-container-body').load(toLoad,'',showNewContent());
          }
          function showNewContent() {
            $('.main-container-body').show(0);
          }
            return false;
      });

      $('.best-image-page-close').click(function(){
        var toLoad = $(this).attr('href');
        $('.main-container-last-image').hide(0);
        $('.main-container-body').show('normal');


        });
    });


    function loadData() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      })
    }

    loadData()
    .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });
