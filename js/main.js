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

    

    btn.addEventListener('click', function(){
      this.textContent = '大吉' ;
    });

           
btn.addEventListener(EVENTNAME_TOUCHSTART, function(){
      this.className = 'pushed' ;
    });

    btn.addEventListener(EVENTNAME_TOUCHEND, function(){
      this.className = '' ;
    });

})();
