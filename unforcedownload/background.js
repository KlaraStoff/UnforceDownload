chrome.webRequest.onBeforeRequest.addListener(function(info) {
    return {redirectUrl: info.url.replace("?forcedownload=1", "")};
}, {urls: ["*://*/*?forcedownload=1"]}, ["blocking"]);
