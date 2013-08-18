// Configuration Keys
var clientId = '881188623772.apps.googleusercontent.com';
var apiKey = 'AIzaSyBfA-Zqg9hVWVBJHLXj0ycQTyB3J0IYyN0';

var scopes = 'https://www.googleapis.com/auth/userinfo.profile ' +
'https://www.googleapis.com/auth/glass.timeline';

//API Callback
function handleClientLoad() {
	console.log("handleClientLoad");
	gapi.client.setApiKey(apiKey);
	gapi.auth.init(function() {});
}

//Authorize
function authClick(event) {
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
	return false;
}

//Authorization happens, let's do this
function handleAuthResult(authResult){
	if (authResult && !authResult.error) {
		//insertTimelineItem({"html": "<article>\n  <section>\n    <p class=\"text-auto-size\">This <em class=\"yellow\">paragraph</em> auto-resizes according to the <strong class=\"blue\">HTML</strong> content length.\n    </p>\n  </section>\n</article>\n","notification": {"level": "DEFAULT"}});

		//Make new bundles
		var randid = Math.random() * 1000000;

		//Bundle cover
		insertTimelineItem({
  "kind": "mirror#timelineItem",
  "id": "314171bd-5cfa-4ce1-8e44-65cbe1327cd2",
  "created": "2013-08-17T18:04:55.575Z",
  "updated": "2013-08-18T04:09:07.992Z",
  "etag": "\"qrqSPos28fIbIGMRUHRGC7DJpNM/ljQQo9IV6SiJ4xYtRaTOc3hxxXk\"",
  "html": "<article class=\"photo cover-only\">\n  <img src=\"http://www.glassfrogger.com/images/game-field.jpg\" height=\"100%\" width=\"100%\">\n  <div class=\"photo-overlay\"></div>\n  <section>\n    <p class=\"text-auto-size\"><strong class=\"white\">Google Glass</strong> <em class=\"blue\">Dartified!</em></p>\n  </section>\n<footer>\n    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJxQTFRFAAAAAIvMdsvDAIvMdsvDAIvMdsvDLaTJAIvMOqnHdsvDAIvMdsvDAIvMKaLJdsvDAIvMAIvMdsvDAIvMdsvDdsvDAIvMAIvMAZnFdsvDAILHAIPHAITIAIXJAIfKAIjKAIrLAIrMAIvMAJXHAJjFC5i/I6HENr2yOb6zPr+0TsK4UsO5WbnEWcW8Xsa9Yse+Zsi/asjAc8rCdsvDdt4SRQAAABp0Uk5TABAQICAwMFBgYGBwcICAgI+vr7+/z9/v7+97IXGnAAAAqUlEQVQYV13QxxaCQBBE0VZkjBgAGVEBaVEUM/P//yaTGg5vV3dZANTCZ9BvFAoR93kVC9FnthW6uIPTJ7UkdHaXvS2LXKNBURInyDXPsShbzjU7XCpxhooDVGo5QcQAJmjUco64AY/UcIrowYCTaj5KBZeTaj5JBTc6l11OlQKMf497y1ahefFb3TQfcqtM/fipJF/X9gnDon6/ah/aDDfNOgosNA2b8QdGciZlh/U93AAAAABJRU5ErkJggg==\" class=\"left\">\n    <p>Dart Hacking</p>\n  </footer>\n </article>\n<article class=\"auto-paginate\">\n  <ol class=\"text-x-small\">\n  <strong>Instructions:</strong><hr>  <li>First item</li>\n    <li>Second item</li>\n    <li>Third item</li>\n    <li>Fourth item</li>\n  </ol>\n</article>\n",
  "menuItems": [
    {
      "action": "VIEW_WEBSITE",
      "payload": "http://www.google.com"
    }
  ],
  "notification": {
    "level": "DEFAULT"
  }
}
		);
	} else {
		alert("You must login into a Google account linked to your Glass device");
	}
}

//Insert via Mirror API
function insertTimelineItem(timelineItem) {
	gapi.client.load('mirror', 'v1', function () {
		// Construct a request
		var request = gapi.client.mirror.timeline.insert({'resource': timelineItem});

		//Bang it
		request.execute(function (resp) {
			console.log(resp);
		});
	});
}