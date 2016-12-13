var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video_iframe', {
		height: '285',
		width: '437',
		videoId: 'lPQTl8aC_aE',
		/*playerVars: { listType:'playlist', list: 'PLYgaUfURc6R3bUYsHA-30U1AnxiUzSrzR'},*/
		/*KHUSUS PLAYLIST*/
		playerVars: {
			'autoplay': 1,
			'controls': 1,
			'rel': 0,
			'showinfo': 0
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	//event.target.loadPlaylist({list:'PLYgaUfURc6R3bUYsHA-30U1AnxiUzSrzR'});
	//event.target.playVideo();
	//event.target.setVolume(0);
	event.target.mute();
}
var done = false;

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		//setTimeout(stopVideo, 1000);
		done = true;
	}
}

function playVideo() {
	player.playVideo();
}

function pauseVideo() {
	player.pauseVideo();
}

function stopVideo() {
	player.stopVideo();
}