var callbackOnRequest = function(info) {
    return {redirectUrl: info.url.replace("?forcedownload=1", "")};
}
var filters = {
    urls: ["*://*/*?forcedownload=1"]
}
var extraInfoSpec = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(callbackOnRequest, filters, extraInfoSpec);
