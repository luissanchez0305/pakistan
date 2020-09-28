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
</html>