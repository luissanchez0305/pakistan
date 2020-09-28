<!DOCTYPE html>
<html lang="en">
  <head>
  <?php echo $header; ?>
</head>
<body class="main-page rebrand-page" data-theme="olymp_white" id="to_top" lang="en">
<?php echo $content; ?>
<script>
  function _globalSendErrorToGa(msg, url, line, col, error){
    if(XMLHttpRequest){
      var tid = 'UA-54693962-23';
      var params = 'v=1&tid='+
        tid+'&cid=1000746600975646028734931254835370159526584745968963487954554352&dl='+
        encodeURIComponent(url)+'&t=event&ec=js_error&ea='+
        encodeURIComponent(line)+'&el='+encodeURIComponent(col);
      var url = 'https://www.google-analytics.com/collect?'+params;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      //xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
      xhr.send();
    }
  }
  window.onerror = _globalSendErrorToGa;
</script>
<script>
  function grecaptchaOnload() {
    window.grecaptchaIsExist = true;
  }
</script>
<script src="<?php echo base_url(); ?>/script/recaptcha/api.js?onload=grecaptchaOnload&render=explicit&hl=en" async=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/locale/list.b23ce0cd.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/runtimeChunk.home.d6a5db99.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/platformComponents.17bda4aa.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/vendors.dce0a859.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/core_ui-kit.1d68c864.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/core_transport.491161b9.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/core_icons.7bdb5c1c.js" defer=""></script>
<script src="<?php echo base_url(); ?>/script/v1/public/js/home.f548f2b7.js" defer=""></script>
</body>
</html>
