

document.addEventListener('DOMContentLoaded', function() {
    var storeValueButton = document.getElementById('storeValueButton');
    var retrieveValueButton = document.getElementById('retrieveValueButton');
    var outputDiv = document.getElementById('output');
  
    storeValueButton.addEventListener('click', function() {
      var fieldName = document.getElementById('fieldName').value;
      var fieldValue = document.getElementById('fieldValue').value;
      chrome.runtime.sendMessage({type: "storeValue", key: fieldName.toLowerCase(), value: fieldValue}, function(response) {
        console.log('Value stored:', fieldName, fieldValue);
      });
    });
  
    retrieveValueButton.addEventListener('click', function() {
      var retrieveFieldName = document.getElementById('retrieveFieldName').value.toLowerCase();
      chrome.runtime.sendMessage({type: "retrieveValue", key: retrieveFieldName}, function(response) {
        console.log('Value retrieved:', response);
        outputDiv.textContent = `${response}`;
      });
    });
  });
  