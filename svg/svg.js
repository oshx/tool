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


// TODO...
// https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);
  
//     element.style.display = 'none';
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
//   }

//   form * {
//     display: block;
//     margin: 10px;
//   }

//   <form onsubmit="download(this['name'].value, this['text'].value)">
//   <input type="text" name="name" value="test.txt">
//   <textarea name="text"></textarea>
//   <input type="submit" value="Download">
// </form>