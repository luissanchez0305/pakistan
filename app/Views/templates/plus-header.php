<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="<?php echo base_url(); ?>/bootstrap/css/bootstrap.min.css"
    />
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/src/files/css/custom.css" />
    <!-- JS BOOTSTRAP -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <!--Carrusel-->
    <link rel="stylesheet" href="<?php echo base_url(); ?>/owlcarousel/owl.carousel.min.css" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>/owlcarousel/owl.theme.default.min.css" />
    <script src="<?php echo base_url(); ?>/owlcarousel/owl.carousel.min.js"></script>
    <!--Calendar-->
    <link rel='stylesheet' type="text/css" href="<?php echo base_url(); ?>/src/files/css/main.min.css"/>
    <script href="<?php echo base_url(); ?>/src/files/js/main.min.js"></script>
    <script>

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2020-09-12',
    editable: true,
    selectable: true,
    businessHours: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2020-09-01'
      },
      {
        title: 'Long Event',
        start: '2020-09-07',
        end: '2020-09-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-09-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2020-09-11',
        end: '2020-09-13'
      },
      {
        title: 'Meeting',
        start: '2020-09-12T10:30:00',
        end: '2020-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2020-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2020-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2020-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2020-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2020-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-09-28'
      }
    ]
  });

  calendar.render();
});

</script>
    <style>
#calendar {
  max-width: 1100px;
  margin: 0 auto;
}

</style>
    <title>Page - Olymp Trade</title>
  </head>