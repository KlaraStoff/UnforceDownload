chrome.webRequest.onBeforeRequest.addListener(function(e){return{redirectUrl:e.url.replace("?forcedownload=1","")}},{urls:["*://*/*?forcedownload=1"]},["blocking"]);
