
function doTimeout() {
  var textField = document.getElementById('timeout'),
      seconds = parseInt(textField.value, 10);

  chrome.storage.sync.set({
    lastTime: seconds
  });

  chrome.extension.getBackgroundPage().startTimeout(seconds);

  window.close();

}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('button'),
      textField = document.getElementById('timeout');

  chrome.storage.sync.get({
    lastTime: 2
  }, function (results) {
    textField.value = results.lastTime;
  });

  button.addEventListener('click', function () {
    doTimeout()
  });

  textField.addEventListener('keypress', function (ev) {
    if(ev.which === 13) {
      doTimeout();
    }
  });
});

