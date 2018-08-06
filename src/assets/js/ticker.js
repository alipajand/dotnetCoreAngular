(function ($) {
    $(function () {
        $.fn.ticker.defaults = {
            random: false, // Whether to display ticker items in a random order
            itemSpeed: 3000,  // The pause on each ticker item before being replaced
            cursorSpeed: 30,   // Speed at which the characters are typed
            pauseOnHover: true,  // Whether to pause when the mouse hovers over the ticker
            finishOnHover: true,  // Whether or not to complete the ticker item instantly when moused over
            cursorOne: '_',   // The symbol for the first part of the cursor
            cursorTwo: '',    // The symbol for the second part of the cursor
            fade: true,  // Whether to fade between ticker items or not
            fadeInSpeed: 600,   // Speed of the fade-in animation
            fadeOutSpeed: 300    // Speed of the fade-out animation
        };

        // start the ticker
        $('.ticker').ticker();
    })
})(jQuery);
