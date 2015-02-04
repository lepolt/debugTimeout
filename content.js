
function handleMessage(request/*, sender, sendResponse*/) {
  var name = request.name,
      message = request.message;

  if (name === 'debugger') {
    debugger;
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
