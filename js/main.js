(function () {
    'use strict';

    var btn = document.getElementById('btn');

    var EVENTNAME_TOUCHSTART, EVENTNAME_TOUCHEND

    if ('ontouchend' in document) {
    EVENTNAME_TOUCHSTART = 'touchstart';
    EVENTNAME_TOUCHEND = 'touchend';
    } else {
    EVENTNAME_TOUCHSTART = 'mousedown';
    EVENTNAME_TOUCHEND = 'mouseup';
    }


    btn.addEventListener(EVENTNAME_TOUCHSTART, function(){
      var results = [
          "大吉",
          "吉",
          "凶",
          "まあまあ",
          "大凶",
          "中吉",
          "末吉",
          "諭吉"
      ];
      var n = Math.floor(Math.random() * results.length);
      this.textContent = results[n];
    });

    btn.addEventListener(EVENTNAME_TOUCHSTART, function(){
      this.className = 'pushed';
    });

    btn.addEventListener(EVENTNAME_TOUCHEND, function(){
      this.className = '' ;
    });
})();
