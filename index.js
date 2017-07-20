function run(){
  var div = document.createElement('div');
  div.setAttribute('id', 'testContainer');

  var iframe = document.createElement('iframe');
  iframe.src = chrome.runtime.getURL('bridgeIFrame.html');

  div.appendChild(iframe);
  document.body.appendChild(div);
};

setTimeout(run, 2000);
