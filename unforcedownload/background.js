var url = '';
var res = '';
var callbackOnRequest = function(info) {
    url = info.url;
    res = url.replace("?forcedownload=1", "");
    return {redirectUrl: res};
}
var filters = {
    urls: ["*://*/*?forcedownload=1"]
}
var extraInfoSpec = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(callbackOnRequest, filters, extraInfoSpec);