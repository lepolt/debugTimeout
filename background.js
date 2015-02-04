
function startTimeout(seconds) {
  var ms = seconds * 1000,
      tick = 0,
      now = Date.now(),
      interval;

  chrome.browserAction.setBadgeText({
    text: String(seconds)
  });

  interval = setInterval(function () {
    var remaining;

    tick++;
    console.log('ticked ' + tick);

    if (tick === seconds) {
      clearInterval(interval);

      chrome.browserAction.setBadgeText({
        text: ''
      });

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          name: 'debugger'
        });
      });
    } else {
      remaining = seconds - tick;

      // Set badge text to countdown
      chrome.browserAction.setBadgeText({
        text: String(remaining)
      });
    }
  }, 1000);


}