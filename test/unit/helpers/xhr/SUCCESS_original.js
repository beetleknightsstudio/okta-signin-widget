define({
  "status": 200,
  "responseType": "json",
  "response": {
    "expiresAt": "2015-08-05T14:10:54.000Z",
    "status": "SUCCESS",
    "type": "NEW_TYPE",
    "sessionToken": "THE_SESSION_TOKEN",
    "_embedded": {
      "user": {
        "id": "00ui0jgywTAHxYGMM0g3",
        "profile": {
          "login": "administrator1@clouditude.net",
          "firstName": "Add-Min",
          "lastName": "O'Cloudy Tud",
          "locale": "en_US",
          "timeZone": "America\/Los_Angeles"
        }
      }
    },
    "_links": {
      "original": {
        "href": "http://foo.okta.com/original/redirect?stateToken=aStateToken",
        "hints": {
          "allow": [
            "GET"
          ]
        }
      }
    }
  }
});
