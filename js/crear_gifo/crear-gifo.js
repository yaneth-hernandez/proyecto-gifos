function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: { max: 832 },
                height: { max: 440 }
            }
        })
        .then(function(stream) {
            video.srcObject = stream;
            video.play()
        });
}

/* recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
    onGifRecordingStarted: function() {
        console.log('started')
    },
});

 */
function startStop() {

}