$(document).ready(function () {
    if (!Modernizr.svg) {
        $("img[src$='.svg']").attr("src", function() {
            return $(this).attr('data-fallback');
        });
    }
});