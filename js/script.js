$(function () {
    $('#btn-demo').magnificPopup({
        items: {
            src: '#demo-popup',
            closeBtnInside:true,
            type: 'inline'
        },

        closeMarkup: "<button title=\"Close (Esc)\" type=\"button\" class=\"mfp-close icon\"></button>",
        removalDelay: 300,
        mainClass: 'mfp-fade'

    });
});