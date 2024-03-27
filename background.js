chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "storeValue") {
      var key = request.key;
      var value = request.value;
      chrome.storage.sync.set({[key]: value}, function() {
        sendResponse("Value stored successfully");
      });
    } else if (request.type === "retrieveValue") {
      var key = request.key;
      chrome.storage.sync.get([key], function(result) {
        sendResponse(result[key]);
      });
    }
    return true; // Keep the message channel open for sendResponse
  });
  