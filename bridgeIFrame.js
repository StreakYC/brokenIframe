setTimeout(() => {
  document.body.innerHTML = '';
  var iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:8000/driveIFrame.html';

  document.body.appendChild(iframe);

}, 3000);
