(function () {
  console.log('running markdown parser');
  var converter = new showdown.Converter();

  function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          var html = converter.makeHtml(allText);
          console.log(html)
        }
      }
    }
    rawFile.send(null);
  }

  readTextFile('../links/links.md');
}());
