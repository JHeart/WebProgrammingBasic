// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady(id) {
    if(id == null){
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'YePv_UGX3-k',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }else{
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: id,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}
function nextVideo() {
    player.nextVideo();
}
function previousVideo() {
    player.previousVideo();
}


var apiBase = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=양다일&key=AIzaSyD20q_iIogaWLuH95gmu6TlpA95NKhspEs&maxResults=30&type=video";
var url = encodeURI(apiBase);

function getYouTubeData(url){
    request(url, function (error, response, body) {

        var result = JSON.parse(body);
        if (!error && response.statusCode == 200) {
            if (result.status == "error") {
                self.sendSocketNotification("YouTube_DATA", { data: null, url: url });
                console.log("error");
            } else {
                data:result
                url: url;
                console.log("success");

            }
        } else {

        }
    });
}

/*
getVideoId :function(){
    var self = this;
    var videoId;
    var i;
    if(this.result.items.length > 0 ){
        //나중에 추가적으로 기능을 늘릴예정
        /!*responsiveVoice.speak("상위 5개 영상만 보여주j겠습니다. 어떤 영상을 보시겠습니까?","Korean Female");
        for(i=0 ; i<5; i++){
            this.resultArray.push(this.result.snippet[i].title);*!/
        var r = Math.floor((Math.random() * this.result.items.length) + 1);
        this.videoId = this.result.items[r].id.videoId;
        return this.videoId;
    }
    //return default youtube
    return null;

}*/
/*
document.getElementsByClassName('sing1')[0]
    .addEventListener('click', function (event) {
        alert("hello");
    });*/
