function layout() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active-header");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("active-header");
    }
  });

  // Active Link
  $(".nav-item").on("click", function() {
    $(".nav-item ").removeClass("active");
    $(this).addClass("active");
  });
  // $(window).on("scroll", function() {
  //   $(".nav-item").removeClass("active");
  //   $(this).addClass("active");
  // });

  // $("#recipeCarousel").carousel({
  //   interval: 10000
  // });

  // $(".services-carousel .carousel-item").each(function() {
  //   var minPerSlide = 3;
  //   var next = $(this).next();
  //   if (!next.length) {
  //     next = $(this).siblings(":first");
  //   }
  //   next
  //     .children(":first-child")
  //     .clone()
  //     .appendTo($(this));

  //   for (var i = 0; i < minPerSlide; i++) {
  //     next = next.next();
  //     if (!next.length) {
  //       next = $(this).siblings(":first");
  //     }

  //     next
  //       .children(":first-child")
  //       .clone()
  //       .appendTo($(this));
  //   }
  // });

  // Scroll
  $(document).on("click", 'a[href^="#"]', function(e) {
    e.preventDefault();

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },

        1000,
        "linear"
      );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  $(".back-to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },

      1000
    );
    return false;
  });

  // Canvas
  $(function() {
    var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d"),
      color = "#9b1818";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.fillStyle = color;
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = color;

    var mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100
    };

    var dots = {
      nb: 100,
      distance: 200,
      d_radius: 100,
      array: []
    };

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -0.1 + Math.random();
      this.vy = -0.1 + Math.random();

      this.radius = Math.random();
    }

    Dot.prototype = {
      create: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },

      animate: function() {
        for (i = 0; i < dots.nb; i++) {
          var dot = dots.array[i];

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }

          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function() {
        for (i = 0; i < dots.nb; i++) {
          for (j = 0; j < dots.nb; j++) {
            i_dot = dots.array[i];
            j_dot = dots.array[j];

            if (
              i_dot.x - j_dot.x < dots.distance &&
              i_dot.y - j_dot.y < dots.distance &&
              i_dot.x - j_dot.x > -dots.distance &&
              i_dot.y - j_dot.y > -dots.distance
            ) {
              if (
                i_dot.x - mousePosition.x < dots.d_radius &&
                i_dot.y - mousePosition.y < dots.d_radius &&
                i_dot.x - mousePosition.x > -dots.d_radius &&
                i_dot.y - mousePosition.y > -dots.d_radius
              ) {
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }
    };

    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
        dot = dots.array[i];

        dot.create();
      }

      dot.line();
      dot.animate();
    }

    $("canvas").on("mousemove mouseleave", function(e) {
      if (e.type == "mousemove") {
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
      }

      if (e.type == "mouseleave") {
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
      }
    });
    setInterval(createDots, 1000 / 30);
  });

  // Canvas
}
