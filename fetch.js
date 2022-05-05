const results = document.getElementById('result')
    // Init function
const Init = () => {
    SelectAll()
}

// Select all datas

const SelectAll = () => {
    fetch('http://localhost:7000/api')
        .then(res => res.json())
        .then(data => {
            if (data.datas.length > 0) {

                data.datas.forEach(element => {
                    results.innerHTML += `
                    <div id="${element.id}" class="card shadow-sm my-2">
                        <div class="card-body">
                            <p>${element.username}</p>
                            <p>${element.email}</p>
                        </div>
                    </div>`
                });
            } else {
                results.innerHTML = '<p class="alert alert-danger">There is no data</p>'
            }
        })
}


Init()