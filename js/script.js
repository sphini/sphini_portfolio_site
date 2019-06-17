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
