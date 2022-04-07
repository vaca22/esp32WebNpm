document.addEventListener('DOMContentLoaded', function (event) {
    var baseHost = document.location.origin
    var streamUrl = baseHost + ':81'


    const framesize = document.getElementById('framesize')

    framesize.onchange = () => {

        console.log(framesize.value)

    }

    console.log(framesize.value)

})

