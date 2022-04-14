document.getElementById('img').addEventListener('change', ShowImg);

function ShowImg(evt) {

    var files = evt.target.files,
        f = files[0];

    console.log(`This is the file name: ${f.name}`)
    console.log(`This is the file size: ${f.size}k`)

    // ou can also get easily the following attributes: lastModified (Timestamp), lastModifiedDate (Date), and type (FileType)

    console.log(`Last modification :: ${f.lastModified}`)
    console.log(`Last modification Date :: ${f.lastModifiedDate}`)

    // alert("Changed") Test the event

    if (files.length === 0) {
        console.log('No file uploaded...');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            document.getElementById('result').appendChild(img);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(files[0]);
}


function sliceFile(file, chunksAmount) {
    var byteIndex = 0,
        chunks = [];

    for (var n = 1; n < chunksAmount; n++) {
        var byteEnd = Math.ceil((file.size / chunksAmount) * (i + 1));
        chunks.push(file.slice(byteIndex, byteEnd));

        byteIndex += (byteEnd - byteIndex)
    }
    return file;
}

// Notification permission

Notification.requestPermission(() => {
    if (Notification.permission === 'granted') {
        alert("Cool")
    } else if (Notification.permission === 'denied') {
        alert('Notifications Denied')
    } else {
        alert('Default')
    }
})