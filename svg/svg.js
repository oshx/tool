(function ($, FileDrop) {
    "use strict";
    var zone = new FileDrop('drop', {input: false});
    
    zone.event('upload', function (e) {
      zone.eventFiles(e).each(function (file) {
        file.readData(
          function (str) {
            var area = document.getElementById('svg');
            area.value = str;
            document.getElementById('preview').innerHTML = str;
            document.getElementById('drop').style.display = "none";
          },
          function () { alert('Problem reading this file.'); },
          'text'
        );
      });
    });
})(jQuery, FileDrop);