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
            if (data.length > 0) {

            } else {

            }
        })
}


Init()