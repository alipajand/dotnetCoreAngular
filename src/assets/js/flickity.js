import Flickity from 'flickity/dist/flickity.pkgd.min.js';

(function ($) {
    $(function () {
        new Flickity('.flickityCarousel', {
            contain: true,
            autoPlay: true,
            initialIndex: 1,
            pageDots: false,
            wrapAround: true,
            rightToLeft: true,
            cellAlign: 'center'
        });
    });
})(jQuery);
