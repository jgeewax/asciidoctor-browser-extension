var enableRender = true;

function enableDisableRender() {
    // Save the status of the extension
    chrome.storage.local.set({'ENABLE_RENDER':enableRender});

    // Update the extension icon
    var iconPath = enableRender ? "img/enabled.png" : "img/disabled.png";
    chrome.browserAction.setIcon({path:iconPath});

    // Switch enabled <> disabled
    enableRender = !enableRender;

    // Reload the page
    chrome.tabs.getSelected(null, function (tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code:code});
    });
}

chrome.browserAction.onClicked.addListener(enableDisableRender);
enableDisableRender();