document.getElementById('img').addEventListener('change', ShowImg);

function ShowImg(evt) {

    var f = evt.target.files;

    // alert("Changed") Test the event

    if (f.length === 0) {
        console.log('No file uploaded...');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        let img = new Image();
        img.onload = function() {
            document.body.appendChild(img);
        };
        reader.readAsDataURL(files[0]);
    };
}