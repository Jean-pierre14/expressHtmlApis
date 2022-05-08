const results = document.getElementById('result')
    // Init function
const Init = () => {
    SelectAll()
    Post()
}

// Post

const Post = () => {
    const Event = document.getElementById('Event')

    Event.onclick = () => {
        e.preventDefault()
        alert("Click")
    }
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
                            <p>${element.name}</p>
                            <p>${element.email}</p>
                            <p class="d-flex justify-content-between">
                                <small>${element.phone_no}</small>
                                <a href="#${element.id}" class="btn btn-sm btn-primary">Voir plus</a>
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




Init()