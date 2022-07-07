const results = document.getElementById('result')
    // Init function
const Init = () => {
    SelectAll()
}

function intMain() {
    this.name = 'Grace\'s';
    this.sound = 'diane';
    console.log("Welcome to sniper code...");
}

intMain.constructor


// Post

const myForm = document.getElementById('myForm')


/**
 * La meilleur facon d'utiliser le javascript ce d'utilise les ex method
 */

myForm.onsubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(myForm);

    const myDatas = new URLSearchParams(formData);

    fetch('http://localhost:7000/api', {
            method: 'POST',
            mode: 'cors',
            body: myDatas
        })
        .then(res => res.json())
        .then(data => {

            myForm.reset();

            SelectAll();

        })
        .catch(e => console.log(e));

}

// Select all datas

const SelectAll = () => {

    fetch('http://localhost:7000/api')
        .then(res => res.json())
        .then(data => {
            if (data.datas.length > 0) {

                let output = ''
                output += '<div class="row">'

                data.datas.forEach(element => {
                    output += `
                    <div id="${element.id}" class="col-md-6 p-1">
                        <div class=" card shadow-sm">
                        <div class="card-body">
                            <p>Name: ${element.username}</p>
                            <p>Email: ${element.email}</p>
                            <p class="d-flex justify-content-between">
                                Phone: 
                                <small>${element.phone_no}</small>
                                <a href="?${element.id}" class="btn btn-sm btn-primary">Voir plus</a>
                            </p>
                        </div>
                        </div>
                    </div>`
                });

                output += '</div>'

                results.innerHTML = output

            } else {
                output = '<p class="alert alert-danger">There is no data</p>'
            }
        })
        .catch(e => results.innerHTML = `<p class="alert alert-danger">You\'re not connecte to the server</p>`)

}

Init();