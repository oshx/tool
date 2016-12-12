
(function ($) {
    var tempId = new Date().getTime(),
        pattern = [
            [/\<\!\-\-.*[\-\-\>]/gim, ' '],
            [/	/gim, ' '],
            [/\n/gim, ' '],
            [/  /gim, ' '],
            [/\> \</gim, '><'],
            [/  /gim, ' '],
            [/viewBox\=\"([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)\"/gim, 'viewBox="$1 $2 $3 $4" width="$3px" height="$4px"'],
            [/(width\=\"[0-9]+px\" height\=\"[0-9]+px\") (width\=\"[0-9]+px\" height\=\"[0-9]+px\")/gim, '$1'],
            [/(st[0-9]+)/gim, function (origin) { return origin.replace(tempId, '') + tempId; }],
            [/\_x5F\_/gim, '_'],
            [/\_x0A\_/gim, ''],
            [/(\#[0-9A-Z]+)/gim, function (origin) { return origin.toLowerCase(); }],
            [/  /gim, ' '],
            [/\> \</gim, '><']
        ];
    $('.svg_field').on('blur', function () {
        var source = $(this).val();
        for (var i = 0, iMax = pattern.length; i < iMax; i++) {
            source = source.replace(pattern[i][0], pattern[i][1]);
        }
        $(this).val(source);
        $('.svg_preview').html(source);
    });
})(jQuery);