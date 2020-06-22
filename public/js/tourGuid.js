//Manage Tour Steps!
var tourPartsDb = {
	"ThumbsUp": {
		element: "#ThumbsUp",
		title: "Thumbs Up",
		content: "You can use this button in order to show that you like something",
		placement: "top"
	},
	"ThumbsDown": {
		element: "#ThumbsDown",
		title: "Thumbs Down",
		content: "You can use this button in order to show that you dislike something",
		placement: "top"
	},
	"handsUpBtn": {
		element: "#handsUpBtn",
		title: "Hands Up",
		content: "Click this button in order to put your hands up. If the moderator accepts, you will be able to speak",
		placement: "top"
	},
	"Clap": {
		element: ".fa-sign-language",
		title: "Clap",
		content: "Click this button in order to give a virtual clap",
		placement: "top"
	},
	"hornBtn": {
		element: "#hornBtn",
		title: "The Horn",
		content: "Click the horn to enable your microfone",
		placement: "top"
	},
	"silenceBtn": {
		element: "#silenceBtn",
		title: "Silence",
		content: "Click here to silence others",
		placement: "top"
	},
	"afkBtn": {
		element: "#afkBtn",
		title: "Away from keyboard",
		content: "Click on this thing to mute yourself and show that you are away... ;)",
		placement: "top"
	},
	"moderatorDiv": {
		element: "#moderatorDiv",
		title: "Moderator",
		content: "Here is the moderator of this room. If it's free you can click it to be moderator yourself and use more functions!",
		orphan: true
	},
	"userRightField": {
		element: ".UserRightTD",
		title: "Moderator",
		content: "When you are moderator, you can give a participant of your choice the microphone or even put him into the role of moderator!",
		orphan: true
	},
	"startSnake": {
		element: "#startSnake",
		title: "play the game 'Snake'",
		content: "Click here in order to play Snake!",
		placement: "top"
	},
	"showNotes": {
		element: "#showNotes",
		title: "Notes",
		content: "Click here in order to enable/disable the notes!",
		placement: "top"
	},
	"showFiles": {
		element: "#showFiles",
		title: "Files / Cloud",
		content: "Click here in order to show/hide the files from Cloud!",
		placement: "left"
	},
	"LogoutBtn": {
		element: "#logoutBtn",
		title: "Logout",
		content: "Here you can logout from the current room",
		placement: "right"
	},
	"ChatInputDiv": {
		element: "#chatInputWrapper",
		title: "Chat",
		content: "Type in a chat message to all",
		placement: "top"
	},
	"SmilieSvg": {
		element: "#smilieSvg",
		title: "Emoticons",
		content: "Add Emoticons to your chat message",
		placement: "top"
	},
	"chatButtonWrapperBtn": {
		element: "#chatButtonWrapper",
		title: "Send Message",
		content: "Send out your message",
		placement: "left"
	},
	"toggleFullscreen": {
		element: "#toggle_fullscreen",
		title: "Fullscreen",
		content: "See the presentation in fullscreen",
		placement: "left"
	},
	"ColorChange": {
		element: ".colorPicker",
		title: "Change your colour",
		content: "Pick any other colour by clicking on this colour bar",
		placement: "right"
	},
	"ChangePicture": {
		element: ".userIcon",
		title: "Change your Icon",
		content: "Change your picture. You can upload any picture from your computer. Maximum: 0.5 MB",
		placement: "right"
	},
	"Webcam": {
		element: ".shareOwnVideo",
		title: "Webcam",
		content: "Show yourself via Webcam to others",
		placement: "right"
	},
	"ChangePlace": {
		element: ".changePlace",
		title: "Switch moderator",
		content: "Go back into the role of a participant or pick a special person to be the next moderator",
		placement: "right"
	},
	"uservolume": {
		element: ".userVolume",
		title: "Your audio signal",
		content: "If your microphone is set up correctly, the symbol will show when you speak",
		placement: "right"
	},
	"mictospeak": {
		element: ".fa-microphone",
		title: "Microphone",
		content: "The moderator can click on this symbol in order to give you speaking permission. When one has speaking permission, the microphone will change the colour to blue",
		placement: "right"
	},
	"HomeBtn": {
		element: ".fa-home",
		title: "Homescreen",
		content: "Show Homescreen to your participants",
		placement: "bottom"
	},
	"showPresentation": {
		element: "#showPresentation",
		title: "presentation mode",
		content: "Share your presentation to your participants",
		placement: "bottom"
	},
	"show3dObject": {
		element: "#show3d",
		title: "3D-object",
		content: "Share your 3D Object to your participants",
		placement: "bottom"
	},
	"CollabTextEditor": {
		element: "#etherpadBtn",
		title: "Collaborative Text Editor",
		content: "Click here to open a collaborative text editor for you and your participants",
		placement: "bottom"
	},
	"YoutubeBtn": {
		element: "#youtubeBtn",
		title: "Youtube Video",
		content: "Show a youtube video to your participants",
		placement: "bottom"
	},
	"whiteboardTabBtn": {
		element: "#whiteboardTabBtn",
		title: "Whiteboard",
		content: "Open a Whiteboard for collaborative editing",
		placement: "bottom"
	},
	"screenShareTabBtn": {
		element: "#screenShareTabBtn",
		title: "Screenshare",
		content: "Share your screen to your participants",
		placement: "bottom"
	},
	"praesiControl": {
		element: "#praesicontrol",
		title: "Presentation control",
		content: "Click here to manage your presentations",
		placement: "bottom"
	},
	"3dObjectControl": {
		element: "#3dObjectControl",
		title: "3D-Object control",
		content: "Click here to manage your 3D-Objects",
		placement: "bottom"
	},
	"praesiStart": {
		element: "#praesiStart",
		title: "First Slide",
		content: "Go back to the first slide of your presentation",
		placement: "bottom"
	},
	"praesiBack": {
		element: "#praesiBack",
		title: "One slide back",
		content: "Go one slide back",
		placement: "bottom"
	},
	"praesiNext": {
		element: "#praesiNext",
		title: "One slide forward",
		content: "Go one slide forward",
		placement: "bottom"
	},
	"praesiENd": {
		element: "#praesiENd",
		title: "Last Slide",
		content: "Go forward to the last slide of your presentation",
		placement: "bottom"
	},
	"praesiCursorBtn": {
		element: "#praesiCursorBtn",
		title: "Mouse enable/disable",
		content: "Enable/Disable to show mouse to the participants",
		placement: "bottom"
	},
	"praesiZoomBtn": {
		element: "#praesiZoomBtn",
		title: "Zoom",
		content: "Enable/Disable zoom at mouseover on presentation",
		placement: "bottom"
	},
	"userTootlsBtn": {
		element: "#userTootlsBtn",
		title: "User Items",
		content: "Enable/Disable UserItems (such as text fields) for your participants",
		placement: "bottom"
	},
	"userRemoveUserPItemsBtn": {
		element: "#userRemoveUserPItemsBtn",
		title: "Bin",
		content: "Remove all generated UserItems (such as text fields)",
		placement: "bottom"
	},
	"endTour": {
		element: "#logogrossImg",
		title: "End",
		content: "Tour done. Have fun! Click 'next' or 'End tour' to end the tour!",
		orphan: true,
		placement: "left"
	}
}

