
const fakeUserAgent = 'Mozilla/5.0 (PS4; Leanback Shell) Gecko/20100101 Firefox/65.0 LeanbackShell/01.00.01.75 Sony PS4/ (PS4, , no, CH)'

function changeUserAgent (request) {
  for (let header of request.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") header.value = fakeUserAgent

  }

  return { requestHeaders: request.requestHeaders }
}

chrome.webRequest.onBeforeSendHeaders.addListener(changeUserAgent, {urls: ["*://*.youtube.com/tv*"]}, ["blocking", "requestHeaders"]);
