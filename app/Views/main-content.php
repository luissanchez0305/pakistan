<!DOCTYPE html>
<html lang="en">
  <head>
    <?php echo $header; ?>
  </head>
  <body>
  	<?php echo $top_menu; ?>
  	<?php echo $content; ?>
    <?php echo $footer; ?>
    <?php echo $scripts; ?>
  </body>
  <script>
    $(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        margin: 18,
        loop: true,
        dots: true,
        dotsEach: true,
        autoWidth: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
    });
  </script>
    <script>
    $(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        margin: 18,
        loop: true,
        dots: true,
        dotsEach: true,
        autoWidth: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
    });
    // Chart
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Dataset #1",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 20, 81, 56, 55, 40]
        }
      ]
    };

    var options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
            gridLines: {
              display: true,
              color: "rgba(255,99,132,0.2)"
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    Chart.Line("chart", {
      options: options,
      data: data
    });
  </script>
</html>