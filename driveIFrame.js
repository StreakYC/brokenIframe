function onApiLoad(){
  gapi.load('auth', {'callback': onAuthApiLoad});
}

function onAuthApiLoad() {
  window.gapi.auth.authorize(
      {
        'client_id': '800057673271-mkkamk3vvctbirrj0i1g6b4ailat13bg.apps.googleusercontent.com',
        'scope': ['https://www.googleapis.com/auth/photos'],
        'immediate': false
      },
      handleAuthResult);
}

var oauthToken;
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    oauthToken = authResult.access_token;
    gapi.load('picker', {'callback': createPicker});
  }
}

function createPicker(){
  var builder = new google.picker.PickerBuilder()
                .setCallback(pickerCallback)
                .setOAuthToken(oauthToken)
                .setOrigin('http://localhost:8000');

  var imagesView = new google.picker.DocsView()
              .setSelectFolderEnabled(true)
              .setIncludeFolders(true);
  builder.addView(imagesView);

  var picker = builder.build();
  picker.setVisible(true);
}

function pickerCallback(data) {
  console.log('picked', data);
}
