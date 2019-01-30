module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1548870955362",
    "events": [{
      "modulePath": "alert-message/src/lib/events/delay.js",
      "settings": {
        "delay": "1000"
      }
    }],
    "actions": [{
      "modulePath": "alert-message/src/lib/actions/alertMessage.js",
      "settings": {
        "visitorName": "Ogonna",
        "message": "Welcome user."
      }
    }],
    "name": "Ogonna's rule"
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.4.0",
    "turbineBuildDate": "2019-01-30T17:55:57.597Z",
    "buildDate": "2019-01-30T17:55:57.597Z",
    "environment": "development"
  }
}