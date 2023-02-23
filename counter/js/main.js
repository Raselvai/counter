(function ($) {
    "use strict";

    //14. counter area start
    $('.counter-wrapper').on('inview', function(event, visible) {
        if (visible) {
            $(this).find('.counter').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
        });

})(jQuery);