for (var i in tourPartsDb) {
	tourPartsDb[i]["name"] = i;
}

//Manage Tours!
var toursDb = {
	"introBasicTour": [
		// tourPartsDb["ThumbsUp"],
		// tourPartsDb["ThumbsDown"],
		// tourPartsDb["handsUpBtn"],
		// tourPartsDb["Clap"],
		tourPartsDb["hornBtn"],
		tourPartsDb["silenceBtn"],
		tourPartsDb["afkBtn"],
		tourPartsDb["moderatorDiv"],
		// tourPartsDb["startSnake"],
		// tourPartsDb["showNotes"],
		// tourPartsDb["showFiles"],
		// tourPartsDb["LogoutBtn"],
		// tourPartsDb["ChatInputDiv"],
		// tourPartsDb["SmilieSvg"],
		// tourPartsDb["chatButtonWrapperBtn"],
		// tourPartsDb["toggleFullscreen"],
		// tourPartsDb["ColorChange"],
		// tourPartsDb["ChangePicture"],
		// tourPartsDb["Webcam"],
		// tourPartsDb["ChangePlace"],
		// tourPartsDb["uservolume"],
		// tourPartsDb["mictospeak"],
		// tourPartsDb["HomeBtn"],
		// tourPartsDb["showPresentation"],
		// tourPartsDb["show3dObject"],
		// tourPartsDb["CollabTextEditor"],
		// tourPartsDb["YoutubeBtn"],
		// tourPartsDb["whiteboardTabBtn"],
		// tourPartsDb["screenShareTabBtn"],
		// tourPartsDb["praesiControl"],
		// tourPartsDb["3dObjectControl"],
		// tourPartsDb["praesiStart"],
		// tourPartsDb["praesiBack"],
		// tourPartsDb["praesiNext"],
		// tourPartsDb["praesiENd"],
		// tourPartsDb["praesiCursorBtn"],
		// tourPartsDb["praesiZoomBtn"],
		// tourPartsDb["userTootlsBtn"],
		// tourPartsDb["userRemoveUserPItemsBtn"],
		tourPartsDb["endTour"]
	]
};

function showTour(tourname, forceStart) { //forceStart=true -> Start it even if it was shown already
	var tourData = toursDb[tourname];
	console.log(tourData)
	var tour = new Tour({
		storage: false,
		name: tourname,
		steps: tourData,
		template: "<div class='popover tour'>" +
			"<div class='arrow'></div>" +
			"<h3 class='popover-title'></h3>" +
			"<div class='popover-content'></div>" +
			"<button style='background: gray; padding: 5px 10px 5px 10px; margin-left:10px;' class='btn btn-default' data-role='prev'>« Prev</button>" +
			"<button style='background: gray; padding: 5px 10px 5px 10px;' class='btn btn-default' data-role='next'>Next »</button><br>" +
			"<button style='float: right; margin-right: 15px; background: gray; padding: 7px 15px 7px 15px;' class='btn btn-default' data-role='end'>End tour</button>" +
			"</div>",
	});
	tour.init();
	if (forceStart)
		tour.start(true);
	else
		tour.start();
}

function showSingleTourStep(stepname) {
	var t = [tourPartsDb[stepname], tourPartsDb[stepname]]; //Because of tour bug on tours with only one element
	var tour = new Tour({
		name: stepname,
		steps: t,
		template: "<div class='popover tour'>" +
			"<div class='arrow'></div>" +
			"<h3 class='popover-title'></h3>" +
			"<div class='popover-content'></div>" +
			"<button style='float: right; margin-right: 15px; background: gray; padding: 7px 15px 7px 15px;' class='btn btn-default' data-role='end'>Ok</button>" +
			"</div>",
	});
	tour.init();
	tour.start(true);
}
