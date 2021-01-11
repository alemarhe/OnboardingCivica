
// jQuery(function ($) {
//     $.fn.hScroll = function (amount) {
//         amount = amount || 120;
//         $(this).bind("DOMMouseScroll mousewheel", function (event) {
//             var oEvent = event.originalEvent, 
//                 direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
//                 position = $(this).scrollLeft();
//             position += direction > 0 ? -amount : amount;
//             $(this).scrollLeft(position);
//             event.preventDefault();
//         })
//     };
// });

$(document).ready(function () {
    $(function() {
        $('.vertical-scroll').mousewheel(function(evt, chg) {
            this.scrollTop -= (chg * 50); //need a value to speed up the change
            evt.preventDefault();
        });
        $('*:not(.vertical-scroll)').mousewheel(function(evt, chg) {
            this.scrollLeft -= (chg * 50); //need a value to speed up the change
            evt.preventDefault();
        });
    });
})