/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
'use strict';

(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    console.log($(window).width());
    var t = [1, 2, 3, 4];
    t.map(function (d) {
      console.log('number is ' + d);
    });
  });
})(jQuery, window, document);