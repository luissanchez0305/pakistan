/* eslint-disable */
var siteOrigin = document.location.protocol + '//' + document.location.hostname;

//вытаскиваем параметры хита
if( window._globalsConfig ){
  var platform_uid = window._globalsConfig.user && window._globalsConfig.user.id;
  var platform_guest_id = window._globalsConfig.ab && window._globalsConfig.ab.guestId;
  var platform_is_adaptive = window._globalsConfig.isAdaptive;
  var platform_is_vip = window._globalsConfig.user && window._globalsConfig.user.vip;
  var platform_ab_group = window._globalsConfig.ab && window._globalsConfig.ab.homepage;
}
//создает куку с client id
if (!getCookie("_ga")) {
  setCookie("_ga", "GA1.2.b" + Math.random().toString().substring(6) + "." + new Date().getTime(), 5 * 360)
};

var doc_ref = get_doc_ref();
var ga_cid_arr = getCookie("_ga").split(".");
var ga_cid_str = ga_cid_arr[2] + "." + ga_cid_arr[3];

var obj_main = {
  v: "1",
  dl: siteOrigin + document.location.pathname + document.location.search,
  dp: document.location.href.replace(siteOrigin, ""),
  ul: navigator.language.toLowerCase(),
  de: document.charset,
  dt: document.title,
  sr: window.screen.width + "x" + window.screen.height,
  cid: ga_cid_str
};

var mergeEventParams = {
  cd3:get_session_id(),
  cd4: hit_timestamp(),
  cd5: ga_cid_str,
  cd41:"block_yes",
  tid: "UA-54693962-1",
  t: "pageview",
};
//проверяет есть ли параметры на странице, и если да добавляем их в объект тела хита
if (platform_uid) {
  mergeEventParams["cd6"] = platform_uid;
  mergeEventParams["uid"] = platform_uid;
}
if (platform_guest_id) {
  mergeEventParams["cd31"] = platform_guest_id;
}
if (platform_ab_group) {
  mergeEventParams["cd32"] = platform_ab_group;
}
if (platform_is_vip) {
  mergeEventParams["cd8"] = platform_is_vip;
}
if (platform_is_adaptive) {
  mergeEventParams["cd9"] = "1";
}
if (doc_ref) {
  mergeEventParams["cd38"] = doc_ref;
}

var eventErrorParams = {
  ec: "ga_send_error",
  ea: "ga_send_error",
  el: "ga_send_error",
  t:  "event",
  tid: "UA-54693962-29",
};

//объект для отправки данных
function mergeObj() {
  const result = {};
  for(var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    Object.keys(arg || {}).forEach(function(key) {
      result[key] = arg[key];
    });
  }
  return result;
};

function send_ga_hit(hit_params) {
  var target_url = siteOrigin+"/ga-collect";
  var data = Object.keys(hit_params).map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(hit_params[key]);
  }).join('&');
  if (navigator.sendBeacon) {
    navigator.sendBeacon(target_url, data);
  } else {
    httpGetAsync(target_url + "?" + data);
  }
};

//получает главный домен(например olymptrade.com)
function extractRootDomain() {
  var domain = document.domain || '';
  var splitArr = domain.split('.');
  var arrLen = splitArr.length;
  if (arrLen > 2) {
    domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
      domain = splitArr[arrLen - 3] + '.' + domain;
    }
  }
  return domain;
}


//ajax-запрос ассинхронный
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
};
//ставит куку
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + ";domain="+extractRootDomain()+"; path=/";
};
//получает значение куки
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
function hit_timestamp() {
  var now = new Date();
  var tzo = -now.getTimezoneOffset();
  var dif = tzo >= 0 ? '+' : '-';
  var pad = function(num) {
    var norm = Math.abs(Math.floor(num));
    return (norm < 10 ? '0' : '') + norm;
  };
  return now.getFullYear()
    + '-' + pad(now.getMonth()+1)
    + '-' + pad(now.getDate())
    + 'T' + pad(now.getHours())
    + ':' + pad(now.getMinutes())
    + ':' + pad(now.getSeconds())
    + '.' + pad(now.getMilliseconds())
    + dif + pad(tzo / 60)
    + ':' + pad(tzo % 60);
}

function get_session_id() {
  return new Date().getTime() + '.' + Math.random().toString(36).substring(5);
}

function get_doc_ref(){
  var ref;
  if(document.referrer.indexOf(document.location.host) == -1 && document.referrer!=""){
    ref = document.referrer.slice(0, 145);
  };
  return ref;
};

//параметр, который определяет был ли хит pageview отправен через alpha(стобы исключить повторные отправки если вдруг GA в GTM запуститься)
window.hit_pageview_already_send = "no";
(function() {
  var currentObj = mergeObj(obj_main, mergeEventParams);
  try {
    var ga_block_once = getCookie("ga_block_once");
    //если ранее уже блокировались запросы, сразу шлем на alpha
    if(ga_block_once === "yes") {
      send_ga_hit(currentObj);
    } else {
      var image_test_ga = new Image();
      //если тестовый запрос заблокирован шлем на alpha
      image_test_ga.onerror = function() {
        setCookie("ga_block_once", "yes", 1);
        send_ga_hit(currentObj);
      };
      //если тестовый запрос не заблокирован...(пока ничего не делаем)
      image_test_ga.onload = function() { };
      image_test_ga.src = 'https://www.google-analytics.com/collect';
    }
  } catch (err) {
    send_ga_hit(mergeObj(obj_main, mergeEventParams, eventErrorParams));
  }
})();
