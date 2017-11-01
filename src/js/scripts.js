(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    console.log($(window).width());
    var t = [1,2,3,4];
    t.map(d => {
      console.log(`number is ${d}`);
    });
});

})(jQuery, window, document);
