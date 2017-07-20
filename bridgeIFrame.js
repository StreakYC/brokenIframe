setTimeout(() => {
  document.body.innerHTML = '';
  var iframe = document.createElement('iframe');
  iframe.src = 'https://streakyc.github.io/brokenIframe/driveIFrame.html';

  document.body.appendChild(iframe);

}, 3000);
