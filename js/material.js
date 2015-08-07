//var cardRestingZindex = 2;
//var cardPickedUpZindex = 8;
//
//function elevate($material)
//{
//    "use strict";
//
//    var depth = $material.css('z-index');
//    depth = $material.css('z-index');
//
//    $material.css({
//        'box-shadow': '0 2px ' + (depth) + 'px rgba(0, 0, 0, .333)',
//        '-webkit-transform': 'scale(' + (1 + depth / 250) + ') translate3d(0, 0, ' + depth + 'px)',
//        transform: 'scale(' + (1 + depth / 250) + ') translate3d(0, 0, ' + depth + 'px)'
//    });
//}
//
//function lower($material)
//{
//    "use strict";
//
//    var depth = $material.css('z-index');
//
//    $material.css({
//        'box-shadow': '0 2px ' + (depth) + 'px rgba(0, 0, 0, .333)',
//        '-webkit-transform': 'scale(1) translate3d(0, 0, ' + depth + 'px)',
//        transform: 'scale(1) translate3d(0, 0, ' + depth + 'px)'
//    });
//}
//
//$(document).ready(function () {
//    "use strict";
//
//    $('.card').on('mouseover', function() {
//        $(this).addClass('raised');
//        elevate($(this));
//    });
//
//
//    $('.card').on('mouseout', function() {
//        $(this).removeClass('raised');
//        //lower($(this));
//    });
//
//});
