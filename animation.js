(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});


function bookFlight(){
  var departure = document.getElementById('Departure').value;
  var arrival = document.getElementById('Arrival').value;
  var departDate = document.getElementById('DepartureDate').value;
  var arriveDate = document.getElementById('ArrivalDate').value;
  var adults = document.getElementById('Adults').value;
  var children = document.getElementById('Children').value;

  document.getElementById('cost').innerHTML = "$" + (150 * children + 200 * adults);
  document.getElementById('departCity').innerHTML = departure;
  document.getElementById('arriveCity').innerHTML = arrival;
  document.getElementById('departCity1').innerHTML = departure;
  document.getElementById('arriveCity1').innerHTML = arrival;
  document.getElementById('departDate').innerHTML = "" + departDate;
  document.getElementById('arriveDate').innerHTML = "" + arriveDate;
  document.getElementById('exampleModalScrollableTitle').innerHTML = departure + ` <span class="material-icons">flight</span> ` + arrival
}
function Openings(jobName){
  document.getElementById('exampleModalScrollableTitle1').innerHTML=jobName;
}